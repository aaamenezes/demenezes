import { CSSProperties, PropsWithChildren } from 'react';

function Box({ children, style }: PropsWithChildren<{ style: string }>) {
  return (
    <div
      style={
        {
          display: 'flex',
          gap: '1rem',
          height: '2rem',
          marginBottom: '1rem',
        } as CSSProperties
      }
    >
      <span
        style={
          {
            display: 'inline-block',
            width: style,
            height: '2rem',
            backgroundColor: 'var(--color-primary-100)',
          } as CSSProperties
        }
      ></span>
      <span>{children}</span>
    </div>
  );
}

export default function Spacing() {
  return (
    <>
      <Box style="var(--spacing-xxxs);">spacing-xxxs: 1px</Box>
      <Box style="var(--spacing-xxs);">spacing-xxs: 2px</Box>
      <Box style="var(--spacing-xs);">spacing-xs: 4px</Box>
      <Box style="var(--spacing-sm);">spacing-sm: 8px</Box>
      <Box style="var(--spacing-md);">spacing-md: 16px</Box>
      <Box style="var(--spacing-lg);">spacing-lg: 24px</Box>
      <Box style="var(--spacing-xl);">spacing-xl: 32px</Box>
      <Box style="var(--spacing-xxl);">spacing-xxl: 40px</Box>
      <Box style="var(--spacing-xxxl);">spacing-xxxl: 64px</Box>
    </>
  );
}
