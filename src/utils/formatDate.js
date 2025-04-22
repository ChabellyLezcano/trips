export function formatDate(date) {
    if(!date) return '';

    if(typeof date.toDate === 'function'){
        return date.toDate().toLocalDateString();
    }

    return new Date(date).toDate().toLocalDateString();
}