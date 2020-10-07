import React, { lazy, Suspense } from 'react';

const LazyData = lazy(() => import('./Data'));

const Data = props => (
  <Suspense fallback={null}>
    <LazyData {...props} />
  </Suspense>
);

export default Data;
