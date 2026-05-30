// app/page.jsx
'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HomePage from './(main)/home/page';

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && <HomePage />}
    </>
  );
}
