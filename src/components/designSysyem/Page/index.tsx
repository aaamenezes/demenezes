import style from './styles.module.css';

export default function Page({ children }: { children: React.ReactNode }) {
  return <main className={style.page}>{children}</main>;
}
