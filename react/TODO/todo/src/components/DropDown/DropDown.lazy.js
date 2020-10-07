import React, { lazy, Suspense } from 'react';

const LazyDropDown = lazy(() => import('./DropDown'));

const DropDown = props => (
  <Suspense fallback={null}>
    <LazyDropDown {...props} />
  </Suspense>
);

export default DropDown;
