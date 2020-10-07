import React, { lazy, Suspense } from 'react';

const LazyInputBox = lazy(() => import('./InputBox'));

const InputBox = props => (
  <Suspense fallback={null}>
    <LazyInputBox {...props} />
  </Suspense>
);

export default InputBox;
