const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { subject, text } = req.body;
    // console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_EMAIL_PASS
        },
    });

    const mailOptions = {
        from: `"Flights Delayed" <${process.env.SENDER_EMAIL}>`,
        to: process.env.RECEIVER_EMAIL,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        console.log(info);
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
