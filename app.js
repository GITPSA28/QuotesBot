function myFunction() {
    var quotes = new Array ();
    quotes[0] = "There is only one thing that makes a dream impossible to achieve: the fear of failure.";
    quotes[1] = "It's the possibility of having a dream come true that makes life interesting.";
    quotes[2] = "People who are crazy enough to think they can change the world, are the ones who do.";
    quotes[3] = "Believe you can and you are halfway there.";
    quotes[4] = "Everything you have ever wanted is on the other side of fear.";
    quotes[5] = "Happiness is not by chance, but by choice.";
    var i = Math.floor(6*Math.random())
    document.getElementById("demo").innerHTML =quotes[i];
    }