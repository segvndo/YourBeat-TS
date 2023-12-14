'use client';
import React from 'react'
import { useTextareaSizeLogic } from '@/app/utilities/useTextareaSizeLogic';

const VenueDetails = () => {
  const {
    textareaSize,
    handleTextareaSizeChange,
    isMinimized,
    toggleMinimize,
    textareaRef,
    buttonRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
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
      </div>

      <div>
        <p>Maximum Capacity</p>
        <input
          type="text"
          name="venueCapacity"
        />
      </div>

      <div>
        <p>Venue Description</p>
        <input
          type="text"
          name="venueDescription"
          maxLength={300}
          onChange={handleTextareaSizeChange}
          style={{
            color: 'green',
            width: '300px',
            minHeight: isMinimized ? '40px' : '100px',
            resize: 'vertical'}}
        />

        <button
          onClick={toggleMinimize}
          style={{
            marginLeft: '10px', marginTop: '5px',
            cursor: 'pointer',
            backgroundColor: 'green',
          }}>
          {isMinimized ? 'Maximize' : 'Minimize'}
        </button>


      </div>
    </div>
  )
}

export default VenueDetails;