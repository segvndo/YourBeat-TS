'use client';
import React from 'react'
import { useTextareaSizeLogic } from '@/app/utilities/useTextareaSizeLogic';
import { useDropdownLogic } from '@/app/utilities/useDropdownLogic';

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
    isPlaceholderVisible,
    setIsPlaceholderVisible,
  } = useTextareaSizeLogic();

  const {
    isOpen,
    toggleDropdown,
  } = useDropdownLogic();


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
          ref={textareaRef}
          name="venueDescription"
          maxLength={300}
          value={textareaValue}
          onFocus={() => {
              setTextareaValue('');
              setIsPlaceholderVisible(false);
            }
          }
          onBlur={() => {
            if (textareaValue === '') {
              setTextareaValue('Provide a brief description');
              setIsPlaceholderVisible(true);
            }
          }}
          onChange={handleTextareaSizeChange}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            color: isPlaceholderVisible ? 'grey' : 'black',
            width: textareaWidth,
            minHeight: isResizing ? '100px' : 'auto',
            resize: 'both',
            overflow: 'auto',
          }}
        ></textarea>
      </div>

      <div>
        <h1 onClick={toggleDropdown}>Venue Category</h1>
        {isOpen && (
          <div className="dropdown-content">
            <p>Concert Hall</p>
            <p>Amphitheater</p>
            <p>Stadium/Arena</p>
            <p>Club/Bar</p>
            <p>Coffeehouse/Listening Room</p>
            <p>Warehouse Space</p>
            <p>EDM Venue</p>
            <p>Cabaret/Lounge</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default VenueDetails;