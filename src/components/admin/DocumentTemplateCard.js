'use client';

import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import styles from '@/styles/admin/document-card.module.css';

export default function DocumentTemplateCard({ template }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {template.thumbnailPath ? (
          <Image 
            src={template.thumbnailPath} 
            alt={template.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.fallbackImage}>
            <FileText size={48} className={styles.fallbackIcon} />
          </div>
        )}
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{template.name}</h3>
        <p className={styles.cardDescription}>{template.description}</p>
        
        <Link 
          href={`/admin/documents/create/${template.id}`}
          className={styles.createLink}
        >
          Create document
          <ArrowRight size={16} className={styles.linkIcon} />
        </Link>
      </div>
    </div>
  );
}