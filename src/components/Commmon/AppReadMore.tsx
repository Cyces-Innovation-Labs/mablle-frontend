import React, { useState } from "react";

interface AppReadMoreProps {
  text: string;
  maxLength?: number;
  readMoreText?: string;
  readLessText?: string;
  className?: string;
}

const AppReadMore: React.FC<AppReadMoreProps> = ({
  text,
  maxLength = 150,
  readMoreText = "Read more",
  readLessText = "Read less",
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // If text is shorter than maxLength, no need for read more/less
  if (text.length <= maxLength) {
    return <div className={className}>{text}</div>;
  }

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : `${text.slice(0, maxLength)}...`;

  return (
    <div className={`wrap-anywhere ${className}`}>
      <span className="">{displayText}</span>
      <button
        onClick={toggleReadMore}
        className="text-blue-600 hover:text-blue-800 ml-1 font-medium cursor-pointer"
      >
        {isExpanded ? readLessText : readMoreText}
      </button>
    </div>
  );
};

export default AppReadMore;
