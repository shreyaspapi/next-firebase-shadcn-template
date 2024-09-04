'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import SignUpForm from '@/components/signUpForm'; // Assuming you have a registration form component
import { analytics } from '@/firebase';

export default function LoginPage() {
  useEffect(() => {
    analytics();
  }, []);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <SignUpForm />
      </div>
    </>
  );
}
