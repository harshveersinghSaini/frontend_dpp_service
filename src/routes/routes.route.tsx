import { PRIVATE_PATH, PUBLIC_PATH } from './routesPath.route';
import { Dashboard, Login, Registration } from '@/pages/index';
import { AuthLayout, MainLayout } from '@/components';
import UploadDocument  from '@/pages/Upload_official_Document/UploadDocument';
import BusinessRegistration from '@/pages/Business_Registration/Business_Registration';
import PublicLayout from '@/components/publicLayout/index';
const { login, registration, uploadDocument, businessRegistration } = PUBLIC_PATH;
const { dashboard } = PRIVATE_PATH;

export const publicRoutesData = [
  {
    path: login,
    component: <Login />,
    layout: MainLayout,
  },
  {
    path: registration,
    component: <Registration />,
    layout: MainLayout,
  },
  {
    path: businessRegistration,
    component: <BusinessRegistration />,
    layout: PublicLayout,
  },

   {
    path: uploadDocument,
    component: <UploadDocument />,
    layout: PublicLayout,
  },
];

export const privateRoutesData = [
  {
    path: dashboard,
    component: <Dashboard />,
    layout: AuthLayout,
  },
];
