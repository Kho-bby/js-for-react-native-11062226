//** Task 3*/
function createUserProfile(originalNames, modifiedNames){
    if (originalNames !== modifiedNames){
        throw new Error;
    }
    return originalNames.map((originalName, index) => {
        return{
            id: index + 1,
            originalName: originalName,
            modifiedName: modifiedNames[index]
        };
    });
}