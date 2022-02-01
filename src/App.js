import { Route, Link } from 'react-router-dom';
import React from "react";
import { useSelector } from 'react-redux';

import styles from './css/App.module.css';
import Dic_card from './Dic_card';
import Dic_nav from './Dic_nav'; 
import Dic_addPage from './Dic_addPage';

function App() {


  return ( 
    <div className={styles.App}>
      <div className ={styles.contain}>
        <Dic_nav/>
        <Route exact path='/'>
          <Dic_card/> 
        </Route>
        <Route exact path='/addpage'>
          <Dic_addPage/>
        </Route>
      </div>
    </div>
  );
}


export default App;
