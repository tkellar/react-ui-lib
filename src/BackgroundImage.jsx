import React from 'react'

const BackgroundImage = (props) => {
  const { children, imgSrc, style, fullScreen, overlayStyle } = props

  const styles = {
    backgroundImage: `url(${imgSrc})`,
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    ...style
  }

  if (fullScreen) {
    styles.height = '100vh'
    styles.width = '100vw'
  }

  return (
    <div className='BackgroundImage' style={styles} imgSrc={imgSrc}>
      <div style={{ height: '100%', width: '100%', ...overlayStyle }}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundImage
