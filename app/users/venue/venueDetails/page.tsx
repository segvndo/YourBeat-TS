'use client';
import React from 'react'
import { useTextareaSizeLogic } from '@/app/utilities/useTextareaSizeLogic';

const VenueDetails = () => {
  const {
    textareaSize,
    handleTextareaSizeChange,
    isMinimized,
    toggleMinimize,
  } = useTextareaSizeLogic();
  return (
    <div>
      <h1 className="font-bold">
        Venue Details
      </h1>

      <div>
        <p>Venue Name</p>
        <input
          type="text"
          name="venueName"
        />

        <p>Maximum Capacity</p>
        <input
          type="text"
          name="venueCapacity"
        />

        <p>Venue Description</p>
        <input
          type="text"
          name="venueDescription"
          maxLength={300}
          style={{ color: 'green', width: '300px', minHeight: '100px' }}
        />
      </div>
    </div>
  )
}

export default VenueDetails;