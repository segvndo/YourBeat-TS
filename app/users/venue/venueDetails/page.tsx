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
      </div>
    </div>
  )
}

export default VenueDetails;