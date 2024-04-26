import type { Meta, StoryObj } from "@storybook/react";
import { TsaNavbar } from ".";

const meta: Meta<typeof TsaNavbar> = {
    title: "Molecules/TsaNavbar",
    component: TsaNavbar,
    parameters: {
        // layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {},
};

// export const Outline: Story = {
//     args: {
//         variant: "outline",
//         children: "Button",
//     },
// };

// export const Ghost: Story = {
//     args: {
//         variant: "ghost",
//         children: "Button",
//     },
// };
