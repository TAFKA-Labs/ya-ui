import Variant from './variant'
import Size from './size'

enum Shade {
  Default = 'default',
  Disabled = 'disabled',
  Hover = 'hover',
  Background = 'background',
  Shadow = 'shadow',
}

type Palette = {
  [key in Shade]: string
}

type Colors = {
  [key in Variant]: Palette
}

export { Colors, Variant, Size }
