const readableFileSize = (size) => {

    if (size < 999999) {
        return `${Math.round(size/1000)} KB`;
    } else if (size < 2000000) {
        return `${(size/1000000).toFixed(2)} MB`;
    } else {
        return "File is too large, please remove"
    }
}

export default readableFileSize;