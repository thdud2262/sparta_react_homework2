// 리액트 패키지를 불러옵니다.
import React from 'react';
import { useRef } from "react";

import { useDispatch, useSelector } from 'react-redux'; 
import { useHistory, useParams, Link } from 'react-router-dom';



import { updateDicFB, loadDicFB} from './redux/modules/dic';
import { createDic, updateDic } from './redux/modules/dic';
import styles from './css/Dic_addPage.module.css';



const Dic_update = (props) => {
    
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams()
  const params_index = params.index

  const dic_data = useSelector((state)=>state.dic.list)
  // if (!dic_data){
  //   return ""
  // }else {
  //   dic_datas=(state)=>state.dic.list
  //   return console.log(dic_datas)
  // }
  // 비동기처리 아ㅏㅏㅏㅏㅏㅏㅏㅏㅏ 
  //아래 inputValue는 변수라 값이 없을때 undefined 나오는데 배열에서 [] 는 값이 없어서 비동기처리 하려고 하면 어떤값??
  
  // loadDicFB가 일어나는데 useSelector로 데이터 가져와서 그런건가?

  console.log(dic_data)
  console.log(params_index)
  console.log(dic_data[params_index].id)
  const inputVal = dic_data[params_index]
  console.log(inputVal)

  const eng = React.useRef(null)
  const kor = React.useRef(null)
  const ex = React.useRef(null)



  const updateCard =()=> {
    let update = {
      eng : eng.current.value,
      kor : kor.current.value,
      ex : ex.current.value,
      id : dic_data[params_index].id,
    }
    // console.log(update.id)
    dispatch(updateDicFB(update))
    history.push('/')
  }

  if(inputVal === undefined){
    return <React.Fragment></React.Fragment>
  }

  return (
    <>
      <div className={styles.detail_box}>
        <h2 className={styles.detail_title}>단어수정</h2>
        <div className={styles.card_input}>
          <p>단어 : <input type='text' ref={eng} defaultValue={inputVal.eng} /></p>
          <p>의미 : <input type='text' ref={kor} defaultValue={inputVal.kor}/></p>
          <p>예문 : <input type='text' ref={ex} defaultValue={inputVal.ex}/></p>
        </div>
        <div className={styles.btn_box}>
          <button 
            className={styles.btn} 
            onClick={updateCard}>
            수정완료
          </button>
          <button className={styles.btn}>
            <Link to='/'>돌아가기</Link>
          </button>
        </div>
      </div>
    </>
  )
};

export default Dic_update;