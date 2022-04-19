import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  overflow: hidden;

  ${(props) => props.theme.mq.small} {
    height: 2rem;
  }
`
const Item = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`
export default function Graph(props) {
  return (
    <Wrapper>
      {props.equivalent.ecv.map((item) => (
        <Item
          key={item.id}
          color={props.ecv.find((step) => step.id === item.id)?.color}
          width={(item.value / props.equivalent.total) * 100}
          onMouseEnter={() => props.setHover(item.id)}
          onMouseLeave={() => props.setHover(null)}
        />
      ))}
    </Wrapper>
  )
}
