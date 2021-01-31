const setParams = (query) => {
    const casesParams = new URLSearchParams();
    casesParams.set('filter', query.filter);
    casesParams.set('case', query.case);
    return casesParams;
}

export default setParams;