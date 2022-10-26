import React, { useMemo } from 'react'
import styled from 'styled-components'

import RadioInput from './horizontalRadio/RadioInput'

const Wrapper = styled.div`
  display: flex;
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.5rem;
  overflow: hidden;
`
export default function HorizontalRadio(props) {
  return (
    <Wrapper className={props.className}>
      {props.options.map((option) => (
        <RadioInput
          key={option.value}
          id={option.value}
          name={props.name}
          value={option.value}
          label={option.label}
          checked={option.value === props.value}
          onChange={(e) => {
            props.onChange(e.currentTarget.value)
          }}
        />
      ))}
    </Wrapper>
  )
}
