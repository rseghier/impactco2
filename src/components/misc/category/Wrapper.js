import React, { useState } from 'react'
import styled from 'styled-components'

import useScreenshot from 'hooks/useScreenshot'
import Background from 'components/screenshot/Background'
import Buttons from 'components/screenshot/Buttons'
import Signature from 'components/screenshot/Signature'

const SizerWrapper = styled.div``
const Sizer = styled.div`
  position: relative;
  margin: -1.5rem;

  ${(props) => props.theme.mq.medium} {
    margin: -0.75rem;
  }
`
const Content = styled.div`
  background-color: ${(props) =>
    props.hover ? props.theme.colors.background : 'transparent'};
`
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: normal;
  font-size: 150%;
`
const StyledButtons = styled(Buttons)`
  margin: -1rem 0 0.5rem;

  ${(props) => props.theme.mq.small} {
    margin-top: 0;
  }
`
export default function Wrapper(props) {
  const [hover, setHover] = useState(false)

  const { ref, takeScreenshot, isScreenshotting } = useScreenshot(
    props.slug || 'impactco2'
  )

  const boldString = (str, substr) => str.replaceAll(substr, `<b>${substr}</b>`)

  return (
    <SizerWrapper>
      <Sizer className={props.className}>
        <Content ref={ref} hover={hover}>
          <Background hover={hover}>
            <Header>
              <StyledButtons
                takeScreenshot={takeScreenshot}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                slug={`${props.slug}`}
              />
              <Title>
                {' '}
                {props.description && props.descriptionKeyword ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: boldString(
                        props.description,
                        props.descriptionKeyword
                      ),
                    }}
                  ></span>
                ) : (
                  props.description
                )}
              </Title>
            </Header>
            {props.children}
          </Background>
          {isScreenshotting && <Signature />}
        </Content>
      </Sizer>
    </SizerWrapper>
  )
}
