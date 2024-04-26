import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { TsaButton } from ".";

const meta: Meta<typeof TsaButton> = {
    title: "Atoms/Button",
    component: TsaButton,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        // onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        name: `Base`,
        base: true,
    },
};

export const Outline: Story = {
    args: {
        name: "outline",
        outline: true,
    },
};
