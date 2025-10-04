import React, {useState} from "react";
import Button from '@mui/material/Button';


function Stripe(){
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/checkout", { method: "POST" });
        if (!res.ok) throw new Error("Failed to create Stripe session");
        const data = await res.json();
        // Redirect the browser to Stripe Checkout
        window.location = data.url;
      } catch (err) {
        console.error(err);
        alert("Unable to start checkout session.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <section>
        <div>

          <div>
            <h3>Help me lock in!</h3>
          </div>
        </div>
        <Button variant="contained" onClick={handleCheckout} disabled={loading}>
          {loading ? "Redirecting…" : "Gift a coffee"}
        </Button>
        
      </section>
    );
  };

  



export default Stripe;
