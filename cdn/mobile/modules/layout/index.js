import Home from './Home'
import User from './User'

import Vue from 'vue'


let layout = {Home, User}


// 安装
Object.keys(layout).forEach(name => Vue.component(`layout${name}`, layout[name]))