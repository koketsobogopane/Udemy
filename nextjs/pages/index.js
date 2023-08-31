import  Link from 'next/link'

export default function HomePage() {
  return (
    <div>
        <h1>HomePage</h1>
        <ul>
            <li><Link href="/about">AboutLink</Link></li>
            <li><Link href="/clients">ClientsLink</Link></li>
            <li><Link href="/portfolio">portfolioLink</Link></li>
        </ul>
        </div>
    
  )
}
