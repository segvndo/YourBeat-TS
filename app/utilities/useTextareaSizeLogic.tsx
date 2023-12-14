import React, { useState, ChangeEvent } from 'react';

interface useTextareaSizeLogic {
  textareaSize: string;
  handleTextareaSizeChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isMinimized: boolean;
  toggleMinimize: () => void;
}

export const useTextareaSizeLogic = (): TextareaSizeLogic => {
  const [textareaSize, setTextareaSize] = useState<string>('');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

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
  }
};