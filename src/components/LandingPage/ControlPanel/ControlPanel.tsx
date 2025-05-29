import React from 'react'
import SearchInput from './SearchInput';
import LayoutToggle from './LayoutToggle';
import FilterDropdown from './FilterDropdown';
import type { ProductDetails } from 'src/types/ProductDetailsType';

interface ControlPanelProps {
  devices: ProductDetails[];
  devicesCount?: number;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ devices, devicesCount }) => {
  return (
    <>
        <SearchInput
          devices={devices}
        />
        <span className="ml-4 text-xs text-grey-text whitespace-nowrap">
          {devicesCount} Devices
        </span>
        <div className="flex-1" />
        <div className="flex items-center gap-2 ml-4">
          <LayoutToggle />
          <FilterDropdown
            devices={devices}
          />
        </div>
      </>
  )
}

export default ControlPanel;