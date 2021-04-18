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

const changeProfilePicture = document.querySelector("form#choose_category");
changeProfilePicture.addEventListener("submit", reloadPicCategories);

function reloadPicCategories(event){
    event.preventDefault();
    const category = document.querySelector("form#choose_category input#category");
    console.log("la categoria scelta è: "+ category.value);
    showUnsplashed(category.value);
}

function showUnsplashed(category){
    if(category === ""){
        console.log("foto random");
    } else{
        console.log(category);
    }
}