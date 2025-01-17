import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`
const Label = styled.label`
  color: ${(props) => props.theme.colors[props.error ? 'error' : 'text']};
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`
const Input = styled.input`
  background-color: transparent;
  border: 0.125rem solid
    ${(props) => props.theme.colors[props.error ? 'error' : 'main']};
  border-radius: 0.625em;
  color: ${(props) => props.theme.colors.text};
  padding: 0.5em 1em;
  transition: box-shadow 300ms ease-out;
  width: 100%;

  &:focus {
    box-shadow: 0 -0 0px 1px ${(props) => props.theme.colors.main};
    outline: none;
  }
`
export default function TextInput(props) {
  return (
    <Wrapper className={props.className}>
      {props.label && (
        <Label htmlFor={props.name} error={props.error}>
          {props.label}
        </Label>
      )}
      <Input
        type={props.type || 'text'}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        value={props.value}
        error={props.error}
        onChange={(e) => {
          props.onChange({ value: e.currentTarget.value, name: props.name })
        }}
      />
    </Wrapper>
  )
}
