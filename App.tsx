import React from 'react';
import { Router, Route, Routes } from './router';
// import { Router, Route, Routes } from 'react-router-native';
import { ComponentOne } from './ComponentOne';
import { ComponentTwo } from './ComponentTwo';

export const App = () => (
    <>
      <Router initialEntries={['/']}>
        <Routes>
          <Route path={'/'} element={<ComponentOne />} />
          <Route path={'/login'} element={<ComponentTwo />} />
        </Routes>
      </Router>
    </>
  )
;
