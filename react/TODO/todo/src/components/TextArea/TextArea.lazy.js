import React, { lazy, Suspense } from 'react';

const LazyTextArea = lazy(() => import('./TextArea'));

const TextArea = props => (
  <Suspense fallback={null}>
    <LazyTextArea {...props} />
  </Suspense>
);

export default TextArea;
