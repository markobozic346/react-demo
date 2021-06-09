import React from "react";
import Header from 'components/Header'
import Search from 'app/showPage/Search'
import Footer from 'components/Footer'
import Main from "app/Main"
const ShowPage = () => {
  return <div>
    <Header />
    <Search />
    <Main />
    <Footer />
  </div>;
};

export default ShowPage;