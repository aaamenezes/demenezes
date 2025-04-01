import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'BaseComponents/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'text',
    name: 'input',
    className: 'input',
    id: 'input',
    placeholder: 'input',
    required: true,
  },
};
