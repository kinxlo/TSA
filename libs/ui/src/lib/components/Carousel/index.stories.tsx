import type { Meta, StoryObj } from '@storybook/react';
import { TsaCarousel } from '.';
import { HOME_CONTENT } from '../../../../../../content/home';

const meta: Meta<typeof TsaCarousel> = {
  component: TsaCarousel,
  title: 'Components/TsaCarousel',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TsaCarousel>;

export const Base: Story = {
  args: {
    courses: HOME_CONTENT.sectionThree.cards,
  },
};
