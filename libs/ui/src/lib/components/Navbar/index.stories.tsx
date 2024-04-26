import type { Meta, StoryObj } from '@storybook/react';
import { TsaNavbar } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TsaNavbar> = {
  component: TsaNavbar,
  title: 'TsaNavbar',
};
export default meta;
type Story = StoryObj<typeof TsaNavbar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TsaNavbar!/gi)).toBeTruthy();
  },
};
