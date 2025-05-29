import React from 'react'
import UnionIcon from './../../assets/UnionIcon';

const Header: React.FC = React.memo(() => {
  return (
    <header className="flex flex-row w-full p-4 bg-header-bg justify-between">
      <div className="flex gap-3 items-center">
        <span className="inline-flex">
          <UnionIcon />
        </span>
        <span className="text-header-text pl-2">My App Title</span>
      </div>
      <div className="text-header-text">Darshan</div>
    </header>
  )
});

export default Header
