import React, { useContext } from 'react'
import styled from 'styled-components'

import UXContext from 'utils/UXContext'
import ShareWrapper from 'components/wrappers/ShareWrapper'
import EmbedWrapper from 'components/wrappers/EmbedWrapper'
import ContactWrapper from 'components/wrappers/ContactWrapper'
import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  display: none;
  justify-content: space-around;
  width: 100%;
  max-width: 37rem;
  margin: 0 auto ${(props) => (props.iframe ? 0.5 : 2)}rem;
  padding: ${(props) => (props.iframe ? '1rem 0 0.5rem' : 0)};
  background-color: ${(props) => props.theme.colors.textLight};
  border-radius: 1rem;

  ${(props) => props.theme.mq.medium} {
    display: flex;
  }
`
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.main};
  background: none;
  border: none;
`
const StyledLink = styled(MagicLink)`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.colors.main};
  text-decoration: none;
`
const Icon = styled.div`
  position: relative;
  width: ${(props) => (props.iframe ? 2 : 3)}rem;
  height: ${(props) => (props.iframe ? 2 : 3)}rem;
  margin-bottom: ${(props) => (props.iframe ? 0.2 : 0.4)}rem;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 1.5rem;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;

    path {
      fill: ${(props) => props.theme.colors.background};
    }
  }
`
const Mail = styled.svg`
  width: ${(props) => (props.iframe ? 1.25 : 1.5)}rem;
`
const Embed = styled.svg`
  width: ${(props) => (props.iframe ? 1.5 : 1.75)}rem;
`
const Share = styled.svg`
  width: ${(props) => (props.iframe ? 1.25 : 1.5)}rem;
`
const Eye = styled.svg`
  width: ${(props) => (props.iframe ? 1.25 : 1.5)}rem;
`
const Install = styled.svg``
const Label = styled.div`
  font-size: ${(props) => (props.iframe ? 0.75 : 1)}rem;
  text-align: center;
`
export default function MobileButtons(props) {
  const { setEmbedOpen, setShareOpen, setContactOpen, installPrompt } =
    useContext(UXContext)
  return (
    <>
      <Wrapper iframe={props.iframe}>
        <Button onClick={() => setEmbedOpen(true)}>
          <Icon iframe={props.iframe}>
            <Embed
              iframe={props.iframe}
              x='0px'
              y='0px'
              width='94.504px'
              height='94.504px'
              viewBox='0 0 94.504 94.504'
            >
              <path d='M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828    l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587    c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z' />
              <path d='M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414    l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833    c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229    C33.542,66.771,33.542,65.505,32.759,64.724z' />
              <path d='M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382    c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083    c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z' />
            </Embed>
          </Icon>
          <Label iframe={props.iframe}>Intégrer</Label>
        </Button>
        <Button onClick={() => setShareOpen(true)}>
          <Icon iframe={props.iframe}>
            <Share
              iframe={props.iframe}
              height='512pt'
              viewBox='-21 0 512 512'
              width='512pt'
            >
              <path d='m453.332031 85.332031c0 38.292969-31.039062 69.335938-69.332031 69.335938s-69.332031-31.042969-69.332031-69.335938c0-38.289062 31.039062-69.332031 69.332031-69.332031s69.332031 31.042969 69.332031 69.332031zm0 0' />
              <path d='m384 170.667969c-47.0625 0-85.332031-38.273438-85.332031-85.335938 0-47.058593 38.269531-85.332031 85.332031-85.332031s85.332031 38.273438 85.332031 85.332031c0 47.0625-38.269531 85.335938-85.332031 85.335938zm0-138.667969c-29.417969 0-53.332031 23.9375-53.332031 53.332031 0 29.398438 23.914062 53.335938 53.332031 53.335938s53.332031-23.9375 53.332031-53.335938c0-29.394531-23.914062-53.332031-53.332031-53.332031zm0 0' />
              <path d='m453.332031 426.667969c0 38.289062-31.039062 69.332031-69.332031 69.332031s-69.332031-31.042969-69.332031-69.332031c0-38.292969 31.039062-69.335938 69.332031-69.335938s69.332031 31.042969 69.332031 69.335938zm0 0' />
              <path d='m384 512c-47.0625 0-85.332031-38.273438-85.332031-85.332031 0-47.0625 38.269531-85.335938 85.332031-85.335938s85.332031 38.273438 85.332031 85.335938c0 47.058593-38.269531 85.332031-85.332031 85.332031zm0-138.667969c-29.417969 0-53.332031 23.9375-53.332031 53.335938 0 29.394531 23.914062 53.332031 53.332031 53.332031s53.332031-23.9375 53.332031-53.332031c0-29.398438-23.914062-53.335938-53.332031-53.335938zm0 0' />
              <path d='m154.667969 256c0 38.292969-31.042969 69.332031-69.335938 69.332031-38.289062 0-69.332031-31.039062-69.332031-69.332031s31.042969-69.332031 69.332031-69.332031c38.292969 0 69.335938 31.039062 69.335938 69.332031zm0 0' />
              <path d='m85.332031 341.332031c-47.058593 0-85.332031-38.269531-85.332031-85.332031s38.273438-85.332031 85.332031-85.332031c47.0625 0 85.335938 38.269531 85.335938 85.332031s-38.273438 85.332031-85.335938 85.332031zm0-138.664062c-29.417969 0-53.332031 23.933593-53.332031 53.332031s23.914062 53.332031 53.332031 53.332031c29.421875 0 53.335938-23.933593 53.335938-53.332031s-23.914063-53.332031-53.335938-53.332031zm0 0' />
              <path d='m135.703125 245.761719c-7.425781 0-14.636719-3.863281-18.5625-10.773438-5.824219-10.21875-2.238281-23.253906 7.980469-29.101562l197.949218-112.851563c10.21875-5.867187 23.253907-2.28125 29.101563 7.976563 5.824219 10.21875 2.238281 23.253906-7.980469 29.101562l-197.953125 112.851563c-3.328125 1.898437-6.953125 2.796875-10.535156 2.796875zm0 0' />
              <path d='m333.632812 421.761719c-3.585937 0-7.210937-.898438-10.539062-2.796875l-197.953125-112.851563c-10.21875-5.824219-13.800781-18.859375-7.976563-29.101562 5.800782-10.238281 18.855469-13.84375 29.097657-7.976563l197.953125 112.851563c10.21875 5.824219 13.800781 18.859375 7.976562 29.101562-3.945312 6.910157-11.15625 10.773438-18.558594 10.773438zm0 0' />
            </Share>
          </Icon>
          <Label iframe={props.iframe}>Partager</Label>
        </Button>
        {installPrompt && (
          <Button onClick={() => installPrompt.prompt()}>
            <Icon iframe={props.iframe}>
              <Install
                iframe={props.iframe}
                x='0px'
                y='0px'
                viewBox='0 0 512 512'
              >
                <path
                  d='M339.093,246.464c-3.627-7.232-11.008-11.797-19.093-11.797h-42.667V21.333C277.333,9.557,267.797,0,256,0
			s-21.333,9.557-21.333,21.333v213.333H192c-8.085,0-15.467,4.565-19.093,11.797c-3.584,7.232-2.816,15.872,2.027,22.336l64,85.333
			c0.277,0.363,0.704,0.491,1.003,0.832c1.408,1.664,3.072,2.944,4.928,4.117c0.768,0.469,1.365,1.088,2.197,1.472
			c2.731,1.28,5.717,2.112,8.939,2.112s6.208-0.832,8.96-2.112c0.811-0.384,1.429-1.003,2.176-1.472
			c1.856-1.173,3.52-2.453,4.928-4.117c0.277-0.341,0.725-0.469,1.003-0.832l64-85.333
			C341.931,262.336,342.699,253.696,339.093,246.464z'
                />
                <path
                  d='M490.667,320c-11.797,0-21.333,9.557-21.333,21.333v64c0,35.285-28.715,64-64,64H106.667c-35.285,0-64-28.715-64-64v-64
			c0-11.776-9.536-21.333-21.333-21.333C9.536,320,0,329.557,0,341.333v64C0,464.149,47.851,512,106.667,512h298.667
			C464.149,512,512,464.149,512,405.333v-64C512,329.557,502.464,320,490.667,320z'
                />
              </Install>
            </Icon>
            <Label iframe={props.iframe}>Installer</Label>
          </Button>
        )}
        <Button onClick={() => setContactOpen(true)}>
          <Icon iframe={props.iframe}>
            <Mail iframe={props.iframe} x='0px' y='0px' viewBox='0 0 512 512'>
              <path
                d='M467,61H45C20.218,61,0,81.196,0,106v300c0,24.72,20.128,45,45,45h422c24.72,0,45-20.128,45-45V106
			C512,81.28,491.872,61,467,61z M460.786,91L256.954,294.833L51.359,91H460.786z M30,399.788V112.069l144.479,143.24L30,399.788z
			 M51.213,421l144.57-144.57l50.657,50.222c5.864,5.814,15.327,5.795,21.167-0.046L317,277.213L460.787,421H51.213z M482,399.787
			L338.213,256L482,112.212V399.787z'
              />
            </Mail>
          </Icon>
          <Label iframe={props.iframe}>Contact</Label>
        </Button>
        {props.iframe && (
          <StyledLink to={'https://monconvertisseurco2.fr'}>
            <Icon iframe={props.iframe}>
              <Eye
                iframe={props.iframe}
                x='0px'
                y='0px'
                viewBox='0 0 469.333 469.333'
              >
                <path d='M234.667,170.667c-35.307,0-64,28.693-64,64s28.693,64,64,64s64-28.693,64-64S269.973,170.667,234.667,170.667z' />
                <path d='M234.667,74.667C128,74.667,36.907,141.013,0,234.667c36.907,93.653,128,160,234.667,160     c106.773,0,197.76-66.347,234.667-160C432.427,141.013,341.44,74.667,234.667,74.667z M234.667,341.333     c-58.88,0-106.667-47.787-106.667-106.667S175.787,128,234.667,128s106.667,47.787,106.667,106.667     S293.547,341.333,234.667,341.333z' />
              </Eye>
            </Icon>
            <Label iframe={props.iframe}>
              Version
              <br />
              détaillée
            </Label>
          </StyledLink>
        )}
      </Wrapper>
      <EmbedWrapper small />
      <ShareWrapper small />
      <ContactWrapper small />
    </>
  )
}