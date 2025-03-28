'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/admin/AuthContext';
import { FileText, LogOut, Home, Truck } from 'lucide-react';
import styles from '@/styles/admin/admin-nav.module.css';

export default function AdminNav() {
  const { signOut, user } = useAuth();
  const pathname = usePathname();
  
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.navFlex}>
          <div className={styles.logoContainer}>
            <Link href="/admin" className={styles.logo}>
              <Truck className={styles.logoIcon} size={24} />
              <span>BARTA Admin</span>
            </Link>
          </div>
          
          <div className={styles.navItems}>
            <div className={styles.userEmail}>
              {user?.email}
            </div>
            
            <Link 
              href="/admin" 
              className={`${styles.navLink} ${
                pathname === '/admin' ? styles.navLinkActive : styles.navLinkInactive
              }`}
            >
              <Home size={18} className={styles.navIcon} />
              Dashboard
            </Link>
            
            <Link 
              href="/admin/documents" 
              className={`${styles.navLink} ${
                pathname.includes('/admin/documents') ? styles.navLinkActive : styles.navLinkInactive
              }`}
            >
              <FileText size={18} className={styles.navIcon} />
              Documents
            </Link>
            
            <button 
              onClick={handleSignOut}
              className={`${styles.navLink} ${styles.navLinkInactive}`}
            >
              <LogOut size={18} className={styles.navIcon} />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}