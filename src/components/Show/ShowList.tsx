import React from 'react';
import ShowCard from 'components/Show/ShowCard';
import LoadingAnimation from 'components/Animations/LoadingAnimation';
const ShowList = ({ showsObj, loading }) => {
  return <div>{loading ? <LoadingAnimation /> : showsObj.map((show) => <ShowCard />)}</div>;
};

export default ShowList;
