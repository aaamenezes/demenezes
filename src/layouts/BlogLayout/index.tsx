import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';
import { clsx } from '@/utils/clsx';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import type { BlogLayoutProps } from './types';

export default function BlogLayout({ children }: BlogLayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpen(window.scrollY < window.innerHeight);
    });
  }, []);
  return (
    <>
      <div className={clsx(styles.fixedPageHeader, isOpen && styles.isOpen)}>
        <PageHeader />
      </div>
      {children}
      <PageFooter />
    </>
  );
}
