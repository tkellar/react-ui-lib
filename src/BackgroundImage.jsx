import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-repeat: none;
  background-size: cover;
`
const Overlay = styled.div`
  height: 100%;
  width: 100%;
`

const BackgroundImage = (props) => {
  const { children, imgSrc, style, fullScreen, overlayStyle } = props

  let styles = style
  if (fullScreen) {
    styles = { ...style, height: '100vh', width: '100vw' }
  }

  return (
    <Div className='BackgroundImage' style={styles} imgSrc={imgSrc}>
      <Overlay style={overlayStyle}>{children}</Overlay>
    </Div>
  )
}

export default BackgroundImage
