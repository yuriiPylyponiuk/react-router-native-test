import React from 'react';
import './App.css';
import {View, Text} from 'react-native';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <View>
        <Text>{'sdfsdf'}</Text>
      </View>
      <BrowserRouter>
        <div className="App">
          <Link to={'/'}><p>{'Hello'}</p></Link>
          <Link to={'hello'}><p>{'Hello2'}</p></Link>
          <Routes>
            <Route path={'/'}>
              <p>{'sdfsf'}</p>
            </Route>
            <Route path={'hello'}>
              <p>{'sdffsdsdfsf'}</p>
            </Route>
          </Routes>
        </div>
      </BrowserRouter >
    </>
  );
}
