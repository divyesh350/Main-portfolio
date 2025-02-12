import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== "development",
  auth:{
    user:process.env.MAIL_USER,
    pass:process.env.MAIL_PASSWORD
  }
});

export const sendEmail = async(sender,recepients,subject,message)=>{
 const mailOptions = {
   from: sender,
   to: recepients,
   subject: subject,
   text: message,
   html
 }

 const result = await transport.sendMail(mailOptions);

 return result
}
