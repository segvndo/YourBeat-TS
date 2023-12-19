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

      {/* <div className="flex items-center relative">
        <p className="mr-4 bg-white text-black p-2">Choose Venue Type</p>
        <button
          onClick={toggleDropdown}
          className="flex items-center px-3 py-2 bg-white text-black rounded"
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
      )} */}

  <div class="relative inline-block text-left">
  <div>
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Choose Venue Type
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
    </div>
  </div>

    </div>
  );
};

export default VenueDetails;