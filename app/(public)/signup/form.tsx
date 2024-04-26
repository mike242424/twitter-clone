'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

import React from 'react';

const Form = () => {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>('');
  const [password, setPassword] = useState<undefined | string>('');
  const [confirmPassword, setConfirmPassword] = useState<undefined | string>(
    '',
  );
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors([]);

    if (password !== confirmPassword) {
      setErrors([...errors, 'passwords do not match']);
      return;
    }

    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      alert('sign up failed');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username: </label>
      <div className="mt-4">
        <input
          className="text-black border-2 border-blue-800text-white p-2 mb-4 md:w-[400px] font-bold"
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
          className="text-black border-2 border-blue-800text-white p-2 mb-4 md:w-[400px] font-bold"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <label>Confirm Password: </label>
      <div className="mt-4">
        <input
          className="text-black border-2 border-blue-800text-white p-2 mb-4 md:w-[400px] font-bold"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id="confirm-password"
          placeholder="Confirm Password"
          required
        />
      </div>
      <button
        className="border-2 border-white bg-blue-900 text-white p-2 md:w-[400px] font-bold mt-8"
        type="submit"
      >
        Submit
      </button>
      {errors.length > 0 && (
        <div className="mt-4 text-red-500">{errors[0]}</div>
      )}
    </form>
  );
};

export default Form;
