import React from 'react';
import ShowCard from 'app/showPage/ShowCard';
import LoadingAnimation from 'components/animations/LoadingAnimation';
const ShowList = ({ shows, loading }) => {
  return <div>{loading ? <LoadingAnimation /> : shows.map((show) => <ShowCard key={show.id} />)}</div>;
};

export default ShowList;
