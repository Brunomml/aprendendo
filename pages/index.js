function Home(props){
    return (
        <div>
            <div>{props.num}</div>
        </div>
    )
}

export function getStaticProps() {
    const num = 0
    return {
        props: {
            num
        }
    }
}

export default Home