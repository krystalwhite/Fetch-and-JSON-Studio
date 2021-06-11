window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      console.log(response);
      response.json().then(function(json) {
        let container = document.getElementById("container");
        let astronautCount = 0;
        let colorChange = "";

        for (let i = 0; i < json.length; i++) {
          astronautCount += 1;
          
          let orderedList = json.sort(function(a, b) {return a.hoursInSpace - b.hoursInSpace});
          let orderedJson = orderedList[i];

          for (let j = 0; j < orderedJson.length; j++) {
            if (orderedJson[j].active) {
              colorChange = "active";
            }
          }

          container.innerHTML += `
            <div class = "astronaut">    
            <div class = "bio">      
                <h3>${orderedJson.firstName} ${orderedJson.lastName}</h3>
                <ul> 
                    <li>Hours in space: ${orderedJson.hoursInSpace}</li>
                    <li class = ${colorChange}>Active: ${orderedJson.active}</li>
                    <li>Skills: ${orderedJson.skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${orderedJson.picture}">
                </div>`;
               
        }
        container.innerHTML += `
        <h3>The total number of astronauts is ${astronautCount}.</h3>`
            
        });
    });

  });