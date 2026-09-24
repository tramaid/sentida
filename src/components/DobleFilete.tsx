import React from 'react';

interface DobleFileteProps {
  className?: string;
  width?: number; // width of top line in px, default 44
}

export const DobleFilete: React.FC<DobleFileteProps> = ({
  className = '',
  width = 44,
}) => {
  const bottomWidth = Math.round(width * 0.78);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-[3px] my-3 ${className}`}
      aria-hidden="true"
    >
      <div
        className="h-[1px] bg-[#8FB1C9]"
        style={{ width: `${width}px` }}
      />
      <div
        className="h-[1px] bg-[#8FB1C9]"
        style={{ width: `${bottomWidth}px` }}
      />
    </div>
  );
};
