import React, { useState, ChangeEvent, useRef } from 'react';

interface TextareaSizeLogic {
  textareaSize: string;
  textareaHeight: string;
  textareaValue: string;
  setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
  handleTextareaSizeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isResizing: boolean;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  toggleMinimize: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;

}

export const useTextareaSizeLogic = (): TextareaSizeLogic => {
  const [textareaWidth, setTextareaWidth] = useState<string>('300px');
  const [textareaHeight, setTextareaHeight] = useState<string>('100px');
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState<string>('Provide a brief description');


  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
    startX.current = e.clientX;
    startY.current = e.clientY;
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

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return {
    textareaWidth: isMinimized ? 'auto' : textareaWidth,
    textareaHeight: isMinimized ? 'auto' : textareaHeight,
    handleTextareaSizeChange,
    isResizing,
    textareaRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    textareaValue,
    setTextareaValue,
  };
};