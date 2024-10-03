const backendurl = "https://api-generator.retool.com/kwfq7W/macskak";

async function adatokLetoltese() {
    const response = await fetch(backendurl); //elinditjuk a kerest
    const data = await response.json(); // varjuk meg a valaszt és alakitjuk at Js objectbe
    adatokMegjelenitese(data);
}

function adatokMegjelenitese(macskakJSON) {
    var htmlTartalom = "";
    for (let i = 0; i < macskakJSON.length; i++) {

        htmlTartalom += `<div class="card" style="width: 18rem;">
        <img src="https://cataas.com/cat/says/${macskakJSON[i].id}?fontSize=0&type=square" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Macska Neve: ${macskakJSON[i].nev}</h5>
        <p class="card-text">Születési év: ${macskakJSON[i].szuletett}</p>
        <p class="card-text">Neme: ${macskakJSON[i].nem}</p>
        <p class="card-text">${macskakJSON[i].ivartalanitott}</p>
        
        <button type="button" id="update" class="btn btn-outline-success" onclick="macskaModositas(${macskakJSON[i].id})">Módosítás</button>
        <button type="button" id="delete" class="btn btn-outline-danger" onclick="macskaTorles(${macskakJSON[i].id})">Törlés</button>
             
        </div>
        </div>
        `;
    }
    document.getElementById("kartyakDiv").innerHTML = htmlTartalom;
}

function insertMacska(){
    document.getElementById("urlapDiv").style.display = "block";
    document.getElementById("id").value ="";
    document.getElementById("nev").value = "";
    document.getElementById("him").checked = true;
    document.getElementById("szuletett").value = "2024";
    document.getElementById("ivartalanitott").checked = false;
}

async function adottMacskaAdatainakBetoltese(id){
    document.getElementById("kartyakDiv").innerHTML = "";
    document.getElementById("urlapDiv").style.display = "block";
    document.getElementById("insert").style.display = "none";
    document.getElementById("delete").style.display = "none";
    const response = await fetch(backendurl + "/" + id);
    const data = await response.json();
    document.getElementById("nev").value = data.nev;
    document.getElementById("szuletett").value = data.szuletett;
    document.getElementById("id").value = data.id;
    if(data.nem === "him"){
        document.getElementById("him").checked = true;
    }else{
        document.getElementById("nosteny").checked = true;
    }
    
    document.getElementById("szuletett").value = data.szuletett;

    document.getElementById("ivartalanitott").checked = (data.ivartalanitott?true:false);

    document.getElementById("update").onclick = () => {
        macskaModositKuldese(id);
    };
}

function macskaModositas(id){
    console.log("Módosítás: " + id);
    adottMacskaAdatainakBetoltese(id);
}

async function macskaModositKuldese(macskaId){
    console.log("Módosítás küldése: " + macskaId);
    const data = {
        id: macskaId,
        nev: document.getElementById("nev").value,
        nem: (document.getElementById("him").checked?"him":"nosteny"),
        szuletett: document.getElementById("szuletett").value,
        ivartalanitott: document.getElementById("ivartalanitott").checked
    };
    console.log(data);
    const response = await fetch(backendurl + "/" + macskaId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        console.error("Hiba a módosítás során!");
    } else {
        console.log("Módosítás sikeres!");
    }
    const valasz = await response.json();
    console.log(valasz);
}

async function macskaTorles(id){
    let backendurl = `https://api-generator.retool.com/kwfq7W/macskak/${id}`;
    fetch(backendurl, {
        method: "DELETE"
    }).then(() => adatTorlese());
}

async function adatokAdatbazisba(){
    const data = {
        nev: document.getElementById("nev").value,
        nem: (document.getElementById("him").checked?"him":"nosteny"),
        szuletett: document.getElementById("szuletett").value,
        ivartalanitott: document.getElementById("ivartalanitott").checked
    };
    const response = await fetch(backendurl + "/" + macskaId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const valasz = await response.json();
}



document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("urlapDiv").style.display = "none";
    adatokLetoltese();
});