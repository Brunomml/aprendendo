import Link from "next/link"

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>ir para a pagina sobre</a>
            </Link>
            <br />
            <Link href="/tempo">
                <a>ir para a pagina do tempo</a>
            </Link>
        </div>
    )
}

export default Home