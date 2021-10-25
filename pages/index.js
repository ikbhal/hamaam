import Link from 'next/link'

export default function HomePage() {
    return <div>
            <h1>Hamaam</h1>
            <p> - record, track, remind , be clean</p>
            <Link href="/add_bath"><a>Add Bath</a></Link>
        </div>
}