import styled from 'styled-components'

const InputContainer = styled.div<{ gridArea?: string }>`
  grid-area: ${({ gridArea }) => gridArea};
`

export default InputContainer
