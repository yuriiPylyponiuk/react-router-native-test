import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {ComponentOne} from './ComponentOne';
import {ComponentTwo} from './ComponentTwo';

const App = () => {
  return (
    <>
      <NativeRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ComponentOne />} />
          <Route path="/login" element={<ComponentTwo />} />
        </Routes>
      </NativeRouter>
    </>
  );
};

export default App;
