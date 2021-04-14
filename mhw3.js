const header = document.querySelector("header div#background");


fetch("https://picsum.photos/2800/700").then(onResponse, onError);

function onResponse(response){
    console.log(response);
    header.style.backgroundImage = "url("+response.url+")";
}

function onError(error){
    console.log(error);
    header.style.backgroundImage = "url(img/default.jpg)";
}