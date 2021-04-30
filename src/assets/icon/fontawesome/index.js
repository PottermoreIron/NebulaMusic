import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandSpock,faListAlt,faBell,faVideo } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
import {  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
    faHandSpock,
    faListAlt,
    faBell,
    faVideo

)
Vue.component('font-awesome-icon', FontAwesomeIcon);
