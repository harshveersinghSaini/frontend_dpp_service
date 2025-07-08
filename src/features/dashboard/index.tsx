import React, { useState } from "react";
import "./dashboard.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import CommonCards from "@/components/common/CommonCards/CommonCards";
import FaMoneyBillWave from "/Image/transaction.png";
import FaFileInvoice from "/Image/totalfree.png";
import FaFileAlt from "/Image/total.png";
import FaHandshake from "/Image/settlement.png";

// Strongly typed menu item
type SimpleMenuItem = { label: string; key: string };

const cardData = [
  {
    label: "Transaction Volume",
    value: "₱24,500.00",
    icon: FaMoneyBillWave,
    iconBg: "#F1F0FE",
  },
  {
    label: "Total fee Collected",
    value: "₱1,245.00",
    icon: FaFileInvoice,
    iconBg: "#FFF7DB",
  },
  {
    label: "Total Transactions",
    value: "1,248",
    icon: FaFileAlt,
    iconBg: "#FFEDEC",
  },
  {
    label: "Net Settlement",
    value: "₱24,500.00",
    icon: FaHandshake,
    iconBg: "#E9F9EC",
  },
];

// Dropdown options
const entityItems: SimpleMenuItem[] = [
  { label: "DPP -> Merchant", key: "0" },
  { label: "Merchant -> Bank", key: "1" },
];

const durationItems: SimpleMenuItem[] = [
  { label: "Last 7 Days", key: "0" },
  { label: "Last 30 Days", key: "1" },
];

const frequencyItems: SimpleMenuItem[] = [
  { label: "Daily", key: "0" },
  { label: "Weekly", key: "1" },
];

// Utility for transforming items
const toAntdMenuItems = (items: SimpleMenuItem[]) =>
  items.map(({ label, key }) => ({ label, key }));

const Dashboard: React.FC = () => {
  const [selectedEntity, setSelectedEntity] = useState("DPP -> Merchant");
  const [selectedDuration, setSelectedDuration] = useState("Last 7 Days");
  const [selectedFrequency, setSelectedFrequency] = useState("Daily");

  const handleSelect = (
    key: string,
    items: SimpleMenuItem[],
    setValue: (val: string) => void
  ) => {
    const selected = items.find((item) => item.key === key);
    if (selected) {
      setValue(selected.label);
    }
  };

  return (
    <div className="dashboard">
      <h2>Provider Dashboard Overview</h2>
      <p>Welcome back, Acme Payments! Here's what's happening with your account.</p>

      <CommonCards className="common-cards" cards={cardData} withIcons />

      <div className="dashboard_Overview">
        <div className="dashboard_Overview_left">
          <div className="left_top">
            <h3>Tax Deduction Summary</h3>

            <Dropdown
              menu={{
                items: toAntdMenuItems(frequencyItems),
                onClick: (e) => handleSelect(e.key, frequencyItems, setSelectedFrequency),
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {selectedFrequency}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className="left_middle">
            <span>
              <h3>Total VAT (12%) Deducted</h3>
              <p>₱1,250.75</p>
            </span>
            <span>
              <h3>Total VAT Remitted to BIR</h3>
              <p>₱1,150.50</p>
            </span>
          </div>

          <div className="left_bottom">
            <img src="/Image/alert.png" alt="alert" />
            <h2>Variance: ₱100.25</h2>
          </div>
        </div>

        <div className="dashboard_Overview_right" />
      </div>

      <div className="innerCards">
        <div className="fund-summary__header">
          <h3>Fund Settlement Summary</h3>

          <div className="dropdowns">
            <Dropdown
              menu={{
                items: toAntdMenuItems(entityItems),
                onClick: (e) => handleSelect(e.key, entityItems, setSelectedEntity),
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {selectedEntity}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Dropdown
              menu={{
                items: toAntdMenuItems(durationItems),
                onClick: (e) => handleSelect(e.key, durationItems, setSelectedDuration),
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {selectedDuration}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <CommonCards className="common-cards" cards={cardData} />
      </div>

      <div className="Settlement_Progress">
        <div className="Settlement_ProgressData">
          <h2>Settlement Progress</h2>
          <p>73% Progress</p>
        </div>
        <div className="progress_report">
          <img src="/Image/progress.png" alt="progress" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
