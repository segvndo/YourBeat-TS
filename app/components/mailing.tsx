'use client';
import React, { useState } from 'react';
import ClientButtons from '@/app/components/ClientButtons';
import Subscribe from '@/app/components/Subscribe';

type MailingProps = {};

const Mailing: React.FC<MailingProps> = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [subscriptionComplete, setSubscriptionComplete] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const handleRoleSelection = (role: string) => {
    const updatedRoles = [...selectedRoles];

    if (updatedRoles.includes(role)) {
      const index = updatedRoles.indexOf(role);
      updatedRoles.splice(index, 1);
    } else {
      updatedRoles.push(role);
    }

    setSelectedRoles(updatedRoles);

    if (updatedRoles.length === 0) {
      setEmail('');
    }
  };
  const handleSubscribe = async (email: string) => {
    try {
      if (selectedRoles.length > 0 && email.trim() !== '') {
        // Your subscription logic here (if needed)
        console.log(`Subscribed with email: ${email}`);
        setSubscriptionComplete(true);
      } else {
        console.error('Cannot subscribe without selecting roles and providing an email.');
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    }
  };

  return (
    <footer>
      <div className="flex justify-center items-center mt-40 text-red-500 font-serif mb-4 text-2xl font-bold">
        Sign Up For YourBeat Mailing List
      </div>

      <div className="pb-6">
        YourBeat is an exciting new music network platform with a strong commitment to personal data security. Sign up for our mailing list to get notified when the web app is deployed, and we'll be sure to let you know when you can create your profile and start connecting with music industry professionals or discovering awesome new artists!
      </div>

      <div>
        {!subscriptionComplete && (
          <ClientButtons selectedRoles={selectedRoles} handleRoleSelection={handleRoleSelection} />
        )}
      </div>

      <div>
        {!subscriptionComplete && selectedRoles.length > 0 && (
          <Subscribe onSubmit={handleSubscribe} />
        )}

        {subscriptionComplete && (
          <p className="flex justify-center items-center mt-3 pb-6">
            Welcome to YourBeat! Stay tuned for exciting updates and exclusive offers. Thanks for joining us!
          </p>
        )}
      </div>

    </footer>
  );
};

export default Mailing;
