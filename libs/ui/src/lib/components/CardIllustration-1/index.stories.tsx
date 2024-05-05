import type { Meta, StoryObj } from '@storybook/react';
import { TsaCardIllustration_1 } from '.';

const meta: Meta<typeof TsaCardIllustration_1> = {
  component: TsaCardIllustration_1,
  title: 'Components/TsaCardIllustration_1',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof TsaCardIllustration_1>;

export const Base: Story = {
  args: {
    image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1699879014/techstudio/images/Group_1000002452_dtfdi4_hwvx6m_ex07h0.png`,
    title: `Great learning Environment`,
    description: `We provide you with the best learning facility you can lay your eyes on. All our classes are conducive, en-suite and equipped with high-speed internet and the latest technologies for learning.`,
  },
};
