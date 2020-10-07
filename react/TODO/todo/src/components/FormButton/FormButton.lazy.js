import React, { lazy, Suspense } from 'react';

const LazyFormButton = lazy(() => import('./FormButton'));

const FormButton = props => (
  <Suspense fallback={null}>
    <LazyFormButton {...props} />
  </Suspense>
);

export default FormButton;
