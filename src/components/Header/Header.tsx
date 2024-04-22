import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import useDebounce from '@/hooks/useDebounde';

function Header() {
  const [query, setQuery] = useState('');
  const searchParams = useSearchParams();
  const setSearchParams = searchParams[1];
  const { id } = useParams();

  const debouncedValue = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedValue.length < 2) {
      setSearchParams();

      return;
    }

    setSearchParams({ q: debouncedValue });
  }, [debouncedValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue)
  };

  return (
    <header className="py-2 border-b border-slate-300">
      <div className="container px-4">
        <div className="flex max-w-sm ">
          {!id && <Input
            type="text"
            placeholder="Type the show's name"
            value={query}
            onChange={handleInputChange}
          />}
        </div>
      </div >
    </header >
  )
}

export default Header;
