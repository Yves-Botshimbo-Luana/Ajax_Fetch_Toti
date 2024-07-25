function ajaxCharacter(){
    console.log("ajaxCharacter");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rickandmortyapi.com/api/character", true);

    xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status <= 399) {
            const data = JSON.parse(xhr.responseText);
            const characterList = document.getElementById("character-list-ajax");  
            
            data.results.forEach((character) => {
                const listItem = document.createElement("li");
                listItem.textContent = `O personagem ${character.name} está ${character.status}`;
                characterList.appendChild(listItem); 
            });
        } else {
            console.log(
                "Erro: Infelizemente Nao conseguimos conectar ao nosso servidor"
            );
            const characterList = document.getElementById("character-list-ajax");
            const errorMsg = document.createElement("li");
            errorMsg.textContent = `Erro: Infelizmente Nao conseguimos conectar ao nosso servidor`;
            characterList.appendChild(errorMsg);
        }
    };          
    xhr.send();
}
ajaxCharacter();

function fetchCharacter(){
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
        if (!response.ok){
            throw new Error("Não foi possivel efetuar a requisição.");
        }
        return response.json();
    })
    .then((data) => {
        data.results.forEach((character)=> {
            const characterList = document.getElementById("character-list-fetch");
            const listItem = document.createElement("li");
        listItem.textContent = `O personagem ${character.name} está ${character.status}`;
        characterList.appendChild(listItem);
        });
    })
    .catch((error) => console.log("", error));
}
fetchCharacter();

function ajaxEpisode(){
    console.log("ajaxEpisode");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://rickandmortyapi.com/api/episode", true);

    xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status <= 399) {
            const data = JSON.parse(xhr.responseText);
            const episodeList = document.getElementById("episode-list-ajax");  
            
            data.results.forEach((episode) => {
                const listItem = document.createElement("li");
                listItem.textContent = `O personagem ${episode.name} está ${episode.status}`;
                episodeList.appendChild(listItem); 
            });
        } else {
            console.log(
                "Erro: Infelizemente Nao conseguimos conectar ao nosso servidor"
            );
            const episodeList = document.getElementById("episode-list-ajax");
            const errorMsg = document.createElement("li");
            errorMsg.textContent = `Erro: Infelizmente Nao conseguimos conectar ao nosso servidor`;
            episodeList.appendChild(errorMsg);
        }
    };         
    xhr.send();
}
ajaxEpisode();


function fetchEpisode(){
    fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => {
        if (!response.ok){
            throw new Error("Não foi possivel efetuar a requisição.");
        }
        return response.json();
    })
    .then((data) => {
        data.results.forEach((episode)=> {
            const episodeList = document.getElementById("episode-list-fetch");
            const listItem = document.createElement("li");
        listItem.textContent = `O personagem ${episode.name} está ${episode.status}`;
        episodeList.appendChild(listItem);
        });
    })
    .catch((error) => console.log("", error));
}

fetchEpisode();


