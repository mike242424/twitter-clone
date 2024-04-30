import FollowContainer from '../../components/FollowContainer';

const Following = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-slate-900 my-8 font-bold">
        Following
      </h1>
      <FollowContainer follow="following" />
    </div>
  );
};

export default Following;
