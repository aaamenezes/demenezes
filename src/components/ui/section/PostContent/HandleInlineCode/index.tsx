import styles from '../styles.module.css';

export default function HandleInlineCode({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) {
  return (
    <code className={styles.inlineCode} key={key}>
      {children}
    </code>
  );
}
