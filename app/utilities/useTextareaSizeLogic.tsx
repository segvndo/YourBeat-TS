import React, { useState, ChangeEvent, useRef } from 'react';

interface useTextareaSizeLogic {
  textareaSize: string;
  textareaHeight: string;
  handleTextareaSizeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isResizing: boolean;
  handleMouseDown: (e: React.MouseEvent) => void;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseUp: () => void;
  toggleMinimize: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  buttonRef:React.RefObject<HTMLButtonElement>;
}

export const useTextareaSizeLogic = (): TextareaSizeLogic => {
  const [textareaWidth, setTextareaWidth] = useState<string>('300px');
  const [textareaHeight, setTextAreaHeight] = useState<string>('100px');
  const [isResizing, setIsResizing] = useState<boolean>(false);


  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing.current) {
      const newWidth = e.clientX - textareaRef.current!.getBoundingClientRect().left;
      const newHeight = e.clientY - textareaRef.current!.getBoundingClientRect().top;

      setTextareaSize({
        width: `${newWidth}px`,
        height: `${newHeight}px`
      });
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };
  

  const handleTextareaSizeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaSize({
      width: textareaSize.width,
      height: e.target.value,
    })
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return {
    textareaSize,
    handleTextareaSizeChange,
    isMinimized,
    toggleMinimize,
    textareaRef,
    buttonRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp
  }
};