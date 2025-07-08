import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Base components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Clique aqui',
    variant: 'default',
    size: 'default',
    disabled: false,
    type: 'button',
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {},
  render: args => (
    <Button
      variant={args.variant}
      size={args.size}
      disabled={args.disabled}
      type={args.type}
    >
      {args.children}
    </Button>
  ),
};

/*
const posts = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const currentPage = 1;
const postsPerPage = 3;
const isHome = currentPage === 1;

const start = isHome ? 0 : ((currentPage - 1) * postsPerPage) + 1;
const end = isHome ? 4 : start + 3;
const currentPosts = posts.slice(start, end);
*/
