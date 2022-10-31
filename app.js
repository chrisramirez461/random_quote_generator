let myButton = document.getElementById('quote-button')
let myQuote = document.getElementById('quote')
const getQuote = async () => {
    try {
        const author = document.getElementById('author');
        const text = document.getElementById('text');
        const response = await fetch('https://type.fit/api/quotes');
        if(response.ok) {
        const jsonResponse = await response.json();    
        const random = Math.floor(Math.random()*1643);
        const randomQuote = jsonResponse[random];
        text.innerHTML = randomQuote.text;
        author.innerHTML = randomQuote.author;
        }
        else {
            throw new Error('Error, couldnt retrive quotes'); 

    }
}
    catch (error) {
        console.log(error)
    }
    
}
myButton.onclick = getQuote