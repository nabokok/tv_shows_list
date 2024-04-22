import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Input } from "@/components/ui/input";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearchParams()

      return;
    }

    setSearchParams({ 'q': e.target.value })
  }

  return (
    <header className="py-2 border-b border-slate-300">
      <div className="container px-4">
        <div className="flex max-w-sm ">
          {!id && <Input
            type="text"
            placeholder="Type the show's name"
            value={searchParams.get('q') || ''}
            onChange={handleInputChange}
          />}
        </div>
      </div >
    </header >
  )
}

export default Header;
