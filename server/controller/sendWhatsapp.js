const dotenv = require('dotenv');
dotenv.config();

// Twilio setup
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;
// const toWhatsAppNumber = process.env.RECEIVER_WHATSAPP_NUMBER;
// const client = require('twilio')(accountSid, authToken);

const axios = require('axios');

const sendWhatsapp = async (req) => {
    try {
        const {
            fullName,
            email,
            phone,
            courseInterest,
            gender,
            dob,
            city,
            referralSource
        } = req.body;

        // Prepare message content
        const messageBody = `*New Lead Information*\n
                            *Name:* ${fullName}
                            *Email:* ${email}
                            *Phone:* ${phone}
                            *Course Interested:* ${courseInterest}
                            *Additional Information:*
                            - Gender: ${gender || 'Not Provided'}
                            - DOB: ${dob || 'Not Provided'}
                            - City: ${city || 'Not Provided'}
                            - Referral Source: ${referralSource || 'Not Provided'}`;

        // WhatsApp Cloud API configuration
        const WHATSAPP_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
        const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

        // Send WhatsApp message using Axios
        const response = await axios.post(
            `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
            {
                messaging_product: 'whatsapp',
                recipient_type: 'individual',
                to: phone.replace(/\D/g, ''), // Remove non-digit characters
                type: 'text',
                text: { body: messageBody }
            },
            {
                headers: {
                    'Authorization': `Bearer ${WHATSAPP_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return {
            status: 'success',
            message: 'WhatsApp message sent successfully',
            messageId: response.data.messages[0].id
        };
    } catch (error) {
        console.error('WhatsApp sending error:', error.response ? error.response.data : error);
        return {
            status: 'failed',
            message: 'Failed to send WhatsApp message',
            error: error.response ? error.response.data : error.message
        };
    }
};

module.exports = sendWhatsapp;