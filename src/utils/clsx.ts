export function clsx(...classes: (string | false)[]) {
  return classes.filter(Boolean).join(' ');
}
