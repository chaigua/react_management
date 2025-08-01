import { request } from "@/utils";
const getChannelAPI = ()=>{
  return request({
    url:'/channels',
    method:'GET'
  })
}

const createArticleAPI = (data)=>{
  return request({
    url:"/mp/articles?draft=false",
    method:'POST',
    data
  })
}

const updateArticleAPI = (data)=>{
  return request({
    url:`/mp/articles/${data.id}?draft=false`,
    method:'PUT',
    data
  })
}

const getArticleListAPI = (params)=>{
  return request({
    url:'/mp/articles',
    method:'GET',
    params
  })
}

const delAticleAPI = (id)=>{
  return request({
    url:`/mp/articles/${id}`,
    method:'DELETE',
  })
}

const getAticleByIdAPI = (id)=>{
  return request({
    url:`/mp/articles/${id}`,
  })
}


export {updateArticleAPI,getChannelAPI,createArticleAPI,getArticleListAPI,delAticleAPI,getAticleByIdAPI}