'use client';

import { useState } from 'react';
import { templates } from '@/templates/templateConfig';
import DocumentTemplateCard from '@/components/admin/DocumentTemplateCard';
import { FileX, Search } from 'lucide-react';
import styles from '@/styles/admin/documents-list.module.css';
import commonStyles from '@/styles/admin/common.module.css';

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTemplates = templates.filter(template => 
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div className={commonStyles.pageContainer}>
      <div className={commonStyles.pageHeader}>
        <h1 className={commonStyles.pageTitle}>Document Templates</h1>
        <p className={commonStyles.pageDescription}>Create and manage documents from templates</p>
      </div>
      
      <div className={styles.searchContainer}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className={`${styles.searchInput} pl-10`}
            placeholder="Search templates..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      {filteredTemplates.length > 0 ? (
        <div className={styles.templateGrid}>
          {filteredTemplates.map((template) => (
            <DocumentTemplateCard key={template.id} template={template} />
          ))}
          
          <div className={styles.emptyTemplate}>
            <FileX size={48} className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>More Coming Soon</h3>
            <p className={styles.emptyDescription}>Additional templates will be available soon</p>
          </div>
        </div>
      ) : (
        <div className={styles.noResults}>
          <p>No templates found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}