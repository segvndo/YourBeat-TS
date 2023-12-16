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

      <div className="flex items-center relative">
        <p className="mr-4">Choose Venue Type</p>
        <button
          onClick={toggleDropdown}
          className="flex items-center px-3 py-2 bg-yellow-500 text-black rounded"
        >
          <span className="ml-2">&#9660;</span>
        </button>

        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 bg-white shadow-md p-4 rounded border border-t-0 border-r-0 border-l-0"
            style={{ zIndex: 10 }}
          >
            <p className="font-bold mb-2">Select Venue</p>
            <ul className="list-none p-0 m-0">
              {venueOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => selectOption(option)}
                  className={`cursor-pointer text-black hover:bg-gray-200 ${
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