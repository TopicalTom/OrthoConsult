const condenseData = (data) => {
    const condensed = Object.keys(data).filter((key) => data[key]).toString();
    return condensed
}
    
export default condenseData;