export interface Column<T> {
  header: string;
  accessor: keyof T;
}

export interface GenericTableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowKey: keyof T;
}

export function GenericTable<T>({ data, columns, rowKey }: GenericTableProps<T>) {
  return (
    <div className='w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto'>
      <table className='w-full text-left border-collapse'>
        <thead className='bg-primary border-b border-gray-200'>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className='py-3 px-4 text-sm font-bold border-x border-primary'>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-100'>
          {data.map((item) => (
            <tr
              key={String(item[rowKey])}
              className='hover:bg-gray-200 transition-color duration-150'
            >
              {columns.map((column, index) => (
                <td
                  key={index}
                  className='py-3 px-4 text-sm text-gray-500 font-medium border-x border-gray-300'
                >
                  {String(item[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
