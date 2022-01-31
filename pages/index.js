function Home(){
    let num = 0
    return (
        <div>
            <div>{num}</div>
            <button onClick={num++}>adicionar</button>
        </div>
    )
}

export default Home