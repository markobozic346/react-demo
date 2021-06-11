import React, { useState } from 'react';
import ShowList from 'app/showPage/ShowList'
import Search from 'components/SearchBar'
const ShowPage = () => {
  const [searchText, setSearch] = useState<string>('');
  return (
    <div>
      <Search onSearch={setSearch} />
      <ShowList searchText={searchText} />
    </div>
  );
};

export default ShowPage;
