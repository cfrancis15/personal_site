import React, {useState} from 'react';

function Philosophy(){
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchPhilosophyQuote = async () => {
        setLoading(true);
        setError('');
        
        try {
            const response = await fetch('http://localhost:5000/api/philosophy/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: "Make it different each time: Give me a random philosophy quote. Note the philosopher. Make it random each time."
                })
            });

            const data = await response.json();
            
            if (data.success) {
                setQuote(data.quote);
            } else {
                setError(data.error || 'Failed to fetch quote');
            }
        } catch (err) {
            setError('Network error: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Daily Dose of Wisdom</h2>
            
            <button 
                onClick={fetchPhilosophyQuote}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: loading ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? 'Loading...' : 'Get Philosophy Quote'}
            </button>

            {error && (
                <div style={{ 
                    color: 'red', 
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: '#ffe6e6',
                    border: '1px solid #ff9999',
                    borderRadius: '5px'
                }}>
                    Error: {error}
                </div>
            )}

            {quote && (
                <div style={{ 
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #dee2e6',
                    borderRadius: '5px',
                    fontStyle: 'italic'
                }}>
                    <strong>Quote:</strong><br />
                    {quote}
                </div>
            )}
        </div>
    );
}

export default Philosophy;