import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  max-width: 33rem;
  margin: 0 auto 1rem;
  font-size: 1rem;
  text-align: center;

  ${(props) => props.theme.mq.small} {
    margin-bottom: 1rem;
  }
`
export default function Description(props) {
  const boldString = (str, substr) => str.replaceAll(substr, `<b>${substr}</b>`)
  return (
    props.description && (
      <Wrapper>
        {props.description && props.descriptionKeyword ? (
          <span
            dangerouslySetInnerHTML={{
              __html: boldString(props.description, props.descriptionKeyword),
            }}
          ></span>
        ) : (
          props.description
        )}
      </Wrapper>
    )
  )
}
