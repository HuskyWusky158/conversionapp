import nodemailer from 'nodemailer';

// Your code continues here...


// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true, 
    auth: {
        user: 'easyconversions158@gmail.com',
        pass: 'uiio wcws lhig bllx'
    }
});

transporter.sendMail({
    to: 'easyconversions158@gmail.com',
    subject: 'hello',
    html: '<h1>Hi how are you</h1>'
}).then(()=>{
    console.log('Email sent');

}).catch(err=>{
    console.error(err);
});