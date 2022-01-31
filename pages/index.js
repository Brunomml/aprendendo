function Home(props){
    addEventListener('click', () => {
        props.num++
    })

    return (
        <div>
            <div>{props.num}</div>
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