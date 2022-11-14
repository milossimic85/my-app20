import React from "react";
import "./TableData2.module.css";

const TableData2 = ({ data, column }) => {
  return (
    <table>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeadItem = ({ item }) => {
  return <th onClick={() => {}}>{item.heading}</th>;
};

const TableRow = ({ item, column }) => {
  return (
    <tr>
      {column.map((columnItem, index) => {
        if (columnItem.value.includes(".")) {
          const itemSplit = columnItem.value.split("."); //['address', 'city']
          return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
        } else {
          if (columnItem.value === "image") {
            return (
              <td>
                <img
                  className="w-50 h-50"
                  src={item[columnItem.value]}
                  alt={item[columnItem.value]}
                ></img>
              </td>
            );
          }
        }

        return <td>{item[`${columnItem.value}`]}</td>;
      })}
    </tr>
  );
};

export default TableData2;
