# SummarizeIt Backend

A lightweight Node.js + Express backend to provide text summarization capability for the SummarizeIt app.

## Features

- POST `/api/summarize`: Accepts JSON `{ text: ... }`, returns `{ summary: ... }`
- CORS enabled for easy frontend integration
- Easy to extend: replace the mock summarization logic in `index.js` with real AI/NLP code

## Setup

1. `cd summarizeit_backend`
2. `npm install`

## Running

- Development: `npm run dev`
- Production: `npm start`

By default, listens on **port 4000**.
   
## API

**POST `/api/summarize`**

- **Request body:** `{ "text": "your text here" }`
- **Response:** `{ "summary": "summary..." }`

## Customization

- Update `index.js` to plug in your summarization model or service.
- Adjust CORS settings if deploying with a restricted frontend domain.

## License

MIT
