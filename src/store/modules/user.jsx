import { createSlice } from "@reduxjs/toolkit";
import { clearToken } from "@/utils";
import {setToken as _setToken,getToken} from '@/utils'
import { loginAPI,getProfileAPI } from "@/apis/user";

const userStore = createSlice({
  name:'user',
  initialState:{
    token:getToken() || '',
    userInfo:{}
  },
  reducers:{
    setToken(state,action){
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state,action){
      state.userInfo = action.payload
    },
    clearUserInfo(state){
      state.token = ''
      state.userInfo = {}
      clearToken()
    }
  }
})

const {setToken,setUserInfo,clearUserInfo} = userStore.actions

const fetchLogin = (value)=>{
  return async(dispatch)=>{
    const res = await loginAPI(value)
    dispatch(setToken(res.data.token))
    console.log(res);
  }
}

const fetchUserInfo = ()=>{
  return async(dispatch)=>{
    const res = await getProfileAPI()
    dispatch(setUserInfo(res.data))
  }
}

export {fetchLogin,fetchUserInfo,clearUserInfo}

const userReducer = userStore.reducer

export default userReducer