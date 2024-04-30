function encodeAndDecodeMessages() {
    const firstTextAreaReference=document.querySelector('textarea[placeholder="Write your message here..."]');
    const secondTextAreaReference=document.querySelector('textarea[placeholder="No messages..."]');
    const encodeButtonReference=firstTextAreaReference.parentElement.children[2];
    const decodeButtonReference=secondTextAreaReference.parentElement.children[2];
    encodeButtonReference.addEventListener('click',encode);
    decodeButtonReference.addEventListener('click',decode);
    function encode(e) {
        let message=firstTextAreaReference.value;
        let messageArray=Array.from(message);
        messageArray.forEach((a,index) => messageArray[index] = String.fromCharCode(a.charCodeAt(0) + 1));
        secondTextAreaReference.textContent=messageArray.join('');
        firstTextAreaReference.value='';
    }
    function decode(e) {
        let messageToDecode=secondTextAreaReference.value;
        let decodedMessageArray=Array.from(messageToDecode);
        decodedMessageArray.forEach((a,index) => decodedMessageArray[index] = String.fromCharCode(a.charCodeAt(0) - 1));
        secondTextAreaReference.textContent=decodedMessageArray.join('');
    }
}
