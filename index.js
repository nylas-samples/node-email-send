import 'dotenv/config';
import Nylas from 'nylas';

const NylasConfig = {
  apiKey: process.env.NYLAS_API_KEY,
  apiUri: process.env.NYLAS_API_URI,
};

const nylas = new Nylas(NylasConfig);

async function sendEmail() {
  try {
    const sentMessage = await nylas.messages.send({
        identifier: process.env.USER_GRANT_ID,
        requestBody: {
          to: [{ name: "Team DevRel", email: process.env.RECIPIENT_EMAIL}],
          subject: "With Love, from Nylas",
          body: "Hi, I'm using the Nylas Email API to send a message!",
        },
    });
    
    console.log('Email sent:', sentMessage);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

sendEmail();