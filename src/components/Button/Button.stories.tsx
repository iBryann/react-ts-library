import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '.';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      name: "Text",
      description: "Simple Button",
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "Button",
};
