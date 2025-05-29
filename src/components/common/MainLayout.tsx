import React from 'react';
import Header from './Header';

interface MainLayoutProps {
  children?: React.ReactNode;
  toolbar: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, toolbar }) => {
  return (
    <>
      <Header />
      <div className="px-8 py-4 w-full">
        <div className="relative w-full flex items-center gap-4">
          {toolbar}
        </div>
      </div>
      <div className="px-8 pb-8">
        {children}
      </div>
    </>
  )
}

export default MainLayout;