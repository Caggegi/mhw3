const header = document.querySelector("header");

//header.style.backgroundImage = "url(https://9to5mac.com/wp-content/uploads/sites/6/2020/10/The-Lake-5-dragged.jpg?quality=82&strip=all&w=1000)";

fetch("https://picsum.photos/700/300").then(onResponse, onError);

function onResponse(response){
    console.log(response);
    header.style.backgroundImage = "url("+response.url+")";
}

function onError(error){
    console.log(error);
}