import React from "react";
import { useTable } from "react-table";
import "./Table.css";
import Mock_JSON_Data from "./Mock_JSON_Data";
import { Columns } from "./Columns";

const Table = () => {
  const columns = useMemo(() => COLLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRows,
  } = tableInstance;
  return;
  <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroups) => (
        <tr {...headerGroups.getHeaderGroupProps()}>
          {headerGroups.headers.map((column) => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
          <th></th>
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRows(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>cell.render("Cell")</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>;
};
export default Table;
