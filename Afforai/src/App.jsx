import "./App.css";
import "./index.css";

import React, { lazy, Suspense } from "react";

// Lazy loading components
const LazyLayout = lazy(() => import("./components/Layout"));
const LazyHome = lazy(() => import("./pages/index"));

function App() {
  return (
    <>
      <Suspense fallback="Loading App">
        <LazyLayout>
          <Suspense fallback="Loading content">
            <LazyHome />
          </Suspense>
        </LazyLayout>
      </Suspense>
    </>
  );
}

export default App;
