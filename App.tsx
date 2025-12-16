import React, { Suspense } from 'react';
import Scene from './components/Scene';
import UI from './components/UI';

const App: React.FC = () => {
  return (
    <>
      <UI />
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white font-mono z-50">
          Loading Winter Magic...
        </div>
      }>
        <Scene />
      </Suspense>
    </>
  );
};

export default App;