import FollowContainer from '../../components/FollowContainer';

const Following = () => {
  return (
    <>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Following
      </h1>
      <FollowContainer follow="following" />
    </>
  );
};

export default Following;
