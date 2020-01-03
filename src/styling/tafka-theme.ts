import { css, DefaultTheme } from 'styled-components'
import colors from './colors'

const defaultTheme: DefaultTheme = {
  name: 'default',
  colors: colors,
  spacings: [0.2, 0.5, 1.0, 1.33, 1.8, 2.5],
  typography: {
    fontSizes: [0.85, 1.0, 1.2],
    default: css`
      font-family: Roboto, sans-serif;
    `,
    heading: css`
      font-family: Roboto Slab, sans-serif;
      font-weight: normal;
      letter-spacing: 1px;
    `,
    button: css`
      font-family: Roboto, sans-serif;
      font-weight: bolder;
      text-transform: uppercase;
      letter-spacing: 2px;
    `,
    label: css`
      font-family: Roboto Slab, sans-serif;
      font-weight: lighter;
      font-size: 13px;
      line-height: 1.4;
      letter-spacing: 0.5px;
    `,
  },
  formats: {
    defaultBorder: css`
      border-style: solid;
      border-width: 2px;
      border-radius: 4px;
      border-color: currentcolor;
    `,
    defaultCard: css`
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 3px 6px 3px rgba(31, 38, 97, 0.2),
        0 1px 3px 2px rgba(31, 38, 97, 0.1);
    `,
  },
}

export default defaultTheme
