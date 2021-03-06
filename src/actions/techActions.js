import { ADD_TECH, SET_LOADING, TECHS_ERROR,GET_TECHS, DELETE_TECH } from "./types";


//get techs from server
export const getTechs = () => async dispatch =>{
    try {
        setLoading();
        const res = await fetch("/techs");
        const data = await res.json();
        dispatch({
            type:GET_TECHS,
            payload:data
        });
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.statusText
        })
    }
}

//ADD TECH to server
export const addTechs = (newTech) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch("/techs",{
            method:'POST',
            body:JSON.stringify(newTech),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type:ADD_TECH,
            payload:data
        });
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.data
        })
    }
}


//delete logs from server
export const deleteTechs = (id) => async dispatch =>{
    try {
        setLoading();
        await fetch(`/techs/${id}`,{method:'DELETE'});
        dispatch({
            type:DELETE_TECH,
            payload:id
        });
    } catch (err) {
        dispatch({
            type:TECHS_ERROR,
            payload:err.response.data
        })
    }
}

//SET LOADING to true
export const setLoading=()=>{
    return {type:SET_LOADING}
}
