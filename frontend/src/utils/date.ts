// Función para formatear la fecha y hora  
export const formatDateTime = (dateString: string) => {  
    const date = new Date(dateString);  
    const day = date.getDate();  
    const month = date.toLocaleString('es-ES', { month: 'long' });  
    const year = date.getFullYear();  
    let hours = date.getHours();  
    const minutes = date.getMinutes().toString().padStart(2, '0');  
    const seconds = date.getSeconds().toString().padStart(2, '0');  
    const ampm = hours >= 12 ? 'pm' : 'am';  
    hours = hours % 12;  
    hours = hours ? hours : 12;  
    return `${day} de ${month} de ${year}, ${hours}:${minutes}:${seconds}${ampm}`;  
};  

// Función para formatear la fecha para el título de la sección  
export const formatDateSection = (dateString: string) => {  
    const date = new Date(dateString);  
    const day = date.getDate();  
    const month = date.toLocaleString('es-ES', { month: 'long' });  
    const year = date.getFullYear();  
    return `${day} de ${month} de ${year}`;  
};  