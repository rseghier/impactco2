import React from 'react'
import styled from 'styled-components'

import Select from 'components/base/Select'
import Code from './configurator/Code'

const Wrapper = styled.div`
  width: 19rem;
  margin-right: 1.5rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.second};
  border-radius: 1rem;
`
const Title = styled.h1`
  font-size: 2rem;
`
const Options = styled.div``
export default function Configurator(props) {
  return (
    <Wrapper>
      <Title>Configurez votre iframe</Title>
      <Select
        onChange={() => ''}
        label={`1) Choisissez le type d'iframe que vous souhaitez intégrer`}
        name='type'
      >
        <option>Tuiles</option>
        <option disabled>Fiche équivalent</option>
        <option disabled>Catégorie</option>
      </Select>
      <Select
        onChange={({ value }) => props.setTheme(value)}
        label={`2) Choisissez la palette de couleurs de votre iframe`}
        name='theme'
      >
        <option value='default'>Clair</option>
        <option value='night'>Sombre</option>
      </Select>
      <Code theme={props.theme} />
    </Wrapper>
  )
}
