'use client';

import { useState } from 'react';
import FollowContainer from '../../components/FollowContainer';
import NotFound from '../../components/AccessDenied';

const Following = () => {
  const [error, setError] = useState(false);

  const handleFeedError = () => {
    setError(true);
  };

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Following
      </h1>
      <FollowContainer onError={handleFeedError} follow="following" />
    </>
  );
};

export default Following;
