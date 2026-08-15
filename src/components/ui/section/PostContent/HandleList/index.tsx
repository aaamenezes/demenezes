import type { List as ListNode } from 'datocms-structured-text-utils';
import styles from '../styles.module.css';

export default function HandleList({ node }: { node: ListNode }) {
  return (
    <ul className={styles.ul}>
      {node.children.map(child => {
        const text =
          child.children[0].children[0].type === 'span'
            ? child.children[0].children[0].value
            : '';

        return (
          <li key={text} className={styles.li}>
            {text}
          </li>
        );
      })}
    </ul>
  );
}
