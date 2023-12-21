import React from "react";

const Mailing: React.FC  = () => {
  return (
    <footer>
      <div className="flex justify-center items-center mt-14 text-red-500 font-sans mb-4 text-xl">
        Sign Up For YourBeat Mailing List
      </div>

      <div>
        YourBeat is an exciting new music network platform with a strong commitment to personal data security. Sign up for our mailing list to get notified when the web app is deployed, and we'll be sure to let you know when you can create your profile and start connecting with music industry professionals or discovering awesome new artists!
      </div>

      <div className="flex flex-row justify-center">
        <div>
          <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Venue</button>
        </div>
        <div>
          <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Artist</button>
        </div>
        <div>
          <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Vendor</button>
        </div>
        <div>
          <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Fan</button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <input className="h-10 mt-4 pl-2" type="text" placeholder="Email Address" />
      </div>

      <div className="flex justify-center items-center mt-3">
        <button className="box-content h-10 w-32 p-2 bg-green-500 rounded-lg m-2">Subscribe</button>
      </div>
    </footer>
  );
};

export default Mailing;
