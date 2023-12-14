import React, { useState, ChangeEvent, useRef } from 'react';

interface useTextareaSizeLogic {
  textareaSize: string;
  handleTextareaSizeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isMinimized: boolean;
  toggleMinimize: () => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  buttonRef:React.RefObject<HTMLButtonElement>;
}

export const useTextareaSizeLogic = (): TextareaSizeLogic => {
  const [textareaSize, setTextareaSize] = useState<string>('');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isResizing = useRef(false);

  const handleMouseDown = () => {
    isResizing.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isResizing.current) {
      const newHeight = e.clientY - textareaRef.current!.getBoundinClientRect().top;
      textareaRef.current!.style.minHeight = `${newHeight}px`;
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };
  

  const handleTextareaSizeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaSize(e.target.value);
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