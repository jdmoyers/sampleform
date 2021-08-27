import { Meta, Story } from '@storybook/react';

import Button from './TestButton';

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
  label: 'Button',
  children: 'Test Button',
};
