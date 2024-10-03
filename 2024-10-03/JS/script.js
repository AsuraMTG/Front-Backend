const backendUrl = "https://retoolapi.dev/SZwUUA/data";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("get").addEventListener("click", async () =>{
        fetch(backendUrl)
        .then(Response => Response.json())
        .then(data => Datafutar(data));
    });
    document.getElementById("update").addEventListener("click", async () =>{
        let id = document.getElementById("id").value;
        let nev = document.getElementById("nev").value;
        let email = document.getElementById("email").value;
        let bool = document.getElementById("bool").checked;

        let futar = {id:id,nev:nev,email,email,bool:bool}
        
        let modositurl = backendUrl + "/" + id;

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch(modositurl, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify(futar)
        });

        if (Response.ok) {
            alert("sikeres volt");
        }
        else {
            alert("sikertelen volt");
        }
    });
});

function Datafutar(data){
    let szoveg = "";
    for (let i = 0; i < data.length; i++) {
        szoveg += `<div class="card border-dark col-mb-3" style="max-width: 30rem;">

        <div class="card-body text-dark">
        <div class="col-mb-3">
                <label for="id">ID: ${data[i].id}</label>
            </div>
            <div class="col-mb-3">
                <label for="nev">Név: ${data[i].nev}</label>
            </div>
            <div class="col-mb-3">
                <label for="email">Email: ${data[i].email}</label>
            </div>
            <div class="col-mb-3">
                <label for="id">BOOL: ${data[i].bool}</label>
            </div>

            
            <button type="button" id="update" class="btn btn-outline-warning" onclick ="modositas(${data[i].id})">Módosítás</button>
            <button type="button" id="delete" class="btn btn-outline-danger">Törlés</button>

        </div>
    </div>`
        
    };
    let card = document.getElementById("card").innerHTML = szoveg;
};

function modositas(id){
    fetch(backendUrl + "/" + id)
    .then(Response => Response.json())
    .then(data => {
        document.getElementById("id").value = data.id;
        document.getElementById("nev").value = data.nev;
        document.getElementById("email").value = data.email;
        document.getElementById("bool").value = data.bool;
    });
};
