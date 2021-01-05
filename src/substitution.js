function doubleLetter(input){
    for(let i = 0; i < input.length; i++) {
        for(let j = i+1; j < input.length; j++) {
            if(input[j] === input[i]) {
                return true;
            }
        }
    }
    return false ;
}

function substitution(input, alphabet, encode = true) {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    let results = ""
    let lower = input.toLowerCase()
    if (alphabet.length !== 26){
        return false
    }
    if (doubleLetter(alphabet) === true){
        return false
    }
    if (encode === false){
        for (let i = 0; i < lower.length; i++){
            if(lower[i] === " "){
                results += " "
            } 
            else{
                const ind = alphabet.indexOf(lower[i])
                const res = letters.charAt(ind)
                results += res
            }
        }
    }
    else{
        for (let i = 0; i < lower.length; i++){
            if(lower[i] === " "){
                results += " "
            } 
            else{
                const ind = letters.indexOf(lower[i])
                const res = alphabet.charAt(ind)
                results += res
            }
        }
    }
    return results
}

module.exports = substitution;
