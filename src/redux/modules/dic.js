//Dic.js

// 1_Actions
const CREATE = 'dic/CREATE';
const DELETE = 'dic/DELETE';
// const LOAD = 'dic/LOAD';



const initialState = {
  list : [
    {eng:'lemon' , kor:'레몬', ex:'i like lemon'},
    {eng:'apple2' , kor:'사과', ex:'i like apple'},
    {eng:'apple3' , kor:'사과', ex:'i like apple'},
    {eng:'apple4' , kor:'사과', ex:'i like apple'},
    {eng:'banana' , kor:'바나나', ex:'i like banana'}

  ]
};

// 2_Action Creators  //dic은 내가 넣을 data이름인가 
export function createDic(dic) {
  return { type: CREATE, dic };
}
export function deleteDic(dic_index) {
  // console.log("지울 인덱스", dic_index)
  return { type: DELETE, dic_index };
}

// export function loadWidgets() {
//   return { type: LOAD };
// }

// 3_middleware


// 4_Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "dic/CREATE" : {
      const new_card_list = [...state.list, action.dic];
      return { list : new_card_list };
    }
    case "dic/DELETE" : {
      // console.log(state, action); // 리듀서의 list 와 선택한 action객체
      const new_card_list = state.list.filter(( D, idx) =>{
        return parseInt(action.dic_index.idx) !== idx 
        // console.log(parseInt(action.dic_index.idx) !== idx, 
        // action.dic_index.idx , idx) // 삭제할 부분 확인 찍어봄
      })
      return { list : new_card_list };
      // return부분은 reducer에서 데이터를 가져오기 때문에 
      // initiaState랑 형식을 맞춰줘야한다 
    }



  default: 
    return state;
  }
}
  