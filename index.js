import dotenv from "dotenv/config.js";
import Nylas from "nylas";
import Draft from "nylas/lib/models/draft.js";

Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);

const draft = new Draft.default(nylas, {
  subject: "With Love, from Nylas",
  body: "Well well well...",
  to: [{ name: "Recipient name", email: process.env.SENDER_ADDRESS }],
});

try {
  const message = await draft.send();
  console.log(`Message "${message.subject}" was sent with ID ${message.id}`);
} catch (err) {
  console.log(err);
}
