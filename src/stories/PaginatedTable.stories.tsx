import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaginatedTable } from '../PaginatedTable';
import users from './../accounts-ui.json';

export default {
  title: 'Paginated Table',
  component: PaginatedTable
} as ComponentMeta<typeof PaginatedTable>;

const Template: ComponentStory<typeof PaginatedTable> = (args) => <PaginatedTable {...args} />;

export const Table = Template.bind({});

Table.args = {
  data: users.slice(5, 45),
  filterKeys: ['firstName', 'lastName', 'country', 'mfa'],
  sortingConfig: { amount: 'number', createdAt: 'date' },
  rowsPerPage: 10
};
