'use client';

import Image from 'next/image';
import useSWR from 'swr';
import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef, useEffect, FormEvent } from 'react';
import LogoutButton from './LogoutButton';
import AccountLoading from './AccountLoading';

const AvatarForm = ({ onError }: { onError: () => void }) => {
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const { data, error, isLoading } = useSWR('/api/users/profile');
  const user = data?.data;
  const inputFileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error('No file selected');
    }

    const file = inputFileRef.current.files[0];

    const response = await fetch(`/api/avatar/upload?filename=${file.name}`, {
      method: 'POST',
      body: file,
    });

    const newBlob = (await response.json()) as PutBlobResult;
    window.location.reload();
  }

  useEffect(() => {
    if (error) {
      onError();
    }
  }, [data, error, onError]);

  if (isLoading) return <AccountLoading />;

  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-6 items-center mb-2">
          <h3 className="font-bold text-xl">{data && data.data.username}</h3>
          <LogoutButton />
        </div>

        {user && user.avatar ? (
          <Image
            className="justify-center items-center rounded-full"
            src={user.avatar}
            alt={user.username}
            height={200}
            width={200}
          />
        ) : (
          <div className="bg-slate-600 rounded-full h-[200px] w-[200px]"></div>
        )}

        <div className="flex items-center justify-between mt-4">
          <input
            className="w-8/12"
            name="file"
            ref={inputFileRef}
            type="file"
            required
          />
          <button
            className="p-3 bg-slate-800 text-white rounded-lg"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
};

export default AvatarForm;
