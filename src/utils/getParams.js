const getParams = (location) => {
    const casesParams = new URLSearchParams(location);

    return {
        caseId: casesParams.get('case'),
        filterType: casesParams.get('filter')
    }
}

export default getParams;