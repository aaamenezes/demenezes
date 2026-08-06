import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';
import { clsx } from '@/utils/clsx';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpen(window.scrollY < window.innerHeight);
    });
  }, []);
  return (
    <>
      <div
        className={clsx(styles.fixedPageHeader, { [styles.isOpen]: isOpen })}
      >
        <PageHeader />
      </div>
      {children}
      <PageFooter />
    </>
  );
}
