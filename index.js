import dotenv from "dotenv";
import Nylas from "nylas";
import draftClass from "nylas/lib/models/draft.js";
const { default: Draft } = draftClass;

dotenv.config();

Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

const nylas = Nylas.with(process.env.ACCESS_TOKEN);

const draft = new Draft(nylas, {
  subject: "With Love, from Nylas",
  body: "Well well well...",
  to: [{ name: "Sender name", email: process.env.SENDER_ADDRESS }],
});

const message = await draft.send();
console.log(`${message.id} was sent`);
