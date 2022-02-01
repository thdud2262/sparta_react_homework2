// // 리액트 패키지를 불러옵니다.
// import React from 'react';
// import styles from './css/Dic_card.module.css';
// import { useSelector } from 'react-redux';
// import dic from './redux/modules/dic';

// const Dic_card = (props) => {
//   const dic_datas = useSelector((state) => state.dic.initialState.list)
//   // console.log(dic_datas[0].eng)

//   return (
//     <>
//         <div className={styles.card}>
//           <p>단어 : 
//             <sapn className={styles.word}>{props.eng}</sapn>
//           </p>
//           <p>뜻 : 
//             <sapn className={styles.word_mean}>{props.kor}</sapn>
//           </p>
//           <p>예문 : 
//             <sapn className={styles.word_ex}>{props.ex}</sapn>
//           </p>
//         </div>
//       )

//     </>
//   )
// };


// export default Dic_card;