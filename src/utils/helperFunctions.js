
export const formatDate = (date) => {
    const newDate = new Date(date);
    const monthName = newDate.toLocaleString('default', { month: 'long' });
    const formattedDay = formatDay(newDate.getDate());

    return monthName.slice(0, 3) + ' ' + formattedDay;
};

const formatDay = (day) => {
    const suffix = (day % 10 === 1 && day % 100 !== 11) ? "st"
    : (day % 10 === 2 && day % 100 !== 12) ? "nd"
    : (day % 10 === 3 && day % 100 !== 13) ? "rd"
    : "th"
    
    return day + suffix;
}

export const getTitleColor = rating => rating > 5 ? "purple" : "orange";

export const getMessageColor = rating => rating > 5 ? "lblue" : "orange";