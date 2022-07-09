import { keyframes } from '@emotion/react'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import React from 'react'

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(20px);
    }
    60% {
        transform: translateY(10px);
    }
  `

const BounceArrow: React.FC = () => {
  return (
    <ArrowDownwardOutlinedIcon
      sx={{
        animation: `${bounce} 2s ease-out infinite`,
        fontSize: 30,
      }}
    />
  )
}

export default BounceArrow
