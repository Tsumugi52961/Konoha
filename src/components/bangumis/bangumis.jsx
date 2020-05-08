import React, { useEffect, useState } from 'react'
import { getBangumis } from '@/api/bangumi'

export default function Bangumis () {
  const [bangumis, setBangumis] = useState([])

  useEffect(() => {
    getBangumis().then(res => {
      setBangumis(res.data)
    }).catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="bangumis">
      { bangumis.map(bangumi => <Bangumi { ...bangumi } key={ bangumi.id }/>) }
    </div>
  )
}

function Bangumi (props) {
  return (
    <div className="bangumi-container">
      <span>{ new Date(props.published_at_timestamp * 1000).toISOString() }</span>
      <span>{ props.title }</span>
      <span>
        <a href={ props.link } target="_blank" rel="noopener noreferrer">Link</a>
      </span>
    </div>
  )
}
