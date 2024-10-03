document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('insert')
        .addEventListener('click', async () => {
            let nev = document.getElementById('nev').value;
            let szuletesiev = document.getElementById('szuletesiev').value;
            let jsontext = `{"nev":"${nev}","szuletesiev":"${szuletesiev}"}`;
            let json = JSON.parse(jsontext);
            console.log(json);
            let backendurl = "https://api-generator.retool.com/c0APjO/data"; 
            fetch(backendurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json)
            })
        });
}); 