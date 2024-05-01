import type { Preview } from '@storybook/vue3'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import '../src/assets/main.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    () => ({
      template: `
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  <div id="app"> <story /></div>
  `,
    }),
  ],
}

export default preview
