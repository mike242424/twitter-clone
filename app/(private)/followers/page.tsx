import FollowContainer from '../../components/FollowContainer';

const Followers = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Followers
      </h1>
      <FollowContainer follow="followers" />
    </>
  );
};

export default Followers;
