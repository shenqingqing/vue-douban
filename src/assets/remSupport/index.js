let pxPerRem = 0
let defaultSize = 375

function getWindowWidth () {
  return window.innerWidth || document.documentElement.clientWidth
}

function getFontSize () {
  return 50 * (getWindowWidth() / defaultSize)
}

function initFontSizeToStyle () {
  pxPerRem = getFontSize()
  document.documentElement.style.fontSize = `${pxPerRem}px`
}

window.addEventListener('resize', initFontSizeToStyle)
document.addEventListener('DOMContentLoaded', initFontSizeToStyle)

export default {
  getPxPerRem () {
    return pxPerRem
  }
}
