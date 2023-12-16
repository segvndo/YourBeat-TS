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
    closeDropdown,
    dropdownRef,
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
          className="px-5 py-3 bg-white text-black rounded border border-r-0">
            Choose Venue Type
          </button>

        {isOpen && (
          <div
          ref={dropdownRef}
            className="absolute top-full left-0 mt-2 bg-white shadow-md p-4 rounded border border-t-0 border-r-0 border-1-0"
            style={{ zIndex: 1}}>
              <p className="font-bold mb-2">Select Venue</p>
              <ul>
                {venueOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => selectOption(option)}
                    className={`cursor-pointer ${
                      selectedOption === option ? 'text-yellow-500' : ''
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
          </div>
          

        )}
      </div>

      {selectedOption && (
        <div className="mt-4">
          <p>Selected Venue: {selectedOption}</p>
        </div>
      )}
    </div>
  );
};

export default VenueDetails;