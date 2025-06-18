import React, { useState } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * The main SummarizeIt App component.
 * Features:
 *  - Text input for articles to be summarized
 *  - Summary display area
 *  - Clear button to reset input and summary
 *  - Responsive, minimal, mobile-friendly layout
 *  - Light theme & branding colors integrated
 *  - API call placeholder for backend integration (see handleSummarize)
 */
function App() {
  // State for input text and summarized text/result
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Color theme (matches light-theme and required accent colors)
  // These are also defined in App.css, but set here for quick adjustment.
  const theme = {
    primary: "#4A90E2",
    secondary: "#50E3C2",
    accent: "#F5A623",
    background: "#fff",
    text: "#222",
  };

  /**
   * PUBLIC_INTERFACE
   * Handles sending the text to the summarization API.
   * NOTE: Replace the fetch URL with the actual backend endpoint, or inject as config/ENV.
   */
  const handleSummarize = async (e) => {
    e.preventDefault();
    setSummary('');
    setError(null);
    setLoading(true);

    // DOC: Replace with actual API endpoint
    // For local dev, use a placeholder setTimeout (mock fetch)
    // Example endpoint: "/api/summarize"
    // Uncomment and modify accordingly when real API is ready.
    //
    // fetch("/api/summarize", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ text: input }),
    // })
    //   .then(res => res.json())
    //   .then(data => { setSummary(data.summary); setLoading(false); })
    //   .catch(err => { setError("Summarization failed."); setLoading(false); });

    setTimeout(() => {
      // Mock summarization response
      setSummary("This is a sample summary output. Integrate with your backend API to get real summarization.");
      setLoading(false);
    }, 1000);
  };

  /**
   * PUBLIC_INTERFACE
   * Clears both input and summary fields.
   */
  const handleClear = () => {
    setInput('');
    setSummary('');
    setError(null);
  };

  return (
    <div className="app" style={{ background: theme.background, color: theme.text, minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <nav className="navbar" style={{ background: theme.primary, borderBottomColor: "#c7e2fa" }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <div className="logo" style={{ color: "#fff" }}>
              <span className="logo-symbol" style={{ color: theme.secondary, fontWeight: 900 }}>*</span>
              SummarizeIt
            </div>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{
              background: theme.secondary,
              color: "#fff",
              padding: "7px 16px",
              borderRadius: 4,
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1rem"
            }}>
              Docs
            </a>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main style={{ flex: 1, paddingTop: 100 }}>
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <section aria-label="SummarizeIt Input and Output" style={{
            background: "#fff",
            boxShadow: "0 2px 18px 0 rgba(100,137,215,0.09)",
            borderRadius: 14,
            padding: "24px 18px 32px 18px",
            margin: "40px 0",
            minWidth: 0
          }}>
            {/* Heading */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div className="subtitle" style={{
                color: theme.secondary,
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.01em"
              }}>
                Article/Text Summarizer
              </div>
              <h1 className="title" style={{
                color: theme.primary,
                fontSize: "2.2rem",
                fontWeight: 700,
                margin: "10px 0 0 0"
              }}>SummarizeIt</h1>
              <div className="description" style={{ color: "#666", fontSize: "1.06rem" }}>
                Paste your long article or any text below, and SummarizeIt will provide a concise summary.
              </div>
            </div>

            {/* Text Input & Actions */}
            <form onSubmit={handleSummarize} autoComplete="off" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <label htmlFor="articleInput" style={{
                fontSize: "1rem",
                color: "#888",
                marginBottom: 5
              }}>
                Enter text to summarize
              </label>
              <textarea
                id="articleInput"
                className="input-area"
                value={input}
                rows={6}
                onChange={e => setInput(e.target.value)}
                style={{
                  resize: "vertical",
                  border: `1.5px solid ${theme.primary}40`,
                  borderRadius: 8,
                  padding: "12px 10px",
                  fontSize: "1.1rem",
                  background: "#fcfcfc",
                  color: "#222",
                  lineHeight: "1.55",
                  fontFamily: "inherit",
                  minHeight: 90
                }}
                placeholder="Paste your article, notes, or any text here..."
                required
              />
              {/* Actions */}
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 9 }}>
                <button
                  type="submit"
                  className="btn btn-large"
                  style={{
                    background: theme.primary,
                    color: "#fff",
                    minWidth: 100,
                    borderRadius: 5,
                    border: "none",
                    fontWeight: 600,
                    fontSize: "1.07rem",
                    letterSpacing: ".01em",
                    boxShadow: "0 1px 4px 0 #c7e2fa8a",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    transition: "background 0.18s",
                  }}
                  disabled={loading || !input.trim()}
                  aria-label="Submit text for summarization"
                >
                  {loading ? "Summarizing..." : "Summarize"}
                </button>
                <button
                  type="button"
                  className="btn"
                  style={{
                    background: "#ececec",
                    color: "#777",
                    minWidth: 80,
                    borderRadius: 5,
                    border: "none",
                    fontWeight: "500",
                    fontSize: "1rem",
                    marginLeft: 0,
                    boxShadow: "0 1px 2px #eee",
                    cursor: input || summary ? "pointer" : "not-allowed",
                    opacity: input || summary ? 1 : 0.5
                  }}
                  onClick={handleClear}
                  disabled={(!input && !summary) || loading}
                  aria-label="Clear input and summary"
                >
                  Clear
                </button>
              </div>
            </form>

            {/* Output Section */}
            {error &&
              <div style={{
                color: "#be2e36",
                background: "#fff6f6",
                border: "1px solid #f8d7da",
                padding: "12px 10px",
                borderRadius: 7,
                fontSize: "1rem",
                marginTop: 12,
                marginBottom: 6,
              }}>{error}</div>}

            {/* Summary Display */}
            <div
              id="summaryOutput"
              style={{
                minHeight: 72,
                marginTop: 14,
                background: "#fcfcfc",
                borderRadius: 7,
                border: "1px solid #eef2fc",
                padding: "15px 13px",
                fontSize: "1.14rem",
                color: theme.accent,
                boxShadow: summary ? "0 1px 5px 0 #fccf8c38" : "none",
                whiteSpace: "pre-wrap"
              }}
              aria-live="polite"
              tabIndex={0}
            >
              {summary
                ? summary
                : <span style={{ color: "#bfbfbf" }}>Summary will appear here.</span>
              }
            </div>
          </section>

          {/* Mobile-optimized push space */}
          <div style={{ height: 24 }} />
        </div>
      </main>

      {/* Responsive, subtle footer */}
      <footer style={{
        textAlign: "center",
        padding: "17px 0 13px 0",
        fontSize: "0.98rem",
        color: "#888",
        borderTop: "1px solid #f6f6f6",
        background: "#f7fafb"
      }}>
        Made with <span style={{ color: theme.accent }}>♥</span> by SummarizeIt Team.
      </footer>
    </div>
  );
}

export default App;