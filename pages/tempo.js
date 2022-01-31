function Tempo() {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <div>{dynamicDateString}(dinamico)</div>
        </div>
    )
}

export default Tempo