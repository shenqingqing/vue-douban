import Vue from 'vue'
import axios from 'axios'
import { ERR_OK } from 'api/config'

axios.defaults.baseURL = '' // 本地 接口地址

axios.defaults.timeout = 60000
  
async function requestInterceptor(config) {
    let oldToken = await window.localStorage.getItem('ACCESS_TOKEN')
    let accessToken = oldToken === '' ? '' : oldToken
    config.headers['token'] = accessToken
    return config
}

axios.interceptors.request.use(config => {
        return requestInterceptor(config)
    })
   

async function responseInterceptor(response) {
    if (response.data.code == ERR_OK) {
        return response
          
    } else {
        // 在添加其他的错误码判断
        if (response.data.msg) {
            showErroerAlert(response.data.msg)
            return response
        }
    }
}

// 设置拦截器
axios.interceptors.response.use(function(response) {
    return responseInterceptor(response)
})

function showErroerAlert(content) {
    Vue.prototype.$messageBox.alert(`${content}`).then(action => {})
}

Vue.prototype.$axios = axios