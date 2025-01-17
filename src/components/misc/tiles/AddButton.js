import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'components/providers/ModalProvider'

const Wrapper = styled.button`
  align-items: center;
  background-color: ${(props) => props.theme.colors.main};
  border: none;
  border-radius: 1rem;
  color: ${(props) => props.theme.colors.background};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  width: calc(33.3333% - 1rem);

  &:hover h4,
  &:focus h4 {
    transform: scale(1.2);
  }

  ${(props) => props.theme.mq.medium} {
    width: calc(33.3333% - 0.5rem);
  }
  ${(props) => props.theme.mq.small} {
    width: calc(50% - 0.375rem);
  }
`
const Title = styled.div`
  font-size: 5rem;
  height: 5rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  transition: transform 300ms ease-out;
`
const Text = styled.p`
  font-size: 0.875rem;
  max-width: 8rem;
  text-align: center;
`
export default function AddButton() {
  const { setTiles } = useContext(ModalContext)

  return (
    <Wrapper onClick={() => setTiles(true)}>
      <Title>+</Title>
      <Text>Ajouter un équivalent</Text>
    </Wrapper>
  )
}
