'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import React from 'react';

const Form = () => {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>('');
  const [password, setPassword] = useState<undefined | string>('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      console.log(res);
      router.push('/feed');
    } else {
      alert('log in failed');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <div className="mt-4">
        <input
          className="text-black border-2 border-blue-800text-white p-4 mb-4 md:w-[500px] font-bold"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          placeholder="Username"
          required
        />
      </div>
      <label>Password: </label>
      <div className="mt-4">
        <input
          className="text-black border-2 border-blue-800text-white p-4 mb-4 md:w-[500px] font-bold"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button
        className="border-2 border-white bg-blue-900 text-white p-4 md:w-[500px] font-bold mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
