const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'info@homeconvey.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`
    }).then(response => {
        console.log('Response', response)
    }).catch(e => {
        console.log('Error', e)
        console.log(e.response.body.errors)
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'info@homeconvey.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}.  I hope to see you back sometime soon.`
    }).then(response => {
        console.log('Response', response)
    }).catch(e => {
        console.log('Error', e)
        console.log(e.response.body.errors)
    })
}

module.exports = {
    sendWelcomeEmail, sendCancellationEmail
}