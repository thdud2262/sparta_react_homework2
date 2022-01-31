// 리액트 패키지를 불러옵니다.
import React from 'react';
import { Link } from 'react-router-dom';

import Dic_addPage from './Dic_addPage';
import styles from './css/Dic_nav.module.css';


const Dic_nav = (props) => {
  
  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.nav_h2} > 
          <Link to='/'>Dictionary</Link>
        </h2>
        <button className={styles.nav_add}>
          <Link to='/addpage'>단어추가</Link>
        </button>
      </div>
    </>
  )
};

export default Dic_nav;