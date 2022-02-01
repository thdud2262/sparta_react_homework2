// 리액트 패키지를 불러옵니다.
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteDic } from './redux/modules/dic';
import styles from './css/Dic_card.module.css';

const Dic_card = (props) => {
  const words = useSelector((state) => state.dic.list)
  const Dispatch = useDispatch()
  // console.log(words)

  return (
    <>
      <div className={styles.card_box}>
        {words.map((word, idx) => {
          const dic_idx = {idx}
          // console.log(dic_idx, word)
          return (
              <div key={idx} className={styles.card_list}> 
                <div className={styles.card}>
                  <p>단어 : <sapn>{word.eng}</sapn></p>
                  <p>의미 : <sapn>{word.kor}</sapn></p>
                  <p>예문 : <sapn>{word.ex}</sapn></p>
                </div>
                <div className={styles.btn_box}>
                  <button onClick={() => {
                    Dispatch(deleteDic(dic_idx))
                    console.log('삭제')
                  }}>삭제</button>
                </div>
              </div>
          )
        })}
      </div>
    </>
  )
};

export default Dic_card;

