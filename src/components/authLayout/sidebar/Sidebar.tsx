import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../../styles/authLayout/_sidebar.scss';

// Icons
import dashboardIcon from '../../../assets/icons/dashboard.svg';
import transactionsIcon from '../../../assets/icons/transactions.svg';
import notificationsIcon from '../../../assets/icons/notifications.svg';
import ledgerIcon from '../../../assets/icons/ledger.svg';
import integrationIcon from '../../../assets/icons/integration.svg';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const Dot = ({ path }: { path: string }) => (
    <span className={currentPath === path ? 'active-dot' : 'inactive-dot'} />
  );

  const items = [
    {
      key: '/dashboard',
      icon: <img src={dashboardIcon} alt="Dashboard" className="sidebar-icon" />,
      label: 'Dashboard',
      onClick: () => navigate('/dashboard'),
    },
    {
      key: '/transactions',
      icon: <img src={transactionsIcon} alt="Transactions" className="sidebar-icon" />,
      label: 'Transactions',
      onClick: () => navigate('/transactions'),
    },
    {
      key: '/notifications',
      icon: <img src={notificationsIcon} alt="Notifications" className="sidebar-icon" />,
      label: 'Notifications',
      onClick: () => navigate('/notifications'),
    },
    {
      key: 'ledger',
      icon: <img src={ledgerIcon} alt="Ledger" className="sidebar-icon" />,
      label: 'Ledger &  Compliance',
      children: [
        {
          key: '/vat-remittance',
          label: (
            <div className="sidebar-Dropdown-label">
              <Dot path="/vat-remittance" />
              VAT Remittance
            </div>
          ),
          onClick: () => navigate('/vat-remittance'),
        },
        {
          key: '/tin-flag',
          label: (
            <div className="sidebar-Dropdown-label">
              <Dot path="/tin-flag" />
              TIN Flag Alerts
            </div>
          ),
          onClick: () => navigate('/tin-flag'),
        },
        {
          key: '/scorecard',
          label: (
            <div className="sidebar-Dropdown-label">
              <Dot path="/scorecard" />
              Compliance Scorecard
            </div>
          ),
          onClick: () => navigate('/scorecard'),
        },
      ],
    },
    {
      key: 'integration',
      icon: <img src={integrationIcon} alt="Integration" className="sidebar-icon" />,
      label: 'Integration',
      children: [
        {
          key: '/api-docs',
          label: (
            <div className="sidebar-Dropdown-label">
              <Dot path="/api-docs" />
              API Documentation
            </div>
          ),
          onClick: () => navigate('/api-docs'),
        },
        {
          key: '/api-key',
          label: (
            <div className="sidebar-Dropdown-label">
              <Dot path="/api-key" />
              API Key & Auth Issuance
            </div>
          ),
          onClick: () => navigate('/api-key'),
        },
        {
          key: '/sandbox',
          label: (
            <div className="sidebar-Dropdown-label">
              <Dot path="/sandbox" />
              Sandbox Testing Env.
            </div>
          ),
          onClick: () => navigate('/sandbox'),
        },
      ],
    },
  ];

  return (
    <Sider width={220} className="custom-sidebar">
      <Menu
        mode="inline"
        items={items}
        selectedKeys={[currentPath]}
        defaultOpenKeys={['ledger', 'integration']}
        className="sidebar-menu"
      />
    </Sider>
  );
};

export default Sidebar;
