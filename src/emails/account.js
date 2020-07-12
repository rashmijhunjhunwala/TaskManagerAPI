const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    
    const message={
        to: email,
        from: 'rashmijhunjhunwala068@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }

    sgMail
  .send(message, (error, result) => {
    if (error) {
      console.log(error)
    }
    else {
      console.log("successful")
    }
  });
}

const sendCancelationEmail = (email, name) => {
    const message={
        to: email,
        from: 'rashmijhunjhunwala068@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }
    sgMail
  .send(message, (error, result) => {
    if (error) {
      console.log(error)
    }
    else {
      console.log("successful")
    }
  });

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}