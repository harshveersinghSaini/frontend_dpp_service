
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import './CommonTable.scss';
import { IoRefreshOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

interface CommonTableProps<T> {
  data: T[];
  columns: ColumnsType<T>;
  title?: string;
  showHeader?: boolean;
  onSearch?: (value: string) => void;
  onFilterClick?: () => void;
  onRefreshClick?: () => void;
  onExportClick?: () => void;
}

function CommonTable<T extends object>({
  data,
  columns,
  title,
  showHeader = true,
  onSearch,
  onFilterClick,
  onRefreshClick,
  onExportClick,
}: CommonTableProps<T>) {
  return (
    <div className="common-table">
      {showHeader && (
        <div className="common-table__actions">

            {title && <h3 className="common-table__title">{title}</h3>}
            <div className="common-table__actions-buttons">
          <input
            type="text"
            placeholder="Search transactions..."
            className="common-table__search"
            onChange={(e) => onSearch?.(e.target.value)}
          />
          <button onClick={onFilterClick}> <IoFilter /> Filter</button>
          <button onClick={onRefreshClick}><IoRefreshOutline /> Refresh</button>
          <button className="export" onClick={onExportClick}> <MdOutlineFileDownload /> Export</button>
          </div>
        </div>
      )}

      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        rowKey={(record) => JSON.stringify(record)}
        className="custom-ant-table"
      />
    </div>
  );
}

export default CommonTable;
