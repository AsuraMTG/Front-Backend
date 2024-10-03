document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('request')
        .addEventListener('click', async () => {
            let postal_code = document.getElementById('postal_code').value;
            let community = document.getElementById('country').value;
            const url = `https://community-zippopotamus.p.rapidapi.com/${community}/${postal_code}`;
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '52adaa78ebmsh529a3685c0cf372p10001djsnf1c18a6cf05d',
                    'x-rapidapi-host': 'community-zippopotamus.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
                adatmMegjelenites(result);
            } catch (error) {
                console.error(error);
            }
        });
    function adatmMegjelenites(adatok) {
        const result = JSON.parse(adatok);
        let resultHtml = `<h2>Post code: ${result["post code"]}</h2>
        <p>Country: ${result["country"]} (${result["country abbreviation"]})</p>
        <h3>Places:</h3>
        <ul>
                    ${result["places"].map(place => `
        <div>
        <p><strong>Place name:</strong> ${place["place name"]}</p>
        <p><strong>State:</strong> ${place.state} (${place["state abbreviation"]})</p>
        <p><strong>Latitude:</strong> ${place.latitude}</p>
        <p><strong>Longitude:</strong> ${place.longitude}</p>
        </div>
                    `).join('')}
        </ul>
            `;;
        document.getElementById('result').innerHTML = resultHtml;
    }
}); 