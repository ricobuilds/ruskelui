import { Meta, Story } from '@storybook/react'
import React from 'react';
import { RuiBreadcrumbs } from '../src/Breadcrumbs/index'
import { RuiBreadcrumbParentProps } from '../src/Breadcrumbs/Breadcrumbs';

const meta: Meta = {
    title: '@RuskelUI/Components/Breadcrumbs',
    component: RuiBreadcrumbs
}

export default meta


const icono = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
</svg>

const Template: Story<RuiBreadcrumbParentProps> = args => <RuiBreadcrumbs {...args}>
    <RuiBreadcrumbs.Item icon={icono} color={'tingual'} divider={'slash'} variant="previous" route='/'>Home</RuiBreadcrumbs.Item>
    <RuiBreadcrumbs.Item icon={icono} color={'tingual'} divider={'slash'} variant="previous" route='/sapo'>Sapo</RuiBreadcrumbs.Item>
    <RuiBreadcrumbs.Item route='/blog' variant='current'>Blog</RuiBreadcrumbs.Item>
</RuiBreadcrumbs>

export const Default = Template.bind({})