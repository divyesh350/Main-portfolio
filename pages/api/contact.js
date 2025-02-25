import { sendEmail } from '@/lib/mail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const sender = {
      name: name,
      email: email,
    };
    const recipient = {
      name: 'Divyesh',
      email: process.env.RECEIVER_EMAIL, // Use env variable for flexibility
    };

    const result = await sendEmail({
      from: sender,
      to: recipient,
      subject: 'Contact Form Submission',
      message: message,
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
