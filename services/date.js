export const uniqueDates = (tasks) =>{
    const unique =[]

//para que las fechas sean unicas y no se repitan
    tasks.forEach(task => {
        if(!unique.includes(task.dateFormat)) unique.push(task.dateFormat)
    });
    return unique;
}

export const orderDates = (dates) =>{
    return dates.sort((a,b)  =>{
        const firstDate = moment(a,"DD/MM/YYYY")
        const secundDate = moment(b,"DD/MM/YYYY")
        return firstDate - secundDate;
    })
}