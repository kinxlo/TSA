import type { Meta, StoryObj } from '@storybook/react';
import { TsaButton } from './index';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TsaButton> = {
  component: TsaButton,
  title: 'TsaButton',
};
export default meta;
type Story = StoryObj<typeof TsaButton>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to TsaButton!/gi)).toBeTruthy();
  },
};
