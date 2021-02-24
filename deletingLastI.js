// Deleting the last element in the array

const deleteI = (arr) => {
    const newFormat = {};
    const newLength = arr.length - 1; 
    arr.map((element, idx) => {
        if (idx == newLength) {
            console.log(`Deleting last element: ${element}...`)
        } else if (idx < arr.length) {
            newFormat[idx] = element;
        }
    })
    console.log('Done, this is your output');
    console.log(newFormat)
    return newFormat
}
deleteI([1, 2, 3, 4, 5, 7, 8, 19]);