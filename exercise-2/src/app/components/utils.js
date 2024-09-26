const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDateForArticle(dateString) {
    const freshDate = new Date(dateString);

    const month = MONTHS[freshDate.getMonth()];
    
    const day = freshDate.getDate();
    const formattedDay = (day > 9) ? day : ('0' + day);
    
    const year = freshDate.getFullYear();
    
    return `${month} ${formattedDay}, ${year}`;
}

