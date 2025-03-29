'use client';

import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import styles from '@/styles/admin/document-card.module.css';

export default function DocumentTemplateCard({ template }) {
  return (
    <Link href={`/admin/documents/create/${template.id}`} className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.iconContainer}>
          <FileText size={24} className={styles.iconInner} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.cardTitle}>{template.name}</h3>
          <p className={styles.cardDescription}>{template.description}</p>
        </div>
        <div className={styles.arrowContainer}>
          <ArrowRight size={18} className={styles.arrowIcon} />
        </div>
      </div>
    </Link>
  );
}