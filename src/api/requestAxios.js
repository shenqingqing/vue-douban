import axios from 'axios'
import {  ERR_OK } from 'api/config'

export function customGETAxios (that, url) {
    return axios.get(url).then((res) => {
      that.$indicator.close()
      if (res && res.data.code == ERR_OK) {
          console.log(res+'11111')
        return Promise.resolve(res.data)
      }
    }).catch(function (eMsg) {
      that.$indicator.close()
    })
  }

  export function customPOSTAxios (that, url, params) {
    return axios.post(url, params).then((res) => {
      that.$indicator.close()
      if (res &&  res.data.code == ERR_OK) {
        return Promise.resolve(res.data)
      } 
    }).catch(function (eMsg) {
      console.log(eMsg)
      that.$indicator.close()
    })
  }