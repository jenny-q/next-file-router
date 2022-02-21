import Link from 'next/link'

function ClientPage() {
    const clients = [
        {id:'samsung', name:'samsung electronics'},
        {id:'apple', name:'apple'}
    ];
    console.log(clients)
    return (
        <main>
            <h1>projects of client</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        {/* <Link href = {`/clients/${client.id}`}>{client.name}</Link> */}
                        <Link href = {{
                            pathname: 'clients/[id]'
                        }}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </main>

    )
}

export default ClientPage;