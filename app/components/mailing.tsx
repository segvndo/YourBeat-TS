'use client';
import React, { useState } from "react";
import Buttons from "@/app/components/Button";
import Subscribe from "@/app/components/InputSubscribe";

const Mailing: React.FC = () => {
  const [subscriptionComplete, setSubscriptionComplete] = useState(false);
  const [email, setEmail] = useState("");


  // Check if the email is not an empty string before initiating the subscription process. If the email is empty, it won't set subscriptionComplete to true
  const handleSubscribe = async () => {
    try {
      if (email.trim() !== "") {
        await subscribeUser(email);
        setSubscriptionComplete(true);
      }
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };

  const subscribeUser = async (userEmail: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`Subscribed ${userEmail} to the mailing list`);
        resolve();
      }, 1000);
    })
  }

  return (
    <footer>
      <div className="flex justify-center items-center mt-40 text-red-500 font-serif mb-4 text-2xl font-bold">
        Sign Up For YourBeat Mailing List
      </div>

      {subscriptionComplete && email ? (
        <p className="flex justify-center items-center mt-3 pb-6">Welcome to YourBeat! Stay tuned for exciting updates and exclusive offers. Thanks for joining us!</p>
      ) : (
        <>

          <div className="pb-6">
            YourBeat is an exciting new music network platform with a strong commitment to personal data security. Sign up for our mailing list to get notified when the web app is deployed, and we'll be sure to let you know when you can create your profile and start connecting with music industry professionals or discovering awesome new artists!
          </div>


          {/* onClick handlers for the buttons call handleSubscribe directly to ensure the subscription process is triggered only when a button is clicked */}
          <div className="flex flex-row justify-center">
            <Buttons
              variant="green"
              onClick={() => handleSubscribe()}
            >Artist
            </Buttons>

            <Buttons
              variant="green"
              onClick={() => handleSubscribe()}
            >Fan
            </Buttons>

            <Buttons
              variant="green"
              onClick={() => handleSubscribe()}
            >Vendor
            </Buttons>

            <Buttons
              variant="green"
              onClick={() => handleSubscribe()}
            >Venue
            </Buttons>

          </div>

          <Subscribe
            setEmail={setEmail}
            handleSubscribe={handleSubscribe}
          />
        </>
      )}

    </footer>
  );
};


export default Mailing;
