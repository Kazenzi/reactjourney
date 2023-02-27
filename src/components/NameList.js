import React from 'react'

function NameList() {
    const names=["Jess","kaz","Bae","swish"]
    const nameList=names.map(name=><h2>{name}</h2>)
  return (
    <div>
        {
            nameList
        }
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        <h2>{names[3]}</h2> */}
    </div>
  )
}

export default NameList