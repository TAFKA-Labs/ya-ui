import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { addParameters } from '@storybook/react'
import 'normalize.css'

import tafkaTheme from '@styling/tafka-theme'

addParameters({
  backgrounds: [
    { name: 'default', value: '#fff', default: true },
    { name: 'brand', value: '#4754b8' },
  ],
})

addDecorator(withKnobs)
addDecorator(withA11y)
addDecorator(story => (
  <ThemeProvider theme={tafkaTheme}>{story()}</ThemeProvider>
))

// automatically import all files ending in *.stories.jsx
configure(require.context('../src', true, /\.stories\.tsx$/), module)
