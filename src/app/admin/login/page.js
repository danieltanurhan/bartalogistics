'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Truck } from 'lucide-react';
import { signIn } from '@/services/authService';
import styles from '@/styles/admin/login.module.css';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Get the redirect URL if it exists
  const redirectPath = searchParams.get('from') || '/admin';
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError('');
      
      const { email, password } = data;
      const { user, error } = await signIn(email, password);
      
      if (error) {
        setError(error);
        setLoading(false);
        return;
      }
      
      // Redirect to the original URL or admin dashboard
      router.push(redirectPath);
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className="flex justify-center">
            <Truck size={48} className="text-blue-600" />
          </div>
          <h2 className={styles.formTitle}>Barta Logistics Admin</h2>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          {error && <div className={styles.errorMessage}>{error}</div>}
          
          <div className={styles.inputGroup}>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className={`${styles.input} ${styles.topInput}`}
                autoComplete="email"
                {...register('email')}
              />
              {errors.email && (
                <div className={styles.errorMessage}>{errors.email.message}</div>
              )}
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Password"
                className={`${styles.input} ${styles.bottomInput}`}
                autoComplete="current-password"
                {...register('password')}
              />
              {errors.password && (
                <div className={styles.errorMessage}>{errors.password.message}</div>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
          
          <div className={styles.linkContainer}>
            <a href="#" className={styles.link}>Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}