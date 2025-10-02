/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const axios = require("axios");

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = "8232059510:AAEPEcEXJLd_PPCZ1FFkH9Ixawx6fRZV3-E";
const TELEGRAM_CHAT_ID = "210910409";

// Function to send Telegram message
async function sendTelegramMessage(message) {
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });
    
    logger.info('Telegram message sent successfully', response.data);
    return response.data;
  } catch (error) {
    logger.error('Error sending Telegram message:', error);
    throw error;
  }
}

// Trigger when a new contact message is created
exports.sendContactNotification = onDocumentCreated(
  "contact_messages/{messageId}",
  async (event) => {
    const messageData = event.data.data();
    const messageId = event.params.messageId;
    
    logger.info('New contact message received:', messageData);
    
    // Format the message for Telegram
    const telegramMessage = `
🔔 <b>New Contact Form Message</b>

👤 <b>Name:</b> ${messageData.name || 'Not provided'}
📧 <b>Email:</b> ${messageData.email || 'Not provided'}
🏢 <b>Company:</b> ${messageData.company || 'Not provided'}
💬 <b>Message:</b>
${messageData.message || 'No message'}

📅 <b>Time:</b> ${messageData.timestamp ? messageData.timestamp.toDate().toLocaleString() : 'Unknown'}
🌐 <b>IP:</b> ${messageData.ip || 'Unknown'}
📱 <b>User Agent:</b> ${messageData.userAgent ? messageData.userAgent.substring(0, 100) + '...' : 'Unknown'}

🆔 <b>Message ID:</b> ${messageId}
    `.trim();
    
    try {
      await sendTelegramMessage(telegramMessage);
      logger.info('Contact notification sent successfully');
    } catch (error) {
      logger.error('Failed to send contact notification:', error);
    }
  }
);

// Test function to send a test message
exports.testTelegramBot = onRequest(async (req, res) => {
  try {
    const testMessage = `
🤖 <b>Test Message from TheGenAI Bot</b>

This is a test message to verify that your Telegram bot is working correctly!

✅ Bot is connected
✅ Firebase Functions are working
✅ Ready to receive contact form notifications

Time: ${new Date().toLocaleString()}
    `.trim();
    
    await sendTelegramMessage(testMessage);
    res.json({ success: true, message: 'Test message sent successfully!' });
  } catch (error) {
    logger.error('Test message failed:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
