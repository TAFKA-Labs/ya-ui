import {
  ChoiceGroup,
  ChoiceGroupProps as cgprops,
  ChoiceOption,
  ChoiceOptionProps as coprops,
} from './CoreChoice'
import { Input, InputContainer } from './CoreInput'
import { FileInput, FileInputProps as fiprops } from './FileInput'
import { TextArea, TextAreaProps as taprops } from './TextArea'
import { TextInput, TextInputProps as tiprops } from './TextInput'
import { InputLabel, InputError } from './labels'

export {
  ChoiceGroup,
  ChoiceOption,
  Input,
  InputContainer,
  FileInput,
  TextArea,
  TextInput,
  InputLabel,
  InputError,
}
export type ChoiceGroupProps = cgprops
export type ChoiceOptionProps = coprops
export type FileInputProps = fiprops
export type TextAreaProps = taprops
export type TextInputProps = tiprops
