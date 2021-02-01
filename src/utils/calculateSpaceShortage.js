const calculateSpaceShortage = (data) => {
    const { urCentral, ulCentral, urLateral, ulLateral, transpalatal } = data;
    const adequateSpace = Number(urCentral) + Number(urLateral) + Number(ulCentral) + Number(ulLateral)
    const total = (adequateSpace + 8) - transpalatal;

    return `${total} mm`
}
    
export default calculateSpaceShortage;