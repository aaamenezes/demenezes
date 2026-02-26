import style from './styles.module.css';

export default function Content({ children }: { children: React.ReactNode }) {
  return <main className={style.content}>{children}</main>;
}
