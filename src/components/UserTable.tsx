import { GenericTable, type Column } from './Table';
import type { IUser } from '../users/IUser';

export interface UserTableProps {
  users: IUser[];
}
export function UserTable({ users }: UserTableProps) {
  const columns: Column<IUser>[] = [
    {
      header: 'Nombre',
      accessor: 'name',
    },
    {
      header: 'Email',
      accessor: 'name',
    },
  ];
  return (
    <section className='w-full'>
      <GenericTable data={users} columns={columns} rowKey='email' />
    </section>
  );
}
