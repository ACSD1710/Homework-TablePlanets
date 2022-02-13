let button = document.getElementById("button");

button.addEventListener("click", function () {
  let body = document.getElementsByTagName("body")[0];
  let table1 = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  async function getPlanet() {
    try {
      let result = await fetch("https://swapi.dev/api/planets/?page=1");
      let universe = await result.json();
      let planets = universe.results;
      console.log(planets);
      let array = ["name", "population", "climate", "gravity"];
      for (const item of array) {
        console.log(item);
        let th = document.createElement("th");
        th.textContent = item;
        thead.appendChild(th);
      }

      for (const planet of planets) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        td1.textContent = planet.name;
        td2.textContent = planet.population;
        td3.textContent = planet.climate;
        td4.textContent = planet.gravity;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        console.log(tr);
        tbody.appendChild(tr);
      }

      table1.appendChild(thead);
      table1.appendChild(tbody);
      body.appendChild(table1);
      let button2 = document.createElement("button");
      body.appendChild(button2);
      button2.textContent = "Next 10";

      ///////////////////////////NEXT 10/////

      button2.addEventListener("click", function () {
        table1.style.visibility = "hidden";
        button2.style.visibility = "hidden";

        async function getPlanet2() {
          let body = document.getElementsByTagName("body")[0];
          let table = document.createElement("table");
          let thead = document.createElement("thead");
          let tbody = document.createElement("tbody");

          try {
            let result = await fetch("https://swapi.dev/api/planets/?page=2");
            let universe = await result.json();
            let planets = universe.results;
            console.log(planets);
            let array = ["name", "population", "climate", "gravity"];
            for (const item of array) {
              console.log(item);
              let th = document.createElement("th");
              th.textContent = item;
              thead.appendChild(th);
            }

            for (const planet of planets) {
              let tr = document.createElement("tr");
              let td1 = document.createElement("td");
              let td2 = document.createElement("td");
              let td3 = document.createElement("td");
              let td4 = document.createElement("td");
              td1.textContent = planet.name;
              td2.textContent = planet.population;
              td3.textContent = planet.climate;
              td4.textContent = planet.gravity;
              tr.appendChild(td1);
              tr.appendChild(td2);
              tr.appendChild(td3);
              tr.appendChild(td4);
              console.log(tr);
              tbody.appendChild(tr);
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            body.appendChild(table);
            let button3 = document.createElement("button");
            body.appendChild(button3);
            button3.textContent = "Preverius 10";
            /////////// PREVERIUS 3////////////

            button3.addEventListener("click", function () {
              table1.style.visibility = "visible";
              table.style.visibility = "hidden";
              button3.style.visibility = "hidden";
            });
            
          } catch (error) {
            console.log(`Something went wrong ${error}`);
          }
        }

        getPlanet2();
      });
    } catch (error) {
      console.log(`Something went wrong ${error}`);
    }
  }
  getPlanet();
});
