import axios from 'axios'
// 获取电影条目信息：
export function getMoviedata (params) {
    return new Promise(function (resolve, reject) {
      axios.post('/getMovie').then(
        function (res) {
          resolve(res)
        }
      )
    })
  }
  export function getCommunity (params) {
    const url = '/hall' + params.hallType 
    return axios.get(url).then((res) => {
      console.log(res)
      return Promise.resolve(res.data)
    })
  }