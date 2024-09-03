import React from 'react'

function Container({children}) {
    console.log(children)
  return (
    <div>
        <div>Container</div>
        {children}
    </div>
    
  )
}

export default Container