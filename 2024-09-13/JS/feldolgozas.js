const gomb = document.getElementById("gomb");
gomb.addEventListener("click", () => {

    if (document.getElementById("szam1").value === "" || document.getElementById("szam2").value === "") {
        alert("Kérlek add meg az összes adatot!");
        return;
    }

    let szam1 = parseInt(document.getElementById("szam1").value);
    let szam2 = parseInt(document.getElementById("szam2").value);
    let eredmeny = "A szam1 és a szam2 eredmenye:" (szam1 + szam2);

    document.getElementById("eredmeny").innerText = eredmeny;
});