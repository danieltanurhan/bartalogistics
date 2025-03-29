'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getTemplateById } from '@/templates/templateConfig';
import { generatePDF, downloadPDF } from '@/services/pdfService';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, Download, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/admin/document-create.module.css';

export default function CreateDocumentPage() {
  const params = useParams();
  const router = useRouter();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [documentPoints, setDocumentPoints] = useState(['']);
  
  // Create dynamic validation schema based on template fields
  const createValidationSchema = (template) => {
    if (!template?.fields) return z.object({});
    
    const schemaFields = {};
    
    template.fields.forEach(field => {
      // Skip documentPoints as we'll handle it separately
      if (field.type === 'documentPoints') return;
      
      if (field.required) {
        schemaFields[field.name] = z.string().min(1, `${field.label} is required`);
      } else {
        schemaFields[field.name] = z.string().optional();
      }
      
      // Add more specific validations based on field types
      if (field.type === 'email') {
        schemaFields[field.name] = z.string().email(`Invalid email address`);
      } else if (field.type === 'number') {
        schemaFields[field.name] = z.string()
          .refine(val => !isNaN(val), { message: 'Must be a valid number' })
          .transform(val => val === '' ? '' : String(val));
      }
    });
    
    return z.object(schemaFields);
  };

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const templateData = getTemplateById(params.templateId);
        
        if (!templateData) {
          router.push('/admin/documents');
          return;
        }
        
        setTemplate(templateData);
      } catch (error) {
        console.error('Error fetching template:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTemplate();
  }, [params.templateId, router]);
  
  // Initialize form after template is loaded
  const validationSchema = createValidationSchema(template);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema)
  });

  const addDocumentPoint = () => {
    setDocumentPoints([...documentPoints, '']);
  };

  const updateDocumentPoint = (index, value) => {
    const updatedPoints = [...documentPoints];
    updatedPoints[index] = value;
    setDocumentPoints(updatedPoints);
  };

  const removeDocumentPoint = (index) => {
    const updatedPoints = [...documentPoints];
    updatedPoints.splice(index, 1);
    setDocumentPoints(updatedPoints);
  };

  const onSubmit = async (data) => {
    try {
      setGenerating(true);
      
      // Add document points to the data if not empty
      if (documentPoints.filter(point => point.trim()).length > 0) {
        data.documentPoints = documentPoints.filter(point => point.trim());
      }
      
      // Generate PDF with form data and pass the templateId
      const pdfBytes = await generatePDF(
        template.filePath, 
        data, 
        params.templateId // Pass the templateId for proper field mapping
      );
      
      // Download the generated PDF
      downloadPDF(pdfBytes, `${template.name.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating document:', error);
      alert('Failed to generate document. Please check console for details.');
    } finally {
      setGenerating(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <span className={styles.loadingText}>Loading template...</span>
      </div>
    );
  }

  if (!template) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorMessage}>Template not found</div>
        <Link 
          href="/admin/documents" 
          className={styles.buttonPrimary}
        >
          Back to Documents
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <Link href="/admin/documents" className={styles.backLink}>
          <ArrowLeft size={20} className={styles.backIcon} />
        </Link>
        <div>
          <h1 className={styles.pageTitle}>{template.name}</h1>
          <p className={styles.pageDescription}>{template.description}</p>
        </div>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGrid}>
            {template.fields.map((field) => {
              if (field.type === 'documentPoints') {
                return (
                  <div key={field.name} className={styles.fullWidth}>
                    <div className={styles.formField}>
                      <label className={styles.label}>
                        {field.label}
                        {field.required && <span className={styles.requiredIndicator}>*</span>}
                      </label>
                      
                      <div className={styles.documentPointsContainer}>
                        {documentPoints.map((point, index) => (
                          <div key={index} className={styles.documentPointRow}>
                            <input
                              type="text"
                              value={point}
                              onChange={(e) => updateDocumentPoint(index, e.target.value)}
                              className={styles.input}
                              placeholder={`Point ${index + 1}`}
                            />
                            {documentPoints.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeDocumentPoint(index)}
                                className={styles.removeButton}
                              >
                                <Trash size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addDocumentPoint}
                          className={styles.addButton}
                        >
                          <Plus size={16} className={styles.buttonIcon} />
                          Add Document Point
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <div key={field.name} className={styles.formFieldContainer}>
                  <div className={styles.formField}>
                    <label className={styles.label}>
                      {field.label}
                      {field.required && <span className={styles.requiredIndicator}>*</span>}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        {...register(field.name)}
                        className={styles.textarea}
                        rows={3} // Reduced to fit better in column
                      />
                    ) : field.type === 'date' ? (
                      <input
                        type="date"
                        {...register(field.name)}
                        className={styles.input}
                      />
                    ) : field.type === 'select' && field.options ? (
                      <select
                        {...register(field.name)}
                        className={styles.select}
                      >
                        <option value="">Select {field.label}</option>
                        {field.options.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type || 'text'}
                        {...register(field.name)}
                        className={styles.input}
                      />
                    )}
                    
                    {errors[field.name] && (
                      <p className={styles.errorText}>{errors[field.name].message}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className={styles.buttonContainer}>
            <Link
              href="/admin/documents"
              className={styles.buttonSecondary}
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={generating}
              className={styles.buttonPrimary}
            >
              {generating ? (
                <>
                  <div className={styles.buttonSpinner}></div>
                  Generating...
                </>
              ) : (
                <>
                  <Download size={18} className={styles.buttonIcon} />
                  Generate & Download
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}