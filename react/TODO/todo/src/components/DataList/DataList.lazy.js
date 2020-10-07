import React, { lazy, Suspense } from 'react';

const LazyDataList = lazy(() => import('./DataList'));

const DataList = props => (
  <Suspense fallback={null}>
    <LazyDataList {...props} />
  </Suspense>
);

export default DataList;
