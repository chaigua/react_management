import { getChannelAPI } from '@/apis/article'
import { useState,useEffect } from 'react'
const useChannel = ()=>{
   const [channelList,setChannelList] =useState([])
    useEffect(()=>{
      const getChannelList = async()=>{
        const res = await getChannelAPI()
        setChannelList(res.data.channels)
      }
      getChannelList()
    },[])
    
    return {
      channelList
    }
}

export {useChannel}