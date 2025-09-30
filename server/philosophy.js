const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
require('dotenv').config();

const client = new OpenAI({
    apiKey: process.env.PHILOSOPHY_API_KEY
});

router.post('/generate', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [

                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 300,
            temperature: .9
        });

        res.json({
            success: true,
            quote: response.choices[0].message.content
        });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;