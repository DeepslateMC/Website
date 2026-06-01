import DefaultTheme from 'vitepress/theme'
import './style.css'

import ConfigGroup from '../components/config/ConfigGroup.vue'
import ConfigProperty from '../components/config/ConfigProperty.vue'

export default {
    extends: DefaultTheme,

    enhanceApp({ app }) {
        app.component('ConfigGroup', ConfigGroup)
        app.component('ConfigProperty', ConfigProperty)
    }
}