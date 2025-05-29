import React, { use, useRef, useState, useMemo } from 'react';
import { MagnifyIcon } from 'src/assets/MagnifyIcon';
import { AppStateContext } from 'src/context/AppStateContext';
import type { ProductDetails } from 'src/types/ProductDetailsType';

interface FilterOption {
    label: string;
    value: string;
}

interface SearchInputProps {
    devices: ProductDetails[];
}

const SearchInput: React.FC<SearchInputProps> = ({ devices }) => {
    const appCtx = use(AppStateContext);
    const state = appCtx?.state;
    const dispatch = appCtx?.dispatch || (() => { });
    const searchValue = state?.searchValue || '';
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const productOptions: FilterOption[] = useMemo(() => {
        if (!devices) return [];
        const uniquesDevices = new Map<string, string>();
        for (const d of devices) {
            if (!uniquesDevices.has(d.product.name)) {
                uniquesDevices.set(d.sku, d.product.name);
            }
        }
        return Array.from(uniquesDevices, ([value, label]) => ({ label, value }));
    }, [devices]);

    // Filter suggestions by searchValue (partial match, case-insensitive)
    const filteredSuggestions = searchValue.trim()
        ? productOptions.filter(option =>
            option.label.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
        : [];

    return (
            <div className="relative w-80">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full h-8 rounded-md px-3 py-1 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-grey-bg placeholder-grey-placeholder-text"
                    value={searchValue}
                    onChange={e => {
                        dispatch({ type: 'SET_SEARCH', value: e.target.value });
                        setShowSuggestions(true);
                    }}
                    onFocus={() => searchValue && setShowSuggestions(true)}
                    autoComplete="off"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-color-grey-icon pointer-events-none">
                    <MagnifyIcon />
                </span>
                {/* Suggestions Dropdown */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                    <ul className="absolute left-0 right-0 mt-1 bg-white border border-white rounded shadow-lg z-20 max-h-48 overflow-y-auto">
                        {filteredSuggestions.map(option => (
                            <li
                                key={option.value}
                                className="px-3 py-2 text-sm text-black-text hover:bg-greay-hover-bg cursor-pointer flex justify-between"
                                onMouseDown={() => {
                                    dispatch({ type: 'SET_SEARCH', value: option.label });
                                    setShowSuggestions(false);
                                    inputRef.current?.blur();
                                    if (inputRef.current) {
                                        inputRef.current.value = option.label;
                                    }
                                }}
                            >
                                <span>
                                    {(() => {
                                        const input = searchValue.trim().toLowerCase();
                                        if (!input) return option.label;
                                        const idx = option.label.toLowerCase().indexOf(input);
                                        if (idx === -1) return option.label;
                                        return <>
                                            {option.label.slice(0, idx)}
                                            <span className="font-bold underline text-black-text">{option.label.slice(idx, idx + input.length)}</span>
                                            {option.label.slice(idx + input.length)}
                                        </>;
                                    })()}
                                </span>
                                <span>{option.value}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
    );
};
export default SearchInput;
