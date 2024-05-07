'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { debounce, set } from 'lodash';
import { UserInterface } from '../types';
import User from '../components/User';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutsideSearchResults(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false);
        setSearchText('');
      }
    }

    document.addEventListener('click', handleClickOutsideSearchResults);

    return () => {
      document.removeEventListener('click', handleClickOutsideSearchResults);
    };
  });

  const debouncedFetchSearchResults = debounce(async (searchText: string) => {
    const res = await fetch(`/api/search?q=${searchText}`);
    if (res.ok) {
      const json = await res.json();
      setUsers(json.data);
      setVisible(true);
    }
  }, 300);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const searchText = e.target.value;
    setSearchText(searchText);
    debouncedFetchSearchResults(searchText);

    setVisible(searchText != '');
  }

  return (
    <div className="text-center m-4 relative" ref={ref}>
      <input
        className="p-4 bg-slate-200 border-2 border-slate-500 text-slate-900 rounded-lg w-full z-0"
        type="text"
        placeholder="Search users..."
        onChange={handleChange}
        value={searchText}
      />
      {visible && users.length > 0 && (
        <ul className="flex flex-col items-start absolute z-10 bg-slate-500 mt-4 rounded-lg right-100 w-full border-2 border-slate-500">
          {users.map((user: UserInterface) => {
            return (
              <li key={user.id}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
