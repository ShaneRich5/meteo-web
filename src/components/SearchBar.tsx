import React, { ChangeEvent, useState } from "react"

interface SearchBarProps {
  onSearch: (text: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [text, setText] = useState('')

  const handleSearchClick = () => {
    if (text) onSearch(text)
  }

  return (
    <div className="bg-white rounded-3xl shadow flex-grow w-full flex mb-4 px-8 py-3 text-xl">
      <div className="flex-grow">
        <input
          className="w-full font-semibold focus:outline-none"
          type="text"
          name="search"
          placeholder="Enter a city"
          aria-placeholder="Enter a city"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
        />
      </div>
      <div className="text-gray-700">
        <button
          className="focus:outline-none"
          onClick={handleSearchClick}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
