import React, { useContext } from 'react'
import styled from 'styled-components'

import HorizontalRadio from 'components/base/HorizontalRadio'
import RulesContext from 'components/numerique/RulesProvider'
import SliderWrapper from 'components/numerique/misc/SliderWrapper'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
export default function DeviceInput(props) {
  const { engine, setSituation } = useContext(RulesContext)

  return (
    <Wrapper>
      <SliderWrapper>
        <SliderWrapper.Label>Type de réseau</SliderWrapper.Label>
        <HorizontalRadio
          name='network'
          value={`'${
            engine.evaluate(props.name + ' . transmission . réseau').nodeValue
          }'`}
          onChange={(value) =>
            setSituation({ [props.name + ' . transmission . réseau']: value })
          }
          options={[
            {
              value: `'fixe FR'`,
              label: `Wifi`,
            },
            {
              value: `'mobile FR'`,
              label: `4G`,
            },
          ]}
        />
      </SliderWrapper>
    </Wrapper>
  )
}
