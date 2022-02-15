//Dic.js
//firebase에서 만들었던 db가져오기.
import { db } from "../../firebase"; 
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';



// 1_Actions
const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
const DELETE = 'dic/DELETE';
const UPDATE = 'dic/UPDATE';




const initialState = {
  list : [ ] };


// 2_Action Creators  //dic은 내가 넣을 data이름인가 
export function loadDic(dic_list) {
  return { type: LOAD , dic_list};
}
export function createDic(dic) {
  return { type: CREATE, dic };
}
export function deleteDic(dic_idx) {
  // console.log("지울 인덱스", dic_index)
  return { type: DELETE, dic_idx };
}
export function updateDic(dic_index,dic_data) {
  console.log("수정 인덱스", dic_index, dic_data)
  return { type: UPDATE, dic_index, dic_data };
}


// 3_middlewares
export const loadDicFB = () => {
  return async function (dispatch) {
    const dic_data = await getDocs(collection(db, "dic"));
    // console.log(dic_data)

    let dic_list = []
    dic_data.forEach((D)=> {
      dic_list.push({...D.data(), id:D.id});
    })
    console.log('데이터로드')
    dispatch(loadDic(dic_list))
  }
}

export const createDicFB = (dic_data) => {
  return async function(dispatch) {
    const docRef = await addDoc(collection(db,"dic"), dic_data );
    // console.log((await getDoc(docRef)).data())
    // const _dic = ( getDoc(docRef))
    const dic = { id: docRef.id , ...dic_data }
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

    const _word_list = getState().dic.list;
    const word_index = _word_list.findIndex((b) => {
      return b.id === dic_id;
    });
    dispatch(deleteDic(word_index));
  }
}

export const updateDicFB = (dic_data) => {
  return async function (dispatch, getState) {
    // 수정할 도큐먼트 가져오기
    const docRef = doc(db,"dic", dic_data.id);
    console.log(dic_data)
    console.log(docRef.id) // 선택한 dic의 파이어베이스 id

    await updateDoc(docRef, { id: docRef.id, ...dic_data });
    //getState() 사용해서 스토어의 데이터를 가져올 수 있다.
    const _dic_list = getState().dic.list;
    const update_data = { id: docRef.id, ...dic_data };
    console.log(_dic_list)  //전체데이터
    console.log(update_data)//선택데이터

    //findIndex로 몇 번째에 있는 지 찾기!
    //updateWordFB의 파라미터로 넘겨받은 아이디와 똑같은 아이디가 몇 번 째에 있는지 찾기
    const dic_index = _dic_list.findIndex((b) => {
      console.log(b)
      console.log( b.id === docRef.id)
      return b.id === docRef.id;
        });
      console.log(dic_index)

    dispatch(updateDic(dic_index, update_data));
  };
};




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
        // action.dic_index.idx , idx) // 삭제할 부분 확인 찍어봄\
        console.log(action.dic_idx)
        return parseInt(action.dic_idx) !== idx 
      })
      return { list : new_card_list };
    }
    case "dic/UPDATE" : {
      // action에서 가져온 값 : 수정하려는 index값, 수정하는 data
      // console.log(state.list)
      // console.log(action.dic_data)
        const new_card_list = state.list.map((cur,ind) => {
          return cur.id === action.dic_data.id ? action.dic_data : cur })
          console.log(new_card_list)
      return { ...state, list : new_card_list };
    }

  default: 
    return state;
  }
}
  