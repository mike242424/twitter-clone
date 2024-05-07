'use client';

import { ChangeEvent, useState } from 'react';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [users, setUsers] = useState([]);

  const debouncedFetchSearchResults = debounce(async (searchText: string) => {
    const res = await fetch(`/api/search?q=${searchText}`);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      setUsers(json.data);
    }
  }, 500);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    debouncedFetchSearchResults(e.target.value);
  }

  return (
    <div className="text-center m-4">
      <input
        className="p-4 bg-slate-200 border-2 border-slate-500 text-slate-900 rounded-lg w-full"
        type="text"
        placeholder="Search users..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
