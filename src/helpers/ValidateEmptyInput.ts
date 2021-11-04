export const ValidateEmptyInputs =(inputValues={}):boolean =>{
    const objectValues = Object.values(inputValues)
    const compareValues= objectValues.map( (value)=> value === '' ? true : false);
    return compareValues.includes(true)
}