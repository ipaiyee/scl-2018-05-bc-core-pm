//funcion y for para CIFRADO
function cipher(message){
  let messageCipher = "";
  //ciclo for
  for(let i = 0; i<message.length; i++){
   // formula codigo ASCII 
   let messageChar = (message.charCodeAt(i) - 65 + 33)%26 + 65;
   messageCipher += String.fromCharCode(messageChar);
 } //retorna menNsaje cifrado
  return messageCipher;
}
  
//funcion y for para DESCIFRADO
function decipher(message){
  let messageDecipher = "";
  // ciclo for
    for(let i = 0; i<text.length; i++){
    // invierto codigo ASCII
      let messageChar = (String.fromCharCode(message(i)) + 33)%26;
      messageDecipher = messgeDecipher + messageChar;
      let newmessage = newmessage.charCodeAt(mesaggeDecipher);
    }
    return messageDescipher;
  }