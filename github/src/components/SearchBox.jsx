import React, { useState } from 'react'

export default function SearchBox({handelClick}) {
    const [text, setText] = useState("")
  return (
    <div>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} name="" id="" />
        <button onClick={()=> handelClick(text)}>Search</button>
    </div>
  )
}
