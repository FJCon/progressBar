import './ProgressBar.css'
import React, { useState } from 'react'

const ProgressBar = () => {
    const [status, setStatus] = useState(0)
    
  return (
    <div className='container'>
        <div className='progress-bar'>
            <span className='porcentage'>{status}%</span>
        </div>
    </div>
  )
}

export default ProgressBar