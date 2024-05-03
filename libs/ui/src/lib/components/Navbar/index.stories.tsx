import type { Meta, StoryObj } from '@storybook/react';
import { TsaNavbar } from '.';

const meta: Meta<typeof TsaNavbar> = {
  component: TsaNavbar,
  title: 'Components/TsaNavbar',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TsaNavbar>;

export const Base: Story = {
  args: {},
};
export const BaseWithLinks: Story = {
  args: {
    navLinks: ['About Us', 'FAQs', 'Contact Us'],
    courses: [
      `Product Design UI/UX`,
      `Fullstack Development`,
      `Data Science`,
      `Frontend Engineering`,
      `Cyber Security`,
      `Advance IG Marketing`,
    ],
  },
};
