export const removeEmptyProps = (object) => {
    for(const key in object){
        if(object[key] === "" || object[key] == null){
            delete object[key];
        }
    }
}