import style from './styles.module.css';

export default function Page({ children }: { children: React.ReactNode }) {
  return <div className={style.page}>{children}</div>;
}
