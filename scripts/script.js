const messageInput = document.querySelector('#message')
const keyInput = document.querySelector('#key')

function encode() {

    const message = messageInput.value
    const key = keyInput.value % 26
    
    let encoded = ""

    for (let letter of message) {

        const ascii = letter.charCodeAt(0)
        
        if (ascii >= 65 && ascii <= 90)
            encoded += String.fromCharCode(65 + (ascii + key - 65) % 26)
        else if (ascii >= 97 && ascii <= 122) 
            encoded += String.fromCharCode(97 + (ascii + key - 97) % 26)
        else 
            encoded += String.fromCharCode(ascii)

    }

    messageInput.value = encoded

}

function decode() {

    const message = messageInput.value
    const key = keyInput.value % 26
    
    let decoded = ""

    for (let letter of message) {

        const ascii = letter.charCodeAt(0)
        
        if (ascii >= 65 && ascii <= 90)
            decoded += String.fromCharCode(90 + (ascii - key - 90) % 26)
        else if (ascii >= 97 && ascii <= 122) 
            decoded += String.fromCharCode(122 + (ascii - key - 122) % 26)
        else 
            decoded += String.fromCharCode(ascii)

    }

    messageInput.value = decoded

}

function copy() {
    
    navigator.clipboard.writeText(messageInput.value)

}