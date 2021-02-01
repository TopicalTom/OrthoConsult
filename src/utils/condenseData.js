const condenseData = (data) => {
    const condensed = Object.keys(data).filter((key) => data[key]).toString();

    console.log(data)
    console.log(condensed)
    return condensed
}
    
export default condenseData;