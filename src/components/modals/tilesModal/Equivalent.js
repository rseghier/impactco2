import React from 'react'
import styled from 'styled-components'

import { formatName } from 'utils/formatters'

import Emoji from 'components/base/Emoji'

import Checkbox from './equivalent/Checkbox'

const Wrapper = styled.button`
  align-items: center;
  background-color: ${(props) =>
    props.theme.colors[props.checked ? 'mainLight' : 'background']};
  border: none;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  cursor: ${(props) => (props.disabled ? 'normal' : 'pointer')};
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  padding: 0.75rem 1.5rem 0.75rem 1rem;
  position: relative;
  transition: background-color 200ms ease-out;
  width: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainLight};
  }
`
const Label = styled.span`
  display: block;
  font-size: ${(props) => (props.small ? 0.875 : 1)}rem;
  line-height: 1.2;
  text-align: left;
`
const Subtitle = styled.span`
  font-weight: 300;
`
const Left = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
`
const StyledEmoji = styled(Emoji)`
  font-size: 1.25rem;
`
export default function Option(props) {
  return (
    <Wrapper
      checked={props.checked}
      onClick={() => props.setChecked(!props.checked)}
    >
      <Left>
        <Checkbox checked={props.checked} />

        <Label>
          {formatName(props.equivalent.name, 1, true)}{' '}
          {props.equivalent.subtitle && (
            <Subtitle>({formatName(props.equivalent.subtitle, 1)})</Subtitle>
          )}
        </Label>
      </Left>
      <StyledEmoji>{props.equivalent.emoji}</StyledEmoji>
    </Wrapper>
  )
}
