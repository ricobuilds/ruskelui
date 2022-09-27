import React from 'react';
import {Meta, Story} from '@storybook/react'
import { RuiRadio } from '../src/Radio/'
import { RuiRadioProps } from '../src/Radio/Radio';

const meta: Meta = {
    title: '@RuskelUI/Components/Radio',
    component: RuiRadio,
}

export default meta;

const Template: Story<RuiRadioProps> = (args) => <RuiRadio variant='base' {...args}/>

export const Default = Template.bind({})

Default.args = {
    label: "Payment Splitter",
    value: "Payment Splitter",
    name: "pay_splitter"
}