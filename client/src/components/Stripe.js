import React, {useState, useEffect} from "react";



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
        <div className="product">
          <img
            src="https://i.imgur.com/EHyR2nP.png"
            alt="Buy me a coffee"
          />
          <div className="description">
            <h3>Buy me a coffee</h3>
            <h5>$5.00</h5>
          </div>
        </div>
        <button type="button" onClick={handleCheckout} disabled={loading}>
          {loading ? "Redirecting…" : "Checkout"}
        </button>
      </section>
    );
  };

  



export default Stripe;
