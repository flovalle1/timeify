const express = require('express');
const schedule = require('node-schedule');
const { Resend } = require('resend');
require('dotenv').config({ path: '../.env' });

const domain = process.env.DOMAIN;
const resend_api_key = process.env.RESEND_API_KEY;
const personal_email = process.env.PERSONAL_EMAIL;
const resend = new Resend(resend_api_key);
const app = express();

var tracking_started = false;

app.use(express.json());

schedule.scheduleJob('30 9 * * *', () => {
    if (!tracking_started) {
        resend.emails.send({
            from: `Timify Reminder <timify@${domain}>`,
            to: [personal_email],
            subject: 'Track Time now!',
            html: '<p>You havent started your time tracking. Do it now by starting Timify on your console!</p>',
        });
    }
});

schedule.scheduleJob('59 23 * * *', () => {
    tracking_started = false;
    console.log('Tracking state reset');
});

app.post('/tracking-started', (req, res) => {
    tracking_started = true;
    console.log('Tracking started');
});

app.listen(3000, () => console.log('Cronjob Server running on port 3000'));