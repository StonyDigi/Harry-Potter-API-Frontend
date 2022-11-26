/*var div = document.getElementById("result");
    h3 = document.getElementById("nev");
    p = document.getElementById("haz");
    img = document.getElementById("img");

window.addEventListener("load", function(){
    var xhr = new XMLHttpRequest();
    

    xhr.open("GET", "https://hp-api.herokuapp.com/api/characters", true);

    xhr.onload = function() {
        if(xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
           
            var characters = data.characters;
            var output = "";
            for(var i in characters) {
                output += "<div>" + 

                "<h3>" + characters[i].name + "</h3>" +
                "<p>" + characters[i].house + "</p>" +
                "<img src=" + characters[i].image + ">" + characters[i].image + ">" +



               +  "</div>";


            }

            document.getElementById("result").innerHTML = output;

            
        }
    }

    xhr.send();
    console.log(characters);


})*/

document.getElementById("btn").addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://hp-api.herokuapp.com/api/characters", true);

    xhr.onload = function() {

        if(xhr.status === 200) {
            var potter = JSON.parse(xhr.responseText);
            var output = "";
            for(var i in potter) {
                output += "<div>" +

                "<h3>" +potter[i].name+ "</h3>" +
                "<p>"  +potter[i].house+ "</p>" +
                "<img src="+ potter[i].image +" />" // itt az img src-jét fűzzük hozzá, adjuk meg!
                +"</div>";
            }

            document.querySelector(".result").innerHTML = output; //queryselectorba bármire lehet hivatkozni!! .class, #id, html tag-re pld div, a , p, h1 stb

    }

    

    }

    xhr.send();

})