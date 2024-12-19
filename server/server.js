const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Import controllers
const sendMail = require("./controller/sendMail");
const sendWhatsapp = require("./controller/sendWhatsapp"); // Add this import

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to run multiple actions
const processEnrollment = async (req, res, next) => {
    try {
        // Validate required fields
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

        if (!fullName || !email || !phone || !courseInterest) {
            return res.status(400).json({ 
                message: 'Missing required fields' 
            });
        }

        // Parallel processing of mail and WhatsApp
        const [mailResult, whatsappResult] = await Promise.all([
            sendMail(req),  // Remove res parameter
            sendWhatsapp(req)  // Remove res parameter
        ]);

        // Attach results to the request
        req.enrollmentResults = {
            mail: mailResult,
            whatsapp: whatsappResult
        };

        next();
    } catch (error) {
        console.error('Enrollment processing error:', error);
        res.status(500).json({ 
            message: 'Enrollment processing error',
            error: error.message 
        });
    }
};

// Final response middleware
const sendEnrollmentResponse = (req, res) => {
    res.status(200).json({
        message: 'Enrollment processed successfully',
        ...req.enrollmentResults
    });
};

// Route setup
app.post('/enroll', 
    processEnrollment, 
    sendEnrollmentResponse
);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'Something went wrong',
        error: err.message 
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export for testing or modular use
module.exports = app;