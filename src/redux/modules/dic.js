//Dic.js
//firebase에서 만들었던 db가져오기.
import { db } from "../../firebase"; 
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';



// 1_Actions
const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
const DELETE = 'dic/DELETE';




const initialState = {
  list : [ ] };


// 2_Action Creators  //dic은 내가 넣을 data이름인가 
export function loadDic(dic_list) {
  return { type: LOAD , dic_list};
}
export function createDic(dic) {
  return { type: CREATE, dic };
}
export function deleteDic(dic_index) {
  // console.log("지울 인덱스", dic_index)
  return { type: DELETE, dic_index };
}


// 3_middlewares
export const loadDicFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, "dic"));
    // console.log(dic_data)

    let dic_list = []
    dic_data.forEach((D)=> {
      dic_list.push({...D.data()});
    })
    // console.log(dic_list)
    dispatch(loadDic(dic_list))
  }
}

export const createDicFB = (dic_data) => {
  return async function(dispatch) {
    const docRef = await addDoc(collection(db,"dic"), dic_data );
    // console.log((await getDoc(docRef)).data())
    // const _dic = ( getDoc(docRef))
    const dic = { id: docRef.id , ...dic_data}
    console.log(dic)

    dispatch(createDic(dic));
  }
}

export const deleteDicFB = (dic_id) => {
  return async function (dispatch, getState) {
    // if(!dic_id){
    //   window.alert('뒤로가기')
    //   return
    // }
    const docRef = doc(db,"dic", dic_id );
    await deleteDoc(docRef)
    console.log()
    dispatch(deleteDoc(docRef));
  }
}


// 4_Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "dic/LOAD" : {
      return { list : action.dic_list };
    }
    case "dic/CREATE" : {
      const new_card_list = [...state.list, action.dic];
      return { list : new_card_list };
    }
    case "dic/DELETE" : {

      const new_card_list = state.list.filter(( D, idx) =>{
        // console.log(parseInt(action.dic_index.idx) !== idx, 
        // action.dic_index.idx , idx) // 삭제할 부분 확인 찍어봄
        return parseInt(action.dic_index.idx) !== idx 
      })
      return { list : new_card_list };
    }



  default: 
    return state;
  }
}
  