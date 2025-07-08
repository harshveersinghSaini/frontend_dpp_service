import CommonTable from "@/components/common/CommonTable/CommonTable";
import { generateTransactionData } from "@/components/common/CommonTable/generateTransactionData";
import { Badge } from "antd";


const data = generateTransactionData(30); // generate 10 dummy rows


const columns = [
  { title: "Transaction ID", dataIndex: "transactionId", key: "transactionId" },
  { title: "Customer ID", dataIndex: "customer", key: "customer" },
  { title: "Customer Email", dataIndex: "email", key: "email" },
  { title: "Date & Timestamp", dataIndex: "date", key: "date" },
  { title: "Gross Amount", dataIndex: "gross", key: "gross" },
  { title: "Vat Deducted", dataIndex: "vat", key: "vat" },
  { title: "Net Amount", dataIndex: "net", key: "net" },
{
  title: "Status",
  dataIndex: "status",
  key: "status",
  render: (status: string) => {
    let color = "";
    switch (status) {
      case "Completed":
        color = "green";
        break;
      case "Pending":
        color = "gold";
        break;
      case "Failed":
        color = "red";
        break;
      default:
        color = "gray";
    }

    return <Badge color={color} text={status} />;
  }
},
  { title: "Actions", dataIndex: "actions", key: "actions", render: () => ( 
    <button className="view">View</button>
  ) },
];


const Dashboard: React.FC = () => {
  return <div className="transaction-page">
      <CommonTable
        title="Recent Transactions"
        data={data}
        columns={columns}
        showHeader={true}
        onSearch={(val) => console.log("Search:", val)}
        onFilterClick={() => console.log("Filter Clicked")}
        onRefreshClick={() => console.log("Refresh Clicked")}
        onExportClick={() => console.log("Export Clicked")}
      />
    </div>
};

export default Dashboard;
