import { Route, Link } from 'react-router-dom';
import React from "react";
import { db } from './firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { loadDicFB } from './redux/modules/dic';

import styles from './css/App.module.css';
import Dic_card from './Dic_card';
import Dic_nav from './Dic_nav'; 
import Dic_addPage from './Dic_addPage';

function App() {
  const dispatch = useDispatch()

  React.useEffect( ()=> {
    dispatch(loadDicFB());
  }, []);





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
