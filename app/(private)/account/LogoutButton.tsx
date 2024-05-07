import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  async function handleClick() {
    const res = await fetch('/api/logout', {
      method: 'POST',
    });

    if (res.ok) {
      router.push('/login');
    }
  }
  return (
    <div className="text-center">
      <button
        className="p-3 bg-slate-800 text-white rounded-lg"
        onClick={handleClick}
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
