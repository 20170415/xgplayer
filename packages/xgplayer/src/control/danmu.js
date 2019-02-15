import Player from '../player'
import DanmuJs from 'danmu.js'

let danmu = function () {
  let player = this
  if (player.config.danmu) {
    let container = Player.util.createDom('xg-bullet', '', {}, 'xgplayer-bullet')
    player.root.appendChild(container)
    container.style.height = '100%'
    let config = Player.util.deepCopy({
      container,
      // containerStyle: {
      //   zIndex: 9
      // },
      player: player.video,
      comments: [],
      area: {
        start: 0,
        end: 1
      }
    }, player.config.danmu)
    let panelBtn
    if (player.config.danmu.panel) {
      panelBtn = Player.util.createDom('xg-panel', `<xg-panel-icon class="xgplayer-panel-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                                                    <path fill="#ed1e79" transform="scale(0.6 0.6)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>
                                                    <path fill="#ed1e79" transform="scale(0.6 0.6)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>
                                                  </svg>
                                                </xg-panel-icon>
                                                <xg-panel-slider class="xgplayer-panel-slider">
                                                  <xg-hidemode class="xgplayer-hidemode">
                                                    <p class="xgplayer-hidemode-font">屏蔽类型</p>
                                                    <ul class="xgplayer-hidemode-radio">
                                                      <li class="xgplayer-hidemode-scroll" id="false">滚动</li><li class="xgplayer-hidemode-top" id="false">顶部</li><li class="xgplayer-hidemode-bottom" id="false">底部</li><li class="xgplayer-hidemode-color" id="false">色彩</li>
                                                    </ul>
                                                  </xg-hidemode>
                                                  <xg-transparency class="xgplayer-transparency">
                                                    <span>不透明度</span>
                                                    <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>
                                                  </xg-transparency>
                                                  <xg-showarea class="xgplayer-showarea">
                                                    <div class="xgplayer-showarea-mode">
                                                      <span class="xgplayer-showarea-mode-item xgplayer-showarea-zero">0</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-onequarters">1/4</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-twoquarters">1/2</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-threequarters">3/4</span><span class="xgplayer-showarea-mode-item xgplayer-showarea-full">1</span>
                                                    </div>
                                                    <span>显示区域</span>
                                                    <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="0" max="100" step="25" value="50">
                                                  </xg-showarea>
                                                  <xg-danmuspeed class="xgplayer-danmuspeed">
                                                    <div class="xgplayer-danmuspeed-mode">
                                                      <span class="xgplayer-danmuspeed-mode-item xgplayer-danmuspeed-slow">慢</span><span class="xgplayer-danmuspeed-mode-item xgplayer-danmuspeed-middle">中</span><span class="xgplayer-danmuspeed-mode-item xgplayer-danmuspeed-fast">快</span>
                                                    </div>
                                                    <span>弹幕速度</span>
                                                    <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-danmuspeed-gradient" type="range" min="50" max="150" step="50" value="100">
                                                  </xg-danmuspeed>
                                                  <xg-danmufont class="xgplayer-danmufont">
                                                    <div class="xgplayer-danmufont-mode">
                                                      <span class="xgplayer-danmufont-mode-item xgplayer-danmufont-small">小</span><span class="xgplayer-danmufont-mode-item xgplayer-danmufont-middle">中</span><span class="xgplayer-danmufont-mode-item xgplayer-danmufont-large">大</span>
                                                    </div>
                                                    <span>字体大小</span>
                                                    <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-danmufont-gradient" type="range" min="10" max="30" step="10" value="20">
                                                  </xg-danmufont>
                                                </xg-panel-slider>`, {tabindex: 7}, 'xgplayer-panel')
      let root = player.controls
      root.appendChild(panelBtn)
    }

    player.once('complete', () => {
      let danmujs = new DanmuJs(config)
      Player.util.addClass(container, 'xgplayer-has-bullet')
      if (!player.config.danmu.closeDefaultBtn) {
        player.bulletBtn = Player.util.copyDom(danmujs.bulletBtn.createSwitch(true))
        player.controls.appendChild(player.bulletBtn);
        ['click', 'touchend'].forEach(item => {
          player.bulletBtn.addEventListener(item, function (e) {
            e.preventDefault()
            e.stopPropagation()
            Player.util.toggleClass(player.bulletBtn, 'danmu-switch-active')
            if (Player.util.hasClass(player.bulletBtn, 'danmu-switch-active')) {
              Player.util.addClass(container, 'xgplayer-has-bullet')
              player.once('timeupdate', () => {
                danmujs.start()
              })
            } else {
              Player.util.removeClass(container, 'xgplayer-has-bullet')
              danmujs.stop()
            }
          }, false)
        })

        player.on('pause', () => {
          if (Player.util.hasClass(player.bulletBtn, 'danmu-switch-active')) {
            danmujs.pause()
          }
        })

        player.on('play', () => {
          if (Player.util.hasClass(player.bulletBtn, 'danmu-switch-active')) {
            danmujs.play()
          }
        })

        player.on('seeked', () => {
          if (Player.util.hasClass(player.bulletBtn, 'danmu-switch-active')) {
            danmujs.stop()
            danmujs.start()
          }
        })
      }
      player.danmu = danmujs
      if (!player.config.danmu.panel) {
        return
      }
      let danmuConfig = player.config.danmu
      let slider = panelBtn.querySelector('.xgplayer-panel-slider')
      let focusStatus
      panelBtn.addEventListener('mouseenter', function (e) {
        e.preventDefault()
        e.stopPropagation()
        Player.util.addClass(player.root, 'xgplayer-panel-active')
        panelBtn.focus()
        focusStatus = true
      })
      let focusarray = ['touchend', 'click']
      focusarray.forEach(item => {
        panelBtn.addEventListener(item, function (e) {
          e.preventDefault()
          e.stopPropagation()
          Player.util.addClass(player.root, 'xgplayer-panel-active')
          panelBtn.focus()
          focusStatus = true
        })
      })
      panelBtn.addEventListener('mouseleave', function (e) {
        e.preventDefault()
        e.stopPropagation()
        Player.util.removeClass(player.root, 'xgplayer-panel-active')
        focusStatus = false
      })
      slider.addEventListener('mouseleave', function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (focusStatus === false) {
          Player.util.removeClass(player.root, 'xgplayer-panel-active')
        }
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
              hidemodeArray[keys].style.color = '#ed1e79'
              hidemodeArray[keys].setAttribute('id', 'true')
              player.danmu.hide(keys)
            } else {
              hidemodeArray[keys].style.color = '#eee'
              hidemodeArray[keys].setAttribute('id', 'false')
              player.danmu.show(keys)
            }
          })
        })
      }
      let transparency = document.querySelector('.xgplayer-transparency-line')
      let transparencyGradient = document.querySelector('.xgplayer-transparency-gradient')
      let transparencyValue = 50
      transparencyGradient.style.background = 'linear-gradient(to right, #ed1e79 0%, #ed1e79 ' + transparencyValue + '%, #aaa ' + transparencyValue + '%, #aaa)'
      transparency.addEventListener('input', function (e) {
        e.preventDefault()
        e.stopPropagation()
        transparencyValue = e.target.value
        // TODO compatibility
        transparencyGradient.style.background = 'linear-gradient(to right, #ed1e79 0%, #ed1e79 ' + transparencyValue + '%, #aaa ' + transparencyValue + '%, #aaa)'
        danmuConfig.comments.forEach(item => {
          item.style.opacity = transparencyValue / 100
        })
      })
      let showarea = document.querySelector('.xgplayer-showarea-line')
      showarea.addEventListener('input', function (e) {
        e.preventDefault()
        e.stopPropagation()
        let showareaValue = e.target.value
        player.danmu.config.area.end = showareaValue / 100
        player.config.danmu.area.end = showareaValue / 100
        player.danmu.bulletBtn.main.channel.resize()
      })
      let danmuspeed = document.querySelector('.xgplayer-danmuspeed-line')
      danmuspeed.addEventListener('input', function (e) {
        e.preventDefault()
        e.stopPropagation()
        let danmuspeedValue = e.target.value
        danmuConfig.comments.forEach(item => {
          item.duration = (200 - danmuspeedValue) * 100
        })
      })
      let danmufont = document.querySelector('.xgplayer-danmufont-line')
      danmufont.addEventListener('input', function (e) {
        e.preventDefault()
        e.stopPropagation()
        let danmufontValue = e.target.value
        danmuConfig.comments.forEach(item => {
          item.style.fontSize = danmufontValue + 'px'
        })
      })
    })
  }
}

Player.install('danmu', danmu)
