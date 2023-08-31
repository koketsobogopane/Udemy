import React from 'react'
import Link from 'next/link'

export default function ClientsPage() {
  return (
    <div>
      <h1>Clients Project Page</h1>
      <ul>
        <li><Link href='/clients/max'>Maximilian</Link></li>
        <li><Link href='/clients/manu'>Manuel</Link></li>
      </ul>
      </div>
  )
}
