import React from 'react'

export default function TopBlock({mainHeading='',subHeading=''}) {
  return (
    <div className="text-center">
    <p className="welcom-txt">{mainHeading}</p>
    <p>{subHeading}</p>
</div>
  )
}
