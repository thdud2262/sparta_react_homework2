// import { Route, Link } from 'react-router-dom';
// import React from "react";

// import styles from './css/App.module.css';
// import Dic_card from './Dic_card';
// import Dic_nav from './Dic_nav'; 
// import Dic_addPage from './Dic_addPage';




// function App() {

//   const [words, setWord] = React.useState(
//     [
//       {eng:'apple1' , kor:'사과', ex:'i like apple'},
//       {eng:'apple2' , kor:'사과', ex:'i like apple'},
//       {eng:'apple3' , kor:'사과', ex:'i like apple'}])

//   const input_word = React.useRef(null);
//   const input_mean = React.useRef(null);
//   const input_ex = React.useRef(null);


//   return (
    
//     <div className={styles.App}>
//       <div className ={styles.contain}>
//         <Dic_nav/>
//         <Route exact path='/'>
//           {words.map((word ,idx)=>{
//             return(
//               <Dic_card key={idx} word={word}/> 
//             )
//           })}
//         </Route>
//         <Route exact path='/addpage'>
//           <Dic_addPage/>
//         </Route>
//       </div>
//     </div>
//   );
// }

// export default App;
