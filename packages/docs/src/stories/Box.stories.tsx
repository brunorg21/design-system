import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@ignite-ui/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iusto
          ipsam explicabo adipisci dolores quaerat aliquam sequi facere
          blanditiis incidunt dolor ad vitae omnis soluta, in praesentium
          dolorem aperiam eveniet!
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
