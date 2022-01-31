function Tempo() {
    const dynamicDate = new date()
    const dynamicDateString = dynamicDate.toGMTString()

    return (
        <div>
            <div>{dynamicDateString}(dinamico)</div>
        </div>
    )
}

export default Tempo