// import { fn } from '@storybook/test';

import Box from './';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { children: "This is a box", backgroundColor: 'red' },
};

export const Primary = {
  args: {
    label: 'Button Nice',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};