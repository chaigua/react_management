import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
import {setToken as _setToken,getToken} from '@/utils'

const userStore = createSlice({
  name:'user',
  initialState:{
    token:getToken() || ''
  },
  reducers:{
    setToken(state,action){
      state.token = action.payload
      _setToken(action.payload)
    }
  }
})

const {setToken} = userStore.actions

const fetchLogin = (value)=>{
  return async(dispatch)=>{
    const res = await request.post('/authorizations',value)
    dispatch(setToken(res.data.token))
    console.log(res);
  }
}

export {fetchLogin}

const userReducer = userStore.reducer

export default userReducer