function Tempo(props) {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <div>{dynamicDateString}(dinamico)</div>
            <div>{props.frase}</div>
        </div>
    )
}

export function frase() {
    return {
        props:{
            frase:"eae"
        }
    }
}

export default Tempo