import { setupConfig } from './base/config'
import { setupHistory } from './base/history'
import { setupPlatform } from './base/platform'
// Core
import { App, Footer, Header } from './components/app'
import { Content } from './components/content'
import { Nav } from './components/nav'
import { Page } from './components/page'
// polyfill
import './util/polyfill'
/**
 * @name initVimo
 * @description Vimo框架安装
 */
const VERSION = '0.3.7'
export default {
  installed: false,
  version: VERSION,
  install (Vue, options = {}) {
    if (this.installed) return
    window.VM = {
      version: VERSION
    }
    // 全局事件总线（各个组件共用）中央事件总线
    Vue.prototype.$eventBus = new Vue()

    // init base (config/platform/history)
    const platform = setupPlatform(options.pltConf)
    const config = setupConfig(options.custConf, platform)
    const history = setupHistory(Vue, options.router)

    Vue.prototype.$config = config
    Vue.prototype.$platform = platform
    Vue.prototype.$history = history // 监听route变化, 内建历史记录

    // 全局注册的组件(核心组件)
    Vue.component(App.name, App)
    Vue.component(Nav.name, Nav)
    Vue.component(Page.name, Page)
    Vue.component(Header.name, Header)
    Vue.component(Content.name, Content)
    Vue.component(Footer.name, Footer)

    // add logo
    addLogo(VERSION, Vue.version)
    this.installed = true
  }
}
/* eslint-disable operator-linebreak */
function addLogo (vimoVer, vueVer) {
  // logo
  var vimoLogo = {
    info: '源代码请访问GitHub https://github.com/DTFE/Vimo \nPowered by Vue' + vueVer,
    logo: '\n'
    + '  __      __ _____ __  __  ____   \n'
    + '  \\ \\    / /|_   _|  \\/  |/ __ \\  \n'
    + '   \\ \\  / /   | | | \\  / | |  | | \n'
    + '    \\ \\/ /    | | | |\\/| | |  | | \n'
    + '     \\  /    _| |_| |  | | |__| | \n'
    + '      \\/    |_____|_|  |_|\\____/  v' + vimoVer
  }
  window.console && console.info && console.info(vimoLogo.logo + '\n' + vimoLogo.info)
}
