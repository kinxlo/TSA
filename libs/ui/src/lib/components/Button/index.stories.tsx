import type { Meta, StoryObj } from '@storybook/react';
import { TsaButton } from '.';
import { fn } from '@storybook/test';
import { Icon } from '@iconify/react';

const meta: Meta<typeof TsaButton> = {
  component: TsaButton,
  title: 'Atoms/TsaButton',
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
};
export default meta;
type Story = StoryObj<typeof TsaButton>;

export const Base: Story = {
  args: {
    name: `Tsa Button`,
  },
};
export const Outline: Story = {
  args: {
    name: `Tsa Button`,
    variant: `outlined`,
  },
};
export const BtnWithRightIcon: Story = {
  args: {
    ...Base.args,
    endIcon: <Icon icon={`mdi-light:home`} />,
  },
};

export const BtnWithLeftIcon: Story = {
  args: {
    ...Base.args,
    startIcon: <Icon icon={`mdi-light:home`} />,
  },
};
