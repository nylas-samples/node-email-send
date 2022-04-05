// Import your dependencies
import dotenv from "dotenv/config.js";
import Nylas from "nylas";
import Draft from "nylas/lib/models/draft.js";

// Configure your Nylas client
Nylas.config({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});
const nylas = Nylas.with(process.env.ACCESS_TOKEN);

// Create a draft email
const draft = new Draft.default(nylas, {
  subject: "With Love, from Nylas",
  body: "Well well well...",
  to: [{ name: "Recipient name", email: process.env.RECIPIENT_ADDRESS }],
});

// Send the email
try {
  const message = await draft.send();
  console.log(`Message "${message.subject}" was sent with ID ${message.id}`);
} catch (err) {
  console.error("Error:\n", err);
}
