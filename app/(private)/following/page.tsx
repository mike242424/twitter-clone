import FollowContainer from '../../components/FollowContainer';

const Following = () => {
  return (
    <main className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
      <h1 className="text-center text-3xl text-slate-900 my-4 font-bold">
        Following
      </h1>
      <FollowContainer follow="following" />
    </main>
  );
};

export default Following;
