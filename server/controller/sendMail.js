const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer =require("nodemailer");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    }
})

const sendMail = async (req) => {
    try {
        const {
            fullName,
            email,
            phone,
            courseInterest,
            gender,
            dob,
            city,
            referralSource,
            Message
          } = req.body;

        // Send response first
        
        
        // Email sending logic
        // Email configuration
        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: process.env.TO_EMAIL,
            subject: "New Lead Information",
            text: `Name: ${fullName}\n
                Email: ${email}\n
                Phone: ${phone}\n
                Course Interested: ${courseInterest}\n
                Additional Information: [\n
                \tGender: ${gender}\n
                \tDOB: ${dob}\n
                \tCity: ${city}\n
                \tReferral Source: ${referralSource}\n
                \tMessage: ${Message}\n
                ]`,
            html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h3 style="color: #007BFF;">New Lead Information</h3>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Course Interested:</strong> ${courseInterest}</p>
                    <p><strong>Message:</strong> ${Message}</p>
                    
                    <h4 style="margin-top: 1em; color: #555;">Additional Information:</h4>
                    <ul style="list-style-type: none; padding-left: 0;">
                        <li><strong>Gender:</strong> ${gender}</li>
                        <li><strong>DOB:</strong> ${dob}</li>
                        <li><strong>City:</strong> ${city}</li>
                        <li><strong>Referral Source:</strong> ${referralSource}</li>
                        
                    </ul>
                    </div>`
        };



        await transporter.sendMail(mailOptions);
        
        return {
            status: 'success',
            message: 'Email sent successfully'
        };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            status: 'failed',
            message: 'Failed to send email',
            error: error.message
        };
    }
};


// const sendMail = async(req, res) => {
//     res.send("I am sending mail");
// };

module.exports = sendMail;