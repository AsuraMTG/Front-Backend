document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('read')
        .addEventListener('click', () => {
            let backendurl = "https://api-generator.retool.com/c0APjO/data";
            fetch(backendurl)
            .then(response => response.json())
            .then(data => adatokTablazatba(data));
    });
    function adatokTablazatba(adatok){
        console.log(adatok);
        let table = `<table>
        <thead>
            <tr>
                <th>id</th>
                <th>Név</th>
                <th>Születési év</th>
            </tr>
        </thead>
        <tbody>`;
        // adatsorok létrehozasa az adatok alapjan
        for (let i = 0; i < adatok.length; i++) {
            table += `<tr>
            <td>${adatok[i].id}</td>
            <td>${adatok[i].nev}</td>
            <td>${adatok[i].szuletesiev}</td>
        </tr>`
        }
        table += ` </tbody>
        </table>`
        document.getElementById("dolgozok").innerHTML = table;
    }
});