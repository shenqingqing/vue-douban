import Vue from 'vue'
Vue.filter('resizeImageWH', function (url, w, h) {
    if (!url) {
      return ''
    }
    return resizeImageWidthHeight(url, w, h)
  })
  // 固定宽高，自动裁剪  h w
function resizeImageWidthHeight (url, w, h) {
    if (url && url.indexOf('x-oss-process=image') > -1) {
      return url
    } else {
      url = resetUrl(url)
      if (url && url.indexOf('http') <= -1) {
        return url
      } else if (!url) {
        return ''
      }
      return url ? `${url}?x-oss-process=image/resize,m_fill,h_${h},w_${w}/quality,q_80` : ''
    }
  }