import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'

type ScrollProps = {
  showBelow?: number
}

const Scroll: React.FC<ScrollProps> = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    showBelow && window.pageYOffset > showBelow ? setShow(true) : setShow(false)
  }

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      {show && (
        <IconButton
          onClick={handleClick}
          sx={[
            {
              zIndex: 2,
              position: 'fixed',
              bottom: '2vh',
              backgroundColor: 'rgba(220, 220, 220, 0.4)',
              color: 'black',
              right: 2,
            },
            () => ({
              '&:hover': {
                transition: '0.3s',
                color: '#397BA6',
                backgroundColor: '#DCDCDC',
              },
            }),
          ]}
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </>
  )
}
export default Scroll
