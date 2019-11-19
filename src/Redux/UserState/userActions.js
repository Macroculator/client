import axiosWithAuth from "../../Utils/axiosWithAuth"
import axios from "axios"

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const SIGN_UP_START = "SIGN_UP_START"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILED = "SIGN_UP_FAILED"

export const GET_USER_START = "GET_USER_START"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILED = "GET_USER_FAILED"


export const login = (userInfo,history) => dispatch => {
    dispatch({type: LOGIN_START});
    axios
        .post("https://bw-macro-calculator.herokuapp.com/auth/login",userInfo)
        .then(res=>{
            localStorage.setItem("token",res.data.token)
            dispatch({type:LOGIN_SUCCESS , payload: res.data.username})
            history.push("/Dashboard")
        })
        .catch((err)=>console.log(err.message))
}

export const signUp = (userInfo,history) => dispatch => {
    dispatch({type: SIGN_UP_START});
    axios
        .post("https://bw-macro-calculator.herokuapp.com/auth/register", userInfo)
        .then(res=>{
            localStorage.setItem("token",res.data.token)
            dispatch({type: SIGN_UP_SUCCESS, payload: res.data})
            history.push("/WelcomePage")
        })
        .catch((err)=>dispatch({type: SIGN_UP_FAILED , payload: err.message}))
}

export const getUser = () => dispatch => {
    dispatch({type: GET_USER_START});
    axiosWithAuth()
        .get("/")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}
