import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
import "./Subscribe.css"

 export const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
  
    const handleSubscribe = () => {
      // Here, you could implement the logic to submit the email to a server for subscription
      setIsSubscribed(true);
 
    };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }
  return (
    <div className='ap'>
     <div className="background-image" />
      <div className="overlay">
        <div className="content">
          <header className="App-header">
            <h1>Coming Soon</h1>
            <p>Subscribe to get notified!</p>
            {!isSubscribed ? (
              <div className="Subscribe">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe} onSubmit={handleClick}>Subscribe</button>
              </div>
            ) : (
              <p className="Subscribed">Thanks for subscribing!</p>
            )}
          </header>
          <div className="product-image" />
        </div>
      </div> 
    </div>
  )
}

