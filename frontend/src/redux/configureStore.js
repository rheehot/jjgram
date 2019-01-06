import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';//리덕스 미들웨어 추가
import users from 'redux/modules/users';

const middlewares=[thunk];//여기에 미들웨어를 넣을 것이다.

//합치기 첫번째 리듀서는 유저 여기서 더많은 리듀서를 작성하면 된다. 여기에 라우팅 미들웨어 등도 많이 입력할 것.
const reducer = combineReducers({
    users,
})



//store를 생성한다 리듀서로 합쳐서 한개의 스토어 생성
//applyMiddleware에 미들웨어를 넣어준다. ...array를 unpack한다.array가 thunk,router이렇게 된다.
let store=initialState=>createStore(reducer,applyMiddleware(...middlewares));

export default store();