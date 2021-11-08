const fetchbutton=document.querySelector('#random');
const quote=document.querySelector('#quote');
const author=document.querySelector('#author');

let quotesdata = '{"quotes":[' +
'{"content":"There is only one thing that makes a dream impossible to achieve: the fear of failure.","author":"Paulo Coelho" },' +
'{"content":"People who are crazy enough to think they can change the world, are the ones who do.","author":"Steve Jobs" },' +
'{"content":"It\'s the possibility of having a dream come true that makes life interesting.","author":" Paulo Coelho" },' +
'{"content":"Believe you can and you are halfway there.","author":"Theodore Roosevelt" },' +
'{"content":"Everything you have ever wanted is on the other side of fear.","author":"George Addair" },' +
'{"content":"Happiness is not by chance, but by choice.","author":"Jim Rohn" }]}';

const obj = JSON.parse(quotesdata);
function getMyQuote() {
    var i = Math.floor(6*Math.random())
    quote.innerHTML =obj.quotes[i].content;
    author.innerHTML= '- '+obj.quotes[i].author;
}
fetchbutton.addEventListener('click',fetchQuote);
function fetchQuote(){
    fetch("https://api.quotable.io/random")
    .then(res=>res.json())
    .then(data=>{
        const s=data.content;
        quote.innerHTML= "\""+s+"\"";
        author.innerHTML= '- '+data.author;
       
    })
}
