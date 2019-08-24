import React from 'react';
import Header from './components/Header'
import TabNav from './components/TabNav'
import {Route} from 'react-router-dom'
function App() {
  return (
  <>
    <Header />
    <Route match path="/" component={TabNav} />
  </>
  );
}

export default App;
