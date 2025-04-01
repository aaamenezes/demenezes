import type { Meta, StoryObj } from '@storybook/react';
import Icon from '.';

const meta = {
  title: 'BaseComponents/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const component: Story = {
  args: {
    name: 'terminal',
  },
};
