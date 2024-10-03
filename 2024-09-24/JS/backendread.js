document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('read')
        .addEventListener('click', () => {
            let backendurl = "https://api-generator.retool.com/OKmG9Q/data";
            fetch(backendurl)
            .then(response => response.json())
            .then(data => adatokTablazatba(data));
    });
    function adatokTablazatba(adatok){
        console.log(adatok);
        let table = `<div>
          
        `;
        // adatsorok létrehozasa az adatok alapjan
        for (let i = 0; i < adatok.length; i++) {
            table += `<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/100/100?random=${adatok[i].id}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${adatok[i].id}</h5>
            <p class="card-text">${adatok[i].nev}</p>
            <p class="card-text">${adatok[i].szuletesiev}</p>
            </div>
        </div>
            `
        }
        table +=  `</div>`
        document.getElementById("dolgozok").innerHTML = table;
    }
});