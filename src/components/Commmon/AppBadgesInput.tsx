import React, { useState, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import { X } from 'lucide-react';

export interface BadgeItem {
  label: string;
  value: string;
}

interface AppBadgesInputProps {
  label?: string;
  description?: string;
  topDescription?: string;
  value: BadgeItem[];
  onChange: (badges: BadgeItem[]) => void;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
}

const AppBadgesInput: React.FC<AppBadgesInputProps> = ({
  label,
  description,
  topDescription,
  value = [],
  onChange,
  placeholder = "Type and press Enter, Space, or Comma to add...",
  errorMessage,
  disabled = false,
  className,
  labelClassName
}) => {
  const [inputValue, setInputValue] = useState('');

  const addBadge = useCallback((input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Check for duplicates
    const isDuplicate = value.some(badge => 
      badge.value.toLowerCase() === trimmedInput.toLowerCase() ||
      badge.label.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (isDuplicate) return;

    const newBadge: BadgeItem = {
      label: trimmedInput,
      value: trimmedInput
    };

    onChange([...value, newBadge]);
    setInputValue('');
  }, [value, onChange]);

  const removeBadge = useCallback((indexToRemove: number) => {
    const newBadges = value.filter((_, index) => index !== indexToRemove);
    onChange(newBadges);
  }, [value, onChange]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === ',') {
      e.preventDefault();
      addBadge(inputValue);
    } else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
      // Remove last badge when backspace is pressed on empty input
      e.preventDefault();
      removeBadge(value.length - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    
    // Handle comma input
    if (newValue.includes(',')) {
      const parts = newValue.split(',');
      const lastPart = parts[parts.length - 1];
      
      // Add all parts except the last one as badges
      parts.slice(0, -1).forEach(part => {
        if (part.trim()) addBadge(part);
      });
      
      // Set the last part as current input (without comma)
      setInputValue(lastPart);
    } else {
      setInputValue(newValue);
    }
  };

  return (
    <div className={`w-full ${className || ''}`}>
      {label && (
        <label className={`block mb-[8px] text-sm font-medium text-gray-700 ${labelClassName || ''}`}>
          {label}
        </label>
      )}
      {topDescription && (
        <p className="mt-[-6px] mb-2 text-sm text-gray-500">
          {topDescription}
        </p>
      )}
      <div className="flex flex-wrap gap-2 px-3 py-2 border border rounded-lg bg-white min-h-[44px] focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-colors overflow-auto">
        {/* Existing Badges */}
        {value?.map((badge, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-1 px-2 py-1 py-1 bg-gray-100 rounded-md text-xs font-medium h-fit"
          >
            <span>{badge.label}</span>
            <button
              type="button"
              onClick={() => removeBadge(index)}
              disabled={disabled}
              className="ml-1 rounded-full hover:bg-gray-400"
            >
              <X size={12} className="text-gray-600" />
            </button>
          </div>
        ))}
        
        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ''}
          disabled={disabled}
          className="flex-1 min-w-[120px] outline-none text-sm bg-transparent placeholder-gray-400 disabled:opacity-50"
        />
      </div>
      
      {/* Error Message */}
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
      )}
      {/* Description */}
      {description && (
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default AppBadgesInput;
