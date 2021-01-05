function caesar(input, shift, encode = true) {
    // checks to if shift is set correctly
    if (shift === 0 || shift < -25 || shift > 25){
        return false
    }
    let result = ""
    if(encode === false){
        const message = input.toLowerCase()  
        for (let i = 0; i < message.length; i++) {
            // gets the char code for the current char
            let num = message.charCodeAt(i);
            // checks if the current char is alphabetical
            if (num < 97 || num > 122){
                let res = String.fromCharCode(num)
                result += res
            }
            // shifts the current char by the shift value
            else{
            //change the shift from positive to negative and vise versa
                let back = shift * -1
                const temp = num += back
                if(temp > 122){
                    const remainder = temp - 122
                    const warp = 96 + remainder
                    let res = String.fromCharCode(warp)
                    result += res
                }
                else if(temp < 97){
                    const remainder = 96 - temp
                    const warp = 122 - remainder
                    let res = String.fromCharCode(warp)
                    result += res
                }
                else {
                    let res = String.fromCharCode(temp)
                    result += res
                }
            }
        }
    }
    else{
        //changes the input to lower case
        const message = input.toLowerCase()  
        for (let i = 0; i < message.length; i++) {
            // gets the char code for the current char
            let num = message.charCodeAt(i);
            // checks if the current char is alphabetical
            if (num < 97 || num > 122){
                let res = String.fromCharCode(num)
                result += res
            }
            // shifts the current char by the shift value
            else{
                const temp = num += shift
                if(temp > 122){
                    const remainder = temp - 122
                    const warp = 96 + remainder
                    let res = String.fromCharCode(warp)
                    result += res
                }
                else if(temp < 97){
                    const remainder = 96 - temp
                    const warp = 122 - remainder
                    let res = String.fromCharCode(warp)
                    result += res
                }
                else {
                    let res = String.fromCharCode(temp)
                    result += res
                }
            }
        }
    }
   return result
}


module.exports = caesar;
