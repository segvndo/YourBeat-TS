'use client';
import React from 'react';
import { useTextareaSizeLogic } from '@/app/utilities/useTextareaSizeLogic';
import { useDropdownLogic } from '@/app/utilities/useDropdownLogic';

const VenueDetails = () => {
  const {
    textareaWidth,
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
      <h1 className="font-bold">Venue Details</h1>

      <div>
        <p>Venue Name</p>
        <input type="text" name="venueName" />
      </div>

      <div>
        <p>Maximum Capacity</p>
        <input type="text" name="venueCapacity" />
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
          }}
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

      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {selectedOption || 'Choose Venue Type'}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>


        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute origin-top-left mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              {venueOptions.map((option, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-gray-700 block px-4 py-2 text-sm ${selectedOption === option ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    }`}
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => selectOption(option)}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueDetails;
