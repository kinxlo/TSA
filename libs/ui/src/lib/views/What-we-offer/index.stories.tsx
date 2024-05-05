import type { Meta, StoryObj } from '@storybook/react';
import { WhatWeOffer } from '.';

const meta: Meta<typeof WhatWeOffer> = {
  component: WhatWeOffer,
  title: 'Views/WhatWeOffer',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof WhatWeOffer>;

export const Base: Story = {
  args: {},
};
