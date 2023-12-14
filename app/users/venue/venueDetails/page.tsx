'use client';
import React from 'react'

const VenueDetails = () => {
  return (
    <div>
      <h1>Venue Details</h1>

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