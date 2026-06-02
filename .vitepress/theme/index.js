import DefaultTheme from 'vitepress/theme'
import './style.css'

import ConfigGroup from '../components/config/ConfigGroup.vue'
import ConfigProperty from '../components/config/ConfigProperty.vue'

import BaseTable from '../components/table/BaseTable.vue'
import CommandRow from '../components/table/CommandRow.vue'
import PermCommandRow from '../components/table/PermCommandRow.vue'
import OtherPermRow from '../components/table/OtherPermRow.vue'

import CardGrid from '../components/card/CardGrid.vue'
import DocCard from '../components/card/DocCard.vue'
import FeatureCard from '../components/card/FeatureCard.vue'

export default {
    extends: DefaultTheme,

    enhanceApp({ app }) {
        app.component('ConfigGroup', ConfigGroup)
        app.component('ConfigProperty', ConfigProperty)

        app.component('BaseTable', BaseTable)
        app.component('CommandRow', CommandRow)
        app.component('PermCommandRow', PermCommandRow)
        app.component('OtherPermRow', OtherPermRow)

        app.component('CardGrid', CardGrid)
        app.component('DocCard', DocCard)
        app.component('FeatureCard', FeatureCard)
    }
}