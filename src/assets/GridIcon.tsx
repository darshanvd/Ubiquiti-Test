import React from 'react';

const GridIcon: React.FC<{ active?: boolean; className?: string }> = ({ active, className }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.5 5.5V1H1V5.5H5.5ZM1 0H5.5C6.052 0 6.5 0.448 6.5 1V5.5C6.5 6.052 6.052 6.5 5.5 6.5H1C0.448 6.5 0 6.052 0 5.5V1C0 0.448 0.448 0 1 0ZM5.5 13V8.5H1V13H5.5ZM1 7.5H5.5C6.052 7.5 6.5 7.948 6.5 8.5V13C6.5 13.552 6.052 14 5.5 14H1C0.448 14 0 13.552 0 13V8.5C0 7.948 0.448 7.5 1 7.5ZM13 1V5.5H8.5V1H13ZM13 0H8.5C7.948 0 7.5 0.448 7.5 1V5.5C7.5 6.052 7.948 6.5 8.5 6.5H13C13.552 6.5 14 6.052 14 5.5V1C14 0.448 13.552 0 13 0ZM13 13V8.5H8.5V13H13ZM8.5 7.5H13C13.552 7.5 14 7.948 14 8.5V13C14 13.552 13.552 14 13 14H8.5C7.948 14 7.5 13.552 7.5 13V8.5C7.5 7.948 7.948 7.5 8.5 7.5Z"
      fill={active ? 'currentColor' : '#838691'}
    />
  </svg>
);

export default GridIcon;
