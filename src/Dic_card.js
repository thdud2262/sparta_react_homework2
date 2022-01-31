// 리액트 패키지를 불러옵니다.
import React from 'react';
import styles from './css/Dic_card.module.css';


const Dic_card = ({word, mean, ex }) => {
  
  const [count, setState] = React.useState(3);
  const card_count = Array.from({length:count}, (v,i) => i );

  const words = word;

  console.log()

  return (
    <>
      <div className={styles.card_box}>
        {words.map(( word , idx ) => {
              return (
              <div className={styles.card} key={idx}>
                <p>단어 : 
                  <sapn className={styles.word}>{word}</sapn>
                </p>
                <p>뜻 : 
                  <sapn className={styles.word_mean}>{mean[idx]}</sapn>
                </p>
                <p>예문 : 
                  <sapn className={styles.word_ex}>{ex[idx]}</sapn>
                </p>
              </div>
              );
            })}
      </div>
    </>
  )
};



export default Dic_card;