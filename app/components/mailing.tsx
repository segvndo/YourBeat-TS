'use client';
import React, { useState } from "react";
import Button from "@/app/components/button";
import Subscribe from "./inputSubscribe";

const Mailing: React.FC = () => {
  const [subscriptionComplete, setSubscriptionComplete] = useState(false);

  return (
    <footer>
      <div className="flex justify-center items-center mt-40 text-red-500 font-sans mb-4 text-xl">
        Sign Up For YourBeat Mailing List
      </div>

      <div>
        YourBeat is an exciting new music network platform with a strong commitment to personal data security. Sign up for our mailing list to get notified when the web app is deployed, and we'll be sure to let you know when you can create your profile and start connecting with music industry professionals or discovering awesome new artists!
      </div>


      <div className="flex flex-row justify-center">
        <Button variant="green">Artist</Button>
        <Button variant="green">Fan</Button>
        <Button variant="green">Vendor</Button>
        <Button variant="green">Venue</Button>
      </div>

      <Subscribe />

    </footer>
  );
};


export default Mailing;
