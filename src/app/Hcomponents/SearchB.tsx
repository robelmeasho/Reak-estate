'use client';

import { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, Tag } from 'lucide-react';
import Image from 'next/image';

interface HeroSearchBarProps {
  onSearch?: (filters: Filters) => void;
}

export interface Filters {
  searchQuery: string;
  location: string;
  propertyType: string;
  listingType: string;
}

export default function HeroSearchBar({ onSearch }: HeroSearchBarProps) {
  const [filters, setFilters] = useState<Filters>({
    searchQuery: '',
    location: '',
    propertyType: '',
    listingType: '',
  });

  const handleChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    console.log(filters);
    if (onSearch) onSearch(filters);
  };

  const selectOptions = {
    location: [
      { value: '', label: 'Location' },
      { value: 'ny', label: 'New York' },
      { value: 'la', label: 'Los Angeles' },
      { value: 'sf', label: 'San Francisco' },
      { value: 'miami', label: 'Miami' },
    ],
    propertyType: [
      { value: '', label: 'Property' },
      { value: 'house', label: 'House' },
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa', label: 'Villa' },
      { value: 'penthouse', label: 'Penthouse' },
    ],
    listingType: [
      { value: '', label: 'Type' },
      { value: 'sale', label: 'For Sale' },
      { value: 'rent', label: 'For Rent' },
    ],
  };

  const renderSelect = (name: keyof Filters, Icon: any) => (
    <div className='relative'>
      <select
        value={filters[name]}
        onChange={(e) => handleChange(name, e.target.value)}
        className='h-12 w-full md:w-[160px] pl-10 pr-8 border border-gray-300 rounded-md bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        {selectOptions[name].map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <Icon className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none' />
      <svg
        className='absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 9l-7 7-7-7'
        />
      </svg>
    </div>
  );

  return (
    <div className='w-full max-w-4xl mx-auto px-6'>
      <div className='bg-white rounded-2xl shadow-2xl p-6'>
        <div className='grid md:grid-cols-[1fr_auto_auto_auto_auto] gap-4 items-end'>
          {/* Search Input */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Search for properties'
              value={filters.searchQuery}
              onChange={(e) => handleChange('searchQuery', e.target.value)}
              className='w-full pl-10 h-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400' />
          </div>

          {renderSelect('location', MapPin)}
          {renderSelect('propertyType', HomeIcon)}
          {renderSelect('listingType', Tag)}

          <button
            onClick={handleSearch}
            className='h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
