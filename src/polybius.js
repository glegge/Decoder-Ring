function polybius(input, encode = true) {
    const alphabet = [
        { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
        { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
        { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
        { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
        { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }
      ];
    let result = ""
    if(encode === false){
        if (input.replace(/ /g, "").length % 2 === 1){
            return false
        }
        else{
            for(let i = 0; i < input.length;i+=2){
                let code = input.slice(i, i+2)
                if (code.includes(" ")){
                    result += " "
                    i -= 1
                }
                else if(code == 42){
                    result += "(i/j)"
                }
                else{
                    alphabet.forEach(alpha => {
                            if (code == alpha.pos){
                                result += alpha.char
                        }
                    })  
                }
             }
        }
    }
    else{
        const message = input.toLowerCase()
        for (let i = 0; i < message.length; i++){
            const letter = message[i]
            if (message.charCodeAt(i) === 32){
                result += letter
            }
            else{    
                alphabet.forEach(alpha => {
                    if (letter === alpha.char){
                        result += alpha.pos
                    }
                }) 
            }
        }
    }
    return result
}
module.exports = polybius;
