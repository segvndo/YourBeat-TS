import React, { useState, ChangeEvent, useRef } from 'react';

interface TextareaSizeLogic {
  textareaWidth: string;
  textareaHeight: string;
  textareaValue: string;
  isPlaceholderVisible: boolean;
  setIsPlaceholderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleTextareaSizeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isResizing: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
}

export const useTextareaSizeLogic = (): TextareaSizeLogic => {
  const [textareaWidth, setTextareaWidth] = useState<string>('300px');
  const [textareaHeight, setTextareaHeight] = useState<string>('100px');
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState<string>('Provide a brief description');
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const textareaRect = textareaRef.current?.getBoundingClientRect();
    const rightBottomCornerX = textareaRect?.right || 0;
    const rightBottomCornerY = textareaRect?.bottom || 0;
  
    if (
      e.clientX >= rightBottomCornerX - 10 &&
      e.clientX <= rightBottomCornerX &&
      e.clientY >= rightBottomCornerY - 10 &&
      e.clientY <= rightBottomCornerY
    ) {
      setIsResizing(true);

    }
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      const deltaX = e.clientX - (textareaRef.current?.getBoundingClientRect()?.right || 0);
      const deltaY = e.clientY - (textareaRef.current?.getBoundingClientRect()?.bottom || 0);

      setTextareaWidth(`${parseFloat(textareaWidth) + deltaX}px`);
      setTextareaHeight(`${parseFloat(textareaHeight) + deltaY}px`);

    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleTextareaSizeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
    
  };

  return {
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
  };
};
