'use client';
import React from 'react'
import { useTextareaSizeLogic } from '@/app/utilities/useTextareaSizeLogic';

const VenueDetails = () => {
  const {
    textareaWidth,
    textareaHeight,
    handleTextareaSizeChange,
    isResizing,
    textareaRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    textareaValue,
    setTextareaValue,
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
          value={textareaValue}
          onFocus={() => setTextareaValue('')}
          onBlur={() => {
            if (textareaValue === '') {
              setTextareaValue('Provide a brief description')
            }
          }}
          onChange={handleTextareaSizeChange}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            color: 'green',
            width: textareaWidth,
            minHeight: isResizing ? '100px' : 'auto',
            resize: 'both',
            overflow: 'auto',
          }}
         ></textarea>

      </div>
    </div>
  )
}

export default VenueDetails;