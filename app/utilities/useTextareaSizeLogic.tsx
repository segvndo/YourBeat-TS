import React, { useState, ChangeEvent, useRef } from 'react';

interface TextareaSizeLogic {
  textareaWidth: string;
  textareaHeight: string;
  textareaValue: string;
  isPlaceholderVisible: boolean;
  setIsPlaceholderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
  handleTextareaSizeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isResizing: boolean;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setHasStartedTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useTextareaSizeLogic = (): TextareaSizeLogic => {
  const [textareaWidth, setTextareaWidth] = useState<string>('300px');
  const [textareaHeight, setTextareaHeight] = useState<string>('100px');
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState<string>('Provide a brief description');
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState<boolean>(true);
  const [hasStartedTyping, setHasStartedTyping] = useState<boolean>(false);


  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);


  const handleMouseDown = (e: React.MouseEvent) => {
    const textareaRect = textareaRef.current?.getBoundingClientRect();
    const rightBottomCornerX = textareaRect?.right || 0;
    const rightBottomCornerY = textareaRect?.bottom || 0;
    const resizeArea = 10;
  
    if (
      e.clientX >= rightBottomCornerX - 10 &&
      e.clientX <= rightBottomCornerX &&
      e.clientY >= rightBottomCornerY - 10 &&
      e.clientY <= rightBottomCornerY
    ) {
      setIsResizing(true);
      startX.current = e.clientX;
      startY.current = e.clientY;
    }
  };
  

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing) {
      const deltaX = e.clientX - startX.current;
      const deltaY = e.clientY - startY.current;

      setTextareaWidth(`${parseFloat(textareaWidth) + deltaX}px`);
      setTextareaHeight(`${parseFloat(textareaHeight) + deltaY}px`);

      startX.current = e.clientX;
      startY.current = e.clientY;
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
