import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  privateRoutesData,
  publicRoutesData,
  PublicRoute,
  PrivateRoute,
} from '@/routes/index';
import { rootName } from '@/utils/constants.utils';
import { PageNotFound, Toast } from '@/components';
import { useSelector } from '@/store/index';
import type { RootState } from '@/store/index';

function App() {
  const isAuthenticate = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const { loading, error, message } = useSelector(
    (state: RootState) => state.toast
  );

  console.log('loading, error, message', loading, error, message);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to={`${rootName}`} />} />
        <Route element={<PublicRoute isAuthenticated={isAuthenticate} />}>
          {publicRoutesData.map((item, idx) => {
            return item.layout ? (
              <Route
                key={idx}
                path={`${rootName}${item.path}`}
                element={<item.layout />}
              >
                <Route index element={item.component} />
              </Route>
            ) : (
              <Route
                key={idx}
                path={`${rootName}${item.path}`}
                element={item.component}
              />
            );
          })}
        </Route>
        <Route element={<PrivateRoute isAuthenticated={isAuthenticate} />}>
          <Route>
            {privateRoutesData.map((item, idx) => {
              return item.layout ? (
                <Route
                  key={idx}
                  path={`${rootName}${item.path}`}
                  element={<item.layout />}
                >
                  <Route index element={item.component} />
                </Route>
              ) : (
                <Route
                  key={idx}
                  path={`${rootName}${item.path}`}
                  element={item.component}
                />
              );
            })}
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toast
        isVisible={!loading && message !== ''}
        type={error ? 'error' : 'success'}
        message={message}
      />
    </Suspense>
  );
}

export default App;
