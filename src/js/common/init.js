import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import '../../css/element-ui/element-css.css';

import { mqAjax } from "@/js/common/axios";
Vue.prototype.$http = mqAjax;
