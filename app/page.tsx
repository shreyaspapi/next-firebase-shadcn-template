'use client';
import { useEffect } from 'react';
import LoginForm from '@/components/loginForm';
import { analytics } from '@/firebase';

export default function LoginPage() {
  useEffect(() => {
    analytics();
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <LoginForm />
      </div>
    </>
  );
}
