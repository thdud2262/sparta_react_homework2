import { Route, Link } from 'react-router-dom';
import React from "react";

import styles from './css/App.module.css';
import Dic_card from './Dic_card';
import Dic_nav from './Dic_nav'; 
import Dic_addPage from './Dic_addPage';




function App() {

  const [word, setWord] = React.useState([ 'apple', 'banana', 'orange' ])
  const [mean, setMean] = React.useState([ '사과', '바나나', '오렌지' ])
  const [ex, setEx] = React.useState([ '사과굳', '바나나굳', '오렌지굳' ])

  const input_word = React.useRef(null);
  const input_mean = React.useRef(null);
  const input_ex = React.useRef(null);


  const addCard =()=> {
    // console.log('input에 있는 값은 찍힘. ref가져옴.')
    setWord([...word, input_word.current.value]);
    setMean([...mean, input_mean.current.value]);
    setEx([...ex, input_ex.current.value]);

  }

  return (
    
    <div className={styles.App}>
      <div className ={styles.contain}>
        <Dic_nav/>
        <Route exact path='/'>
          <Dic_card word={word} mean={mean} ex={ex}/> 
        </Route>
        <Route exact path='/addpage'>
          <Dic_addPage/>
        </Route>


        <div className={styles.detail_box}>
          <h2 className={styles.detail_title}>새로운 단어를 저장해봐요!</h2>
          <div className={styles.card_input}>
            <p>단어 : 
              <input type='text' className={styles.word} ref={input_word}/>
            </p>
            <p>뜻 : 
              <input type='text' className={styles.word_mean} ref={input_mean}/>
            </p>
            <p>예문 : 
              <input type='text' className={styles.word_ex} ref={input_ex} />
            </p>
          </div>
          <div className={styles.btn_box}>
            <button className={styles.btn} onClick={addCard}>
              저장하기
            </button>
            <button className={styles.btn}>
              <Link to='/'>돌아가기</Link>
            </button>
          </div>
        </div>

                
      </div>
    </div>
  );
}



export default App;
