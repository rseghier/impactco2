import React from 'react'
import styled from 'styled-components'

import Emoji from 'components/base/Emoji'

const Title = styled.h3`
  font-weight: normal;
  margin-bottom: 1rem;
  text-align: center;
`
const Sizes = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2.5rem;

  ${(props) => props.theme.mq.small} {
    flex-direction: column;
    gap: 2vw;
  }
`
const Size = styled.p`
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 50rem;
  color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.small ? 10 : props.large ? 13.375 : 12)}rem;
  justify-content: center;
  margin: 0;
  width: ${(props) => (props.small ? 10 : props.large ? 13.375 : 12)}rem;

  ${(props) => props.theme.mq.medium} {
    height: ${(props) => (props.small ? 20 : props.large ? 28 : 24)}vw;
    width: ${(props) => (props.small ? 20 : props.large ? 28 : 24)}vw;
  }
  ${(props) => props.theme.mq.small} {
    height: ${(props) => (props.small ? 30 : props.large ? 40 : 35)}vw;
    width: ${(props) => (props.small ? 30 : props.large ? 40 : 35)}vw;
  }
`
const StyledEmoji = styled(Emoji)`
  align-items: flex-end;
  display: flex;
  font-size: ${(props) => (props.small ? 2 : props.large ? 4 : 3)}rem;
  height: 2.5rem;
  margin-bottom: 0.5rem;

  ${(props) => props.theme.mq.medium} {
    font-size: ${(props) => (props.small ? 3 : props.large ? 5 : 4)}vw;
  }
  ${(props) => props.theme.mq.small} {
    font-size: ${(props) => (props.small ? 5 : props.large ? 7 : 6)}vw;
    height: auto;
  }
`
const Label = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  ${(props) => props.theme.mq.medium} {
    font-size: 2vw;
  }
  ${(props) => props.theme.mq.medium} {
    font-size: 3.5vw;
  }
`
const Number = styled.span`
  display: block;
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 1;

  ${(props) => props.theme.mq.medium} {
    font-size: 4vw;
  }
  ${(props) => props.theme.mq.medium} {
    font-size: 7vw;
  }
`
const Unit = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 300;

  ${(props) => props.theme.mq.medium} {
    font-size: 1.5vw;
  }
  ${(props) => props.theme.mq.medium} {
    font-size: 2.5vw;
  }
`
export default function Smartphone() {
  return (
    <>
      <Title>Impact de la taille de l’écran</Title>
      <Sizes>
        <Size small>
          <StyledEmoji small>📱</StyledEmoji>
          <Label>- de 4,5 pouces</Label>
          <Number>22</Number>
          <Unit>kg CO2e</Unit>
        </Size>
        <Size>
          <StyledEmoji>📱</StyledEmoji>
          <Label>5 pouces</Label>
          <Number>26</Number>
          <Unit>kg CO2e</Unit>
        </Size>
        <Size large>
          <StyledEmoji large>📱</StyledEmoji>
          <Label>+ de 5,5 pouces</Label>
          <Number>31</Number>
          <Unit>kg CO2e</Unit>
        </Size>
      </Sizes>
    </>
  )
}
