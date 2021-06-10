import React, { useState } from 'react';
import ShowList from 'app/shows/ShowList'
import Search from 'app/shows/SearchBar'
const ShowPage = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <div>
      <Search setSearch={setSearch} />
      <ShowList search={search} />
    </div>
  );
};

export default ShowPage;
