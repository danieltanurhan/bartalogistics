'use client';

import { FileText, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/components/admin/AuthContext';
import styles from '@/styles/admin/dashboard.module.css';
import commonStyles from '@/styles/admin/common.module.css';

export default function AdminDashboard() {
  const { user } = useAuth();
  
  return (
    <div className={commonStyles.pageContainer}>
      <div className={styles.welcomeSection}>
        <h1 className={commonStyles.pageTitle}>Welcome to Barta Logistics Admin</h1>
        <p className={commonStyles.pageDescription}>
          Manage your logistics documents and operations from this dashboard
        </p>
      </div>
      
      <div className={styles.dashboardGrid}>
        <Link href="/admin/documents" className={styles.dashboardCard}>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.iconBlue}`}>
              <FileText size={24} className={styles.iconBlueInner} />
            </div>
            <div className={styles.cardTextContainer}>
              <h2 className={styles.cardTitle}>Document Templates</h2>
              <p className={styles.cardDescription}>Create and manage documents</p>
            </div>
          </div>
        </Link>
        
        <div className={`${styles.dashboardCard} ${styles.disabledCard}`}>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.iconGray}`}>
              <User size={24} className={styles.iconGrayInner} />
            </div>
            <div className={styles.cardTextContainer}>
              <h2 className={styles.cardTitle}>Users</h2>
              <p className={styles.cardDescription}>Manage system users (Coming Soon)</p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.dashboardCard} ${styles.disabledCard}`}>
          <div className={styles.cardContent}>
            <div className={`${styles.iconContainer} ${styles.iconGray}`}>
              <Settings size={24} className={styles.iconGrayInner} />
            </div>
            <div className={styles.cardTextContainer}>
              <h2 className={styles.cardTitle}>Settings</h2>
              <p className={styles.cardDescription}>System configuration (Coming Soon)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}