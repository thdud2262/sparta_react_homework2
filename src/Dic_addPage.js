// 리액트 패키지를 불러옵니다.
import React from 'react';
import { useRef } from "react";
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom';

import { createDicFB } from './redux/modules/dic';
import { createDic } from './redux/modules/dic';
import styles from './css/Dic_addPage.module.css';



const Dic_addPage = (props) => {
  console.log(props)
  const history = useHistory();
  const inputRef = useRef([]);
  const dispatch = useDispatch();



  const addCard =()=> {
    // const eng = inputRef.current[0].value;
    // const kor = inputRef.current[1].value;
    // const ex = inputRef.current[2].value;
    // const ref_data = { eng:eng, kor:kor, ex:ex };
    const eng = inputRef.current[0].value;
    const kor = inputRef.current[1].value;
    const ex = inputRef.current[2].value;
    const ref_data = { eng:eng, kor:kor, ex:ex };

    
    // dispatch(createDic(ref_data));
    dispatch(createDicFB(ref_data))

    history.goBack();
  }

  return (
    <>
      <div className={styles.detail_box}>
        <h2 className={styles.detail_title}>새로운 단어를 저장해봐요!</h2>
        <div className={styles.card_input}>
          {/* <p>단어 : <input type='text' ref={word}/></p>
          <p>의미 : <input type='text' ref={mean}/></p>
          <p>예문 : <input type='text' ref={exam}/></p> */}
          <p>단어 : <input type='text' ref={el=> inputRef.current[0]=el }/></p>
          <p>의미 : <input type='text' ref={el=> inputRef.current[1]=el }/></p>
          <p>예문 : <input type='text' ref={el=> inputRef.current[2]=el }/></p>
        </div>
        <div className={styles.btn_box}>
          <button className={styles.btn} 
            onClick={addCard}>
            저장하기
          </button>
          <button className={styles.btn}>
            <Link to='/'>돌아가기</Link>
          </button>
        </div>
      </div>
    </>
  )
};

export default Dic_addPage;