// 리액트 패키지를 불러옵니다.
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteDic, deleteDicFB } from './redux/modules/dic';
import styles from './css/Dic_card.module.css';

const Dic_card = (props) => {
  const words = useSelector((state) => state.dic.list)
  const dispatch = useDispatch()
  console.log(words)

  return (
    <>
      <div className={styles.card_box}>
        {words.map((word, idx) => {
          const dic_idx = {idx}
          // console.log(dic_idx.idx)
          return (
            <div key={idx} className={styles.card_list}> 
              <div className={styles.card}>
                <p>단어 : <sapn>{word.eng}</sapn></p>
                <p>의미 : <sapn>{word.kor}</sapn></p>
                <p>예문 : <sapn>{word.ex}</sapn></p>
              </div>
              <div className={styles.btn_box}>
                <button onClick={() => {
                  dispatch(deleteDicFB(dic_idx))
                  //여기는 해당 index를 지워주지만 firestore에서는 id로!
                  // dispatch(deleteDicFB(dic_idx.idx))
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

