import React from "react";
import Header from 'components/Header'
import Search from 'components/Search'
import Footer from 'components/Footer'
import ShowList from "components/ShowList"
const HomePage = () => {
  return <div>
    <Header />
    <Search/>
    <ShowList />
    <Footer />
  </div>;
};

export default HomePage;
