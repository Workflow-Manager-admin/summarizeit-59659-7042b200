//
// SummarizeIt Backend - Node.js + Express
// Implements a /api/summarize POST endpoint accepting { text: string } and returning { summary: string }.
// Includes CORS, JSON body parsing, and placeholder logic. Ready for real summarization logic integration.
//

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// MIDDLEWARES

// PUBLIC_INTERFACE
// Enable CORS for all origins to allow connection from the frontend
app.use(cors());

// PUBLIC_INTERFACE
// Parse JSON request bodies
app.use(express.json());

/**
 * PUBLIC_INTERFACE
 * POST /api/summarize
 * Receives { text: string } in the JSON body.
 * Returns { summary: string }, using a placeholder logic for demonstration.
 * Replace the summary generation code with actual NLP or model-based logic for production use.
 */
app.post('/api/summarize', (req, res) => {
  const { text } = req.body;
  // Basic error handling for missing text
  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Missing or invalid "text" in request body.' });
  }

  // Placeholder summarization logic:
  // For demo, return the first 30 words or 180 chars of input as "summary"
  // Replace this with real summarization logic as needed.
  const wordLimit = 30;
  const charLimit = 180;
  let summary = text.split(/\s+/).slice(0, wordLimit).join(' ');
  if (summary.length > charLimit) {
    summary = summary.slice(0, charLimit) + '...';
  }
  if (summary.length < text.length) {
    summary += ' ...';
  }

  return res.json({ summary });
});

// Root route (optional: for health check)
app.get('/', (req, res) => {
  res.json({ status: "SummarizeIt backend is running." });
});

// Start server
app.listen(PORT, () => {
  console.log(`SummarizeIt backend listening on port ${PORT}`);
});

/*
INSTRUCTIONS:

1. Install dependencies:
   cd summarizeit_backend
   npm install

2. Run backend server:
   npm start
   (For auto-reload on change: npm run dev)

3. API Usage:

   POST http://localhost:4000/api/summarize
   Content-Type: application/json
   Body: { "text": "Your input text to be summarized..." }

   Response:
   { "summary": "..." }

4. Edit summarization logic in index.js to connect to real AI/NLP modules.

5. Ensure your React frontend is configured to call this backend (update endpoint if backend runs on a different host or port).

*/
