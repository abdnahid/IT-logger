import { GET_LOGS,LOGS_ERROR,SET_LOADING,ADD_LOG,DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG,SEARCH_LOGS } from "../actions/types";

const initialState ={
    logs:null,
    loading:false,
    error:null,
    current:null
}

const logReducer= (state=initialState,action)=>{
    switch (action.type) {
        case SET_LOADING:
            return {...state,loading:true}
        case GET_LOGS:
            return {...state,logs:action.payload,loading:false}
        case ADD_LOG:
            return {...state,logs:[...state.logs,action.payload]}
        case DELETE_LOG:
            return {...state,logs:state.logs.filter(log=>log.id!==action.payload),loading:false}
        case SET_CURRENT:
            return {...state,current:action.payload}
        case CLEAR_CURRENT:
            return {...state,current:null}
        case LOGS_ERROR:
            return {...state,error:action.payload,loading:false}
        case UPDATE_LOG:
            return {...state,logs:state.logs.map((log)=>log.id===action.payload.id?action.payload:log),loading:false}
        case SEARCH_LOGS:
            return {...state,logs:action.payload,loading:false}
        default:
            return state;
    }
}

export default logReducer;