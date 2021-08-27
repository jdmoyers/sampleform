import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../theme';

import Button from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    as: {
      table: {
        disabled: true,
      },
    },
    theme: {
      table: {
        disabled: true,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Test Button',
};

Primary.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
