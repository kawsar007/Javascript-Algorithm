// ## Give an array of integers, replace all the occurrences of elementToReplace with subtractionElements.
// Example: 
// For inputArray = [1,2,1], elementToReplace = 1 and subtractionElement = 3, the output should be arrayReplace(inputArray, elementToReplace, subtractionElement) = [3,2,3].

// // Solve 1
function arrayReplace(inputArray, elementToReplace, subtractionElement){
    for(var element of inputArray){
        if(element === elementToReplace){
            element = subtractionElement
        }
        console.log(element);
    }
}

arrayReplace([1,2,1], 1, 3);

// // Solve 2 Using ES6

// const arrayReplace = (inputArray, elementToReplace, subtractionElement) => {
//     inputArray.forEach((element, index) => {
//         if(element === elementToReplace){
//             inputArray[index] = subtractionElement;
//         }
//     })
//     console.log(inputArray);
// }

// arrayReplace([5,5,2], 5, 8);