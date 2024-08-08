export const TableHeader = ({ headers }) => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      {headers?.map((header) => (
        <th key={header.key} scope="col" className="px-6 py-3">
          {header.label}
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;
