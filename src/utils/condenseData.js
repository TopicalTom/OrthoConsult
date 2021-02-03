const condenseData = (data) => {
    const condensed = Object.keys(data).filter((key) => data[key]).toString();
    const splitData = condensed.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(" ");
    const splitItems = splitData.split(",").join(", ")
    return splitItems
}
    
export default condenseData;