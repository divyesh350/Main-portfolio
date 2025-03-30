    import nodemailer from 'nodemailer';
    import ContactMail from '../email/ContactMail';
    import UserConfirmationMail from '../email/UserConfirmationMail';
    import { render } from '@react-email/render';
    import mongoose from 'mongoose';
    import dbConnect from '../lib/dbConnect';

    // MongoDB Schema for Contact Messages
    const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
    });

    // Create Contact model if it doesn't exist
    const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
    }
    });

    export async function sendEmail({ name, email, message }) {
    try {
        // Connect to MongoDB using the dbConnect function
        await dbConnect();
        
        // Store the contact form data in MongoDB
        const contactData = new Contact({
        name,
        email,
        message
        });
        await contactData.save();

        // Create email templates
        const adminEmail = ContactMail({ name, email, message });
        const userEmail = UserConfirmationMail({ name, message });

        // Render email templates to HTML
        const adminEmailHtml = await render(adminEmail);
        const userEmailHtml = await render(userEmail);

        // Email options for admin (you)
        const adminMailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,   // Your Gmail address
        subject: `New Contact Form Submission from ${name}`,
        html: adminEmailHtml,
        replyTo: email // This allows you to reply directly to the sender
        };

        // Email options for user (confirmation)
        const userMailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: email,   // User's email address
        subject: `Thank you for contacting me, ${name}!`,
        html: userEmailHtml
        };

        // Send both emails
        const [adminInfo, userInfo] = await Promise.all([
        transporter.sendMail(adminMailOptions),
        transporter.sendMail(userMailOptions)
        ]);

        console.log('Admin email sent:', adminInfo.messageId);
        console.log('User email sent:', userInfo.messageId);

        return { 
        success: true, 
        data: { adminInfo, userInfo },
        message: "Emails sent successfully" 
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return { 
        success: false, 
        error: error.message 
        };
    }
    }
