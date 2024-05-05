import type { Meta, StoryObj } from '@storybook/react';
import { WhyTechstudio } from '.';

const meta: Meta<typeof WhyTechstudio> = {
  component: WhyTechstudio,
  title: 'Views/WhyTechstudio',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof WhyTechstudio>;

export const Base: Story = {
  args: {},
};
