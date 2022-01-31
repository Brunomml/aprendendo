import Link from "next/link"

function home(){
    return (
        <div>
            <h1>Home</h1>
            <Link  href="/Sobre">
                <a>ir para a pagina sobre</a>
            </Link>
            <Link href="/Tempo">
                <a>ir para a pagina do tempo</a>
            </Link>
        </div>
    )
}

export default home