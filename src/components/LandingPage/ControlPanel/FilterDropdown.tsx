import React, { useMemo, use, useEffect } from 'react';
import type { ProductDetails } from 'src/types/ProductDetailsType';
import { AppStateContext } from 'src/context/AppStateContext';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  devices: ProductDetails[];
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ devices }) => {
  const [showFilter, setShowFilter] = React.useState(false);
  const appCtx = use(AppStateContext);
  const {state, dispatch} = appCtx;
  const selectedFilters = state.selectedFilters;
  const filterRef = React.useRef<HTMLDivElement>(null);

  const filterOptions: FilterOption[] = useMemo(() => {
    if (!devices) return [];
    const uniquesDevices = new Map<string, string>();
    for (const d of devices) {
      if (!uniquesDevices.has(d.line.id)) {
        uniquesDevices.set(d.line.id, d.line.name);
      }
    }
    return Array.from(uniquesDevices, ([value, label]) => ({ label, value }));
  }, [devices]);

  useEffect(() => {
    if (!showFilter) return;
    const handleClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setShowFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showFilter]);

  return (
    <div className="relative" ref={filterRef}>
      <button
        type="button"
        className={`ml-2 px-3 py-1 rounded text-xs flex items-center gap-1
          ${selectedFilters.length > 0 
            ? 'bg-white text-primary' 
            : 'text-dark-grey-text bg-white hover:bg-grey-select-bg-icon'}
        `}
        onClick={() => setShowFilter((prev) => !prev)}
      >
        Filter
      </button>
      {showFilter && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-white rounded shadow-lg z-14 p-3">
          <div className="text-xs font-semibold mb-2 text-black-header-text">Product Line</div>
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
            {filterOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.includes(option.value)}
                  onChange={() => {
                    const newFilters = selectedFilters.includes(option.value)
                      ? selectedFilters.filter(f => f !== option.value)
                      : [...selectedFilters, option.value];
                    dispatch({ type: 'SET_FILTERS', value: newFilters });
                  }}
                  className="acccent-uncheck-checkbox"
                />
                <span className="text-xs text-black-option-text">{option.label}</span>
              </label>
            ))}
          </div>
          <button
            type="button"
            className="mt-3 w-full text-xs font-semibold rounded py-1 border border-transparent text-red-text transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectedFilters.length === 0}
            onClick={() => dispatch({ type: 'SET_FILTERS', value: [] })}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;