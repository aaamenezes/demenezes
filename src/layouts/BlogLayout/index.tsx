import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  );
}
