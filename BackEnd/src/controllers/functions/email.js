var nodemailer = require('nodemailer');
module.exports = {
    sendEmail : function (email, verifToken){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ishak.zail.iz@gmail.com',
                pass: 'cowkamzxkqkzdlth'
            }
        });
        const url = `http://10.0.2.2:8081/ConfirmEmail/${verifToken}`;
        var mailOptions = {
            from: 'ishak.zail.iz@gmail.com',
            to: email,
            subject: 'Confirm your account',
            html: `<a href="${url}">Click me</a>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent for confirmation: ' + info.response);
            }
        });
    },
    sendResetEmail : function (email, verifToken){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ishak.zail.iz@gmail.com',
                pass: 'cowkamzxkqkzdlth'
            }
        });
        const url = `http://localhost:3000/resetPassword/${verifToken}`;
        var mailOptions = {
            from: 'ishak.zail.iz@gmail.com',
            to: email,
            subject: 'Reset your password',
            html: `<a href="${url}">Click me</a>`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email for reset password is sent: ' + info.response);
            }
        });
    },
};