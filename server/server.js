const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Import controllers
const sendMail = require("./controller/sendMail");
// const sendWhatsapp = require("./controller/sendWhatsapp");

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to run multiple actions
const processEnrollment = async (req, res, next) => {
    console.log('Incoming request data:', req.body); // Debug: Log incoming data

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
            referralSource,
            Message
        } = req.body;

        console.log('Validating required fields...'); // Debug: Validation step
        if (!fullName || !email || !phone ) {
            console.error('Validation failed: Missing required fields'); // Debug: Validation error
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        console.log('Running parallel tasks: sendMail and sendWhatsapp'); // Debug: Before parallel tasks
        const [mailResult, whatsappResult] = await Promise.all([
            sendMail(req),
            // sendWhatsapp(req)
        ]);

        console.log('Parallel tasks completed:', { mailResult, /*whatsappResult*/ }); // Debug: Task results

        // Attach results to the request
        req.enrollmentResults = {
            mail: mailResult,
            // whatsapp: whatsappResult
        };

        next(); // Proceed to the next middleware
    } catch (error) {
        console.error('Enrollment processing error:', error); // Debug: Log error details
        res.status(500).json({
            message: 'Error while processing',
            error: error.message
        });
    }
};

// Final response middleware
const sendEnrollmentResponse = (req, res) => {
    console.log('Sending final response to the client:', req.enrollmentResults); // Debug: Final response
    res.status(200).json({
        message: 'Successfully submitted the form',
        ...req.enrollmentResults
    });
};

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack); // Debug: Log unhandled errors
    res.status(500).json({
        message: 'Something went wrong',
        error: err.message
    });
});

// Route setup
app.post('/enroll',
    processEnrollment,
    sendEnrollmentResponse
);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Debug: Server started
});

// Export for testing or modular use
module.exports = app;
