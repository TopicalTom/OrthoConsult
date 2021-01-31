const getQuickLink = (props) => {
    const {clientCases, type, currentCase} = props;
    const caseCheck = clientCases.find(item => item.status === type);

    if (caseCheck !== undefined) {
        return `dashboard/cases?filter=${type}&case=${caseCheck.uid}`
    } else {
        return `dashboard/cases?filter=None&case=${currentCase}`
    }
}

export default getQuickLink;