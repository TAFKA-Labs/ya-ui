import 'styled-components'
import { Colors } from '../components/types'

interface Formats {
  [key: string]: any
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: Colors
    spacings: number[]
    formats: Formats
    typography: any
  }
}
