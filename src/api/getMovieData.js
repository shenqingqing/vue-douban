import axios from 'axios'
import { LOAD_TEXT } from 'api/config'
// 豆瓣电影Top250列表
export function getTopaoMoviedata (that, params, page) {
    that.$indicator.open(LOAD_TEXT)
    const url = '/douban/top250?p=' + page+'&c=10' 
    return axios.post(url, params).then((res) => {
        that.$indicator.close()
        if(res) {
            return Promise.resolve(res.data)
        }
    }).catch(function(eMsg) {
        that.$indicator.close()
    })
  }
//   电影详情
  export function getSubjectById (that, id) {
    that.$indicator.open(LOAD_TEXT)
    const url = '/douban/subject' + id 
    return axios.get(url).then((res) => {
        that.$indicator.close()
        if (res) {
          return Promise.resolve(res.data)
        }
    }).catch(function (eMsg) {
        that.$indicator.close()
      })
  }
  //   轮播图
  export function getSlide (that) {
    that.$indicator.open(LOAD_TEXT)
    const url = '/douban/slideList'
    return axios.get(url).then((res) => {
        that.$indicator.close()
        if (res) {
          return Promise.resolve(res.data)
        }
    }).catch(function (eMsg) {
        that.$indicator.close()
      })
  }