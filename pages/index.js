function Home(props){
    return (
        <div>
            <div>{props.num}</div>
            <button onClick={props.num++}>adicionar</button>
        </div>
    )
}

export function getStaticProps() {
    let num = 0
    return {
        props: {
            num
        },
        revalidate: 1
    }
}

export default Home