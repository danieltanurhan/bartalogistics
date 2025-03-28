'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/components/admin/AuthContext';
import AdminNav from '@/components/admin/AdminNav';
import styles from '@/styles/admin/admin-layout.module.css';

export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (mounted && !loading && !user && !pathname.includes('/login')) {
      router.push('/admin/login');
    }
  }, [user, loading, mounted, router, pathname]);
  
  if (loading || !mounted) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }
  
  // If user is not logged in and this is not the login page
  if (!user && !pathname.includes('/login')) {
    return null; // Return nothing as we're redirecting
  }
  
  // For login page, don't show the layout
  if (pathname.includes('/login')) {
    return children;
  }
  
  return (
    <div className={styles.layoutContainer}>
      <AdminNav />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}