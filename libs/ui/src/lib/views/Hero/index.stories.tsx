import type { Meta, StoryObj } from '@storybook/react';
import { TsaHero } from '.';

const meta: Meta<typeof TsaHero> = {
  component: TsaHero,
  title: 'views/TsaHero',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TsaHero>;

export const Base: Story = {
  args: {

  },
};
