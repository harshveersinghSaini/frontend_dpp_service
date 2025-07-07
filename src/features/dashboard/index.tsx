import React from "react";
import "./dashboard.scss";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import CommonCards from "@/components/common/CommonCards/CommonCards";
import FaMoneyBillWave from "/Image/transaction.png";
import FaFileInvoice from "/Image/totalfree.png";
import FaFileAlt from "/Image/total.png";
import FaHandshake from "/Image/settlement.png";
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

const items: MenuProps["items"] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];
const entityItems: MenuProps["items"] = [
  { label: "DPP -> Merchant", key: "0" },
  { label: "Merchant -> Bank", key: "1" },
];

const durationItems: MenuProps["items"] = [
  { label: "Last 7 Days", key: "0" },
  { label: "Last 30 Days", key: "1" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Provider Dashboard Overview</h2>
      <p>
        Welcome back, Acme Payments! Here's what's happening with your account.
      </p>
      <CommonCards className="common-cards" cards={cardData} withIcons />
      <div className="dashboard_Overview">
        <div className="dashboard_Overview_left">
          <div className="left_top">
            <h3>Tax Deduction Summary</h3>

            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Daily
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="left_middle">
            <span>
              {" "}
              <h3>Total VAT (12%) Deducted</h3>
              <p>₱1,250.75</p>
            </span>
            <span>
              {" "}
              <h3>Total VAT Remitted to BIR</h3>
              <p>₱1,150.50</p>
            </span>
          </div>
          <div className="left_bottom">
            <img src="/Image/alert.png" alt="" />
            <h2>Variance: ₱100.25</h2>
          </div>
        </div>

        <div className="dashboard_Overview_right"></div>
      </div>
      <div className="innerCards">
        <div className="fund-summary__header">
          <h3>Fund settlement Summary</h3>
          <div className="dropdowns">
            <Dropdown menu={{ items: entityItems }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  DPP -&gt; Merchant
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>

            <Dropdown menu={{ items: durationItems }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Last 7 Days
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
          <img src="/Image/progress.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
