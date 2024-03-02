export const removeEmptyProps = (object) => {
    for(const key in object){
        if(object[key] === "" || object[key] == null){
            delete object[key];
        }
    }
}

export const rangeNumber = (start, end) => {
    const length = end - start + 1;
    return Array.from({length}, (_,i) => start + i)
}