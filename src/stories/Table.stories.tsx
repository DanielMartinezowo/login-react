import type { Meta, StoryObj } from '@storybook/react';
import { GenericTable } from '../components/Table';

const meta = {
  title: 'components/gerenicTable',
  component: GenericTable,
} satisfies Meta<typeof GenericTable>;

export default meta;

interface MockUser {
  name: string;
  email: string;
}
type Story = StoryObj<{
  data: MockUser[];
  columns: Array<{ header: string; accessor: keyof MockUser }>;
  rowKey: keyof MockUser;
}>;

export const ConUsuarios: Story = {
  render: () => {
    const columnaUsuarios = [
      { header: 'Nombre Completo', accessor: 'name' as const },
      { header: 'Correo Electronico', accessor: 'email' as const },
    ];

    const datosConUsuarios: MockUser[] = [
      { name: 'Daniel Martinezz', email: 'daniel.martinez@siticl.com' },
      { name: 'Queso y pulga', email: 'queso.pulga@siticl.com' },
    ];

    return (
      <GenericTable<MockUser> data={datosConUsuarios} columns={columnaUsuarios} rowKey='email' />
    );
  },
};
