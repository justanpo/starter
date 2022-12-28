// --------------------------- [[ Styles ]] ---------------------------

import '../styles/style.scss';

// --------------------------- [[ Scripts ]] --------------------------
import Vue from 'vue';
import Changelog from '../../components/changelog/changelog.vue';
import ThemeSwitcher from '../../components/theme-switcher/ThemeSwitcher.vue';

// Icons sprite
const svgModules = require.context('../img/icons/sprite', false, /\.svg$/);
svgModules.keys().forEach(svgModules);

// Base Vue component
new Vue({
  el: '#content-wrapper',
  components: {
    Changelog,
    ThemeSwitcher,
  },
});
