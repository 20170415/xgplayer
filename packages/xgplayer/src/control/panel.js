import Player from '../player'

function SolidCircle (cx, cy, el) {
  let circle = document.createElement('canvas')
  let ctx = circle.getContext('2d')
  ctx.beginPath()
  ctx.fillStyle = '#ed1e79'
  ctx.arc(cx, cy, 6, 0, 2 * Math.PI, false)
  ctx.fill()
  el.appendChild(circle)
}
let panel = function () {
  let player = this
  let util = Player.util
  if (!this.config.panel) {
    return false
  }
  let panelBtn = util.createDom('xg-panel', `<xg-panel-icon class="xgplayer-panel-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                                                  <path fill="#ed1e79" transform="scale(0.6 0.6)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>
                                                  <path fill="#ed1e79" transform="scale(0.6 0.6)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>
                                                </svg>
                                              </xg-panel-icon>
                                              <xg-panel-slider class="xgplayer-panel-slider">
                                                <xg-hidemode class="xgplayer-hidemode">
                                                  <p class="xgplayer-hidemode-font">屏蔽类型</p>
                                                  <ul class="xgplayer-hidemode-radio">
                                                    <li class="xgplayer-hidemode-scroll" id="false">滚动</li>
                                                    <li class="xgplayer-hidemode-top" id="false">顶部</li>
                                                    <li class="xgplayer-hidemode-bottom" id="false">底部</li>
                                                    <li class="xgplayer-hidemode-color" id="false">色彩</li>
                                                  </ul>
                                                </xg-hidemode>
                                                <xg-transparency class="xgplayer-transparency">
                                                  <span>不透明度</span>
                                                  <div class="xgplayer-transparency-drag"></div>
                                                </xg-transparency>
                                                <xg-showarea class="xgplayer-showarea">
                                                  <div class="xgplayer-showarea-mode">
                                                    <span class="xgplayer-showarea-mode-item xgplayer-showarea-onequarter">1/4</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-half">1/2</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-threequarter">3/4</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-fullscreen">1</span>
                                                  </div>
                                                  <span>显示区域</span>
                                                  <div class="xgplayer-showarea-line"></div>
                                                  <xg-showarea-onequarter id="xgplayer-showarea-onequarter" class="xgplayer-showarea-itemone"></xg-showarea-onequarter>
                                                  <xg-showarea-half id="xgplayer-showarea-half" class="xgplayer-showarea-itemtwo"></xg-showarea-half>
                                                  <xg-showarea-threequarter id="xgplayer-showarea-threequarter" class="xgplayer-showarea-itemthree"></xg-showarea-threequarter>
                                                  <xg-showarea-fullscreen id="xgplayer-showarea-fullscreen" class="xgplayer-showarea-itemfour"></xg-showarea-fullscreen>
                                                </xg-showarea>
                                                <xg-danmuspeed class="xgplayer-danmuspeed">
                                                  <div class="xgplayer-danmuspeed-mode">
                                                    <span class="xgplayer-danmuspeed-mode-item">慢</span><span class="xgplayer-danmuspeed-mode-item">中</span><span class="xgplayer-danmuspeed-mode-item">快</span>
                                                  </div>
                                                  <span>弹幕速度</span>
                                                  <div class="xgplayer-danmuspeed-line"></div>
                                                  <xg-danmuspeed-slow></xg-danmuspeed-slow>
                                                  <xg-danmuspeed-middle></xg-danmuspeed-middle>
                                                  <xg-danmuspeed-fast></xg-danmuspeed-fast>
                                                </xg-danmuspeed>
                                                <xg-dnamufontsize class="xgplayer-danmufontsize">
                                                  <div class="xgplayer-fontmode">
                                                    <span class="xgplayer-fontmode-item">小</span><span class="xgplayer-fontmode-item">中</span><span class="xgplayer-fontmode-item">大</span>
                                                  </div>
                                                  <span>字体大小</span>
                                                  <div class="xgplayer-danmufontsize-line"></div>
                                                </xg-dnamufontsize>
                                              </xg-panel-slider>`, {tabindex: 7}, 'xgplayer-panel')
  let root = player.controls
  root.appendChild(panelBtn)
  // let icon = panelBtn.querySelector('.xgplayer-panel-icon')
  let slider = panelBtn.querySelector('.xgplayer-panel-slider')
  panelBtn.addEventListener('mouseenter', function (e) {
    e.preventDefault()
    e.stopPropagation()
    util.addClass(player.root, 'xgplayer-panel-active')
    panelBtn.focus()
  })
  let focusarray = ['touchend', 'click']
  focusarray.forEach(item => {
    panelBtn.addEventListener(item, function (e) {
      e.preventDefault()
      e.stopPropagation()
      util.addClass(player.root, 'xgplayer-panel-active')
      panelBtn.focus()
    })
  })
  panelBtn.addEventListener('mouseleave', function (e) {
    e.preventDefault()
    e.stopPropagation()
    util.removeClass(player.root, 'xgplayer-panel-active')
  })
  slider.addEventListener('mouseleave', function (e) {
    e.preventDefault()
    e.stopPropagation()
    util.removeClass(player.root, 'xgplayer-panel-active')
  })
  let hidemodeScroll = panelBtn.querySelector('.xgplayer-hidemode-scroll')
  let hidemodeTop = panelBtn.querySelector('.xgplayer-hidemode-top')
  let hidemodeBottom = panelBtn.querySelector('.xgplayer-hidemode-bottom')
  let hidemodeColor = panelBtn.querySelector('.xgplayer-hidemode-color')
  let hidemodeArray = {
    'scroll': hidemodeScroll,
    'top': hidemodeTop,
    'bottom': hidemodeBottom,
    'color': hidemodeColor
  }
  for (let key in hidemodeArray) {
    let keys = key
    focusarray.forEach(item => {
      hidemodeArray[keys].addEventListener(item, function (e) {
        if (hidemodeArray[keys].getAttribute('id') !== 'true') {
          hidemodeArray[keys].style.color = 'red'
          hidemodeArray[keys].setAttribute('id', 'true')
          if (keys !== 'color') {
            player.config.danmu.hide(keys)
          } else {
            player.config.color = false
          }
        } else {
          hidemodeArray[keys].style.color = 'white'
          hidemodeArray[keys].setAttribute('id', 'false')
          if (keys !== 'color') {
            player.config.danmu.show(keys)
          } else {
            player.config.color = true
          }
        }
      })
    })
  }
  let showarea = panelBtn.querySelector('.xgplayer-showarea-line')
  // let danmuspeed = panelBtn.querySelector('.xgplayer-danmuspeed-line')
  // let danmufontsize = panelBtn.querySelector('.xgplayer-danmufontsize-line')
  let onequarter = panelBtn.querySelector('#xgplayer-showarea-onequarter')
  let half = panelBtn.querySelector('#xgplayer-showarea-half')
  let threequarter = panelBtn.querySelector('#xgplayer-showarea-threequarter')
  let fullscreen = panelBtn.querySelector('#xgplayer-showarea-fullscreen')
  focusarray.forEach(item => {
    showarea.addEventListener(item, function (event) {
      let e = event || window.event
      let showareaPosition = e.clientX
      if (showareaPosition <= 335) {
        if (onequarter.childNodes.length === 0) {
          SolidCircle(0, 0, onequarter)
          panelBtn.querySelector('.xgplayer-showarea-onequarter').style.color = 'red'
        } else {
          onequarter.removeChild(onequarter.firstChild)
          panelBtn.querySelector('.xgplayer-showarea-onequarter').style.color = 'white'
        }
      } else if (showareaPosition > 335 && showareaPosition <= 385) {
        if (half.childNodes.length === 0) {
          SolidCircle(45, 0, half)
          panelBtn.querySelector('.xgplayer-showarea-half').style.color = 'red'
        } else {
          half.removeChild(half.firstChild)
          panelBtn.querySelector('.xgplayer-showarea-half').style.color = 'white'
        }
      } else if (showareaPosition > 385 && showareaPosition <= 435) {
        if (threequarter.childNodes.length === 0) {
          SolidCircle(60, 0, threequarter)
          panelBtn.querySelector('.xgplayer-showarea-threequarter').style.color = 'red'
        } else {
          threequarter.removeChild(threequarter.firstChild)
          panelBtn.querySelector('.xgplayer-showarea-threequarter').style.color = 'white'
        }
      } else if (showareaPosition > 435 && showareaPosition <= 460) {
        if (fullscreen.childNodes.length === 0) {
          SolidCircle(80, 0, fullscreen)
          panelBtn.querySelector('.xgplayer-showarea-fullscreen').style.color = 'red'
        } else {
          fullscreen.removeChild(fullscreen.firstChild)
          panelBtn.querySelector('.xgplayer-showarea-fullscreen').style.color = 'white'
        }
      }
    })
  })
// TODO 335 should  be a relative value
}
Player.install('panel', panel)
