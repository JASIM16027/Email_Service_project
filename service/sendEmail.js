const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {

    const { from, to, subject, text, html } = req.body;

    // Create a SMTP transporter object
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'bernadine.bosco@ethereal.email',
            pass: 'GfZeM7SrS9cjy78gze'
        }
    });

    const mailOptions = {
        from: `Sender Name <${from}>`,
        to: `Recipient <${to}>`,
        subject: subject,
        text: text,
        html: html,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);
        res.json({ success: true, message: 'Email sent successfully', info });

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Error sending email', error });
    }


}

module.exports = sendEmail;