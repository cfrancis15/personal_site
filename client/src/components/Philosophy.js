import React, {useState} from 'react';
import BookCards from './BookCards';



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
        <>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{textAlign:"center"}}>Daily Dose of Wisdom</h2>
            
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
                    cursor: loading ? 'not-allowed' : 'pointer',
                    
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
                    
                    
                    
                <br/>
                
                </div>
            
            )}
            
          
            
       <p>
        
        Around 13, I first stumbled into philosophy—really just restless thoughts about meaning, free will, and why we’re here. One day, while peppering my uncle with these “big questions,” he—perhaps tired of them—pointed me to Sam Harris’s podcast, then called Waking Up. The first episodes I heard were excerpts from his book, exploring spirituality and the nature of the self, and I was hooked.

Soon after, I wandered into the philosophy section at Barnes & Noble, determined to ease myself in. I wasn’t ready for a War and Peace-sized tome, so I picked a slim volume with a cover I liked—coincidentally also by Harris: Free Will. That choice proved perfect.

It kickstarted an intellectual journey I know I’ll be on for life. One of my goals is to write a book that lays out, from metaphysics to aesthetics, what I believe and why. At 23, I know there’s much more to learn before I can take that on, but I’m doing my best to absorb everything I can to eventually make it happen!</p>

            



        </div>
        <BookCards/>
        </>
    );
}







export default Philosophy;