import React from 'react'
import styled from 'styled-components'

import NetworkInput from './emailInput/NetworkInput'
import RecipientInput from './emailInput/RecipientInput'
import SizeInput from './emailInput/SizeInput'
import TypingInput from './emailInput/TypingInput'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.second};
  border: 0.0625rem solid ${(props) => props.theme.colors.second};
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1.5rem;
`
export default function EmailInput(props) {
  return (
    <Wrapper>
      <SizeInput name={props.name} />
      <TypingInput name={props.name} />
      <RecipientInput name={props.name} />
      <NetworkInput name={props.name} />
    </Wrapper>
  )
}
