const readableTime = (seconds) => {

    const timeInSeconds = Math.round(seconds / 1000);

    if(timeInSeconds < 60) { // Displays "Just Now"
        return "just now"
    } else if (timeInSeconds >= 60 && timeInSeconds < 3600) { // Displays "Minute(s) Ago"
        return `${Math.round(timeInSeconds/60)} minute${Math.round(timeInSeconds/60) > 1 ? "s" : ""} ago`
    } else if (timeInSeconds >= 3600 && timeInSeconds < 86400){ // Displays "Hour(s) Ago"
        return `${Math.round(timeInSeconds/3600)} hour${Math.round(timeInSeconds/3600) > 1 ? "s" : ""} ago`
    } else if (timeInSeconds >= 86400 && timeInSeconds < 604800){ // Displays "Day(s) Ago"
        return `${Math.round(timeInSeconds/86400)} day${Math.round(timeInSeconds/86400) > 1 ? "s" : ""} ago`
    } else if (timeInSeconds >= 604800 && timeInSeconds < 2628000){ // Displays "Week(s) Ago"
        return `${Math.round(timeInSeconds/604800)} week${Math.round(timeInSeconds/604800) > 1 ? "s" : ""} ago`
    } else if (timeInSeconds >= 26280000 && timeInSeconds < 31540000){ // Displays "Month(s) Ago"
        return `${Math.round(timeInSeconds/26280000)} month${Math.round(timeInSeconds/26280000) > 1 ? "s" : ""} ago`
    } else { // Displays "Year(s) Ago"
        return `${Math.round(timeInSeconds/31540000)} year${Math.round(timeInSeconds/31540000) > 1 ? "s" : ""} ago`
    }
}

export default readableTime;