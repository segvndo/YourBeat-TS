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
        
        <textarea
          ref = {textareaRef}
          name = "venueDescription"
          maxLength={300}
          value={textareaSize}
          onChange={handleTextareaSizeChange}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            color: 'green',
            width :'300px',
            minHeight: isMinimized ? '40px' : '100px',
            resize: 'vertical'
          }}
         > </textarea>

          <button
            ref={buttonRef}
            onClick={toggleMinimize}
            style={{
              marginLeft: '10px',
              marginTop: '5px',

            }}
            >
            {isMinimized ? 'Maximize' : 'Minimize'}
          </button>


      </div>
    </div>
  )
}

export default VenueDetails;