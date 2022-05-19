

import React from 'react'

export default function GithubCard({avatar_url, login}) {
  return (
    <div style={{display:"flex", gap:"2rem"}}>
        <img src={avatar_url} width="50px" alt={login}/>
        <div>{login}</div>
    </div>
  )
}
