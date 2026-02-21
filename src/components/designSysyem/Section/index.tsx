import style from './styles.module.css';

export default function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
  styleFromProps?: React.CSSProperties;
}) {
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>{heading}</h2>
      <div className={style.sectionContent}>{children}</div>
    </section>
  );
}
