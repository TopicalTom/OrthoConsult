const readableFileSize = (size) => {

    if (size < 999999) {
        return `${Math.round(size/1000)} KB`;
    } else if (size < 9999999) {
        return `${(size/1000000).toFixed(2)} MB`;
    } else {
        return `${(size/1000000000).toFixed(2)} GB`;
    }
}

export default readableFileSize;