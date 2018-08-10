import axios from 'axios'
import { LOAD_TEXT } from 'api/config'
import {customGETAxios, customPOSTAxios} from './requestAxios.js'
// 豆瓣电影Top250列表
export function getTopaoMoviedata (that, params, page) {
    that.$indicator.open(LOAD_TEXT)
    const url = '/douban/top250?p=' + page+'&c=10' 
    return customPOSTAxios(that, url, params)
  }
//   电影详情
  export function getSubjectById (that, id) {
    that.$indicator.open(LOAD_TEXT)
    const url = '/douban/subject?movidId=' + id 
    return customGETAxios(that, url)
  }
  //   轮播图
  export function getSlide (that) {
    that.$indicator.open(LOAD_TEXT)
    const url = '/douban/slideList'
    return customGETAxios(that, url)
  }