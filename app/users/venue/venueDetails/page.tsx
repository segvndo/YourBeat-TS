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
    selectedOption,
    selectOption,
  } = useDropdownLogic();

  const venueOptions = [
    'Concert Hall',
    'Amphitheater',
    'Stadium/Arena',
    'Club/Bar',
    'Coffeehouse/Listening Room',
    'Warehouse Space',
    'EDM Venue',
    'Cabaret/Lounge',
  ];


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

      <div className="relative">
        <button 
          onClick={toggleDropdown}
          className="px-5 py-3 bg-yellow-500 text-white rounded">
            Select Venue Category
          </button>
        {isOpen && (
          <div className="absolute top-full left-0 bg-white">
            
          </div>
        )}
      </div>
    </div>
  )
}

export default VenueDetails;