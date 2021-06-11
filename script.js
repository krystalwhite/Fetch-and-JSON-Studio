window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      response.json().then(function(json) {
        let container = document.getElementById("container");
        let astronautCount = 0;
        let colorChange = "";

        for (let i = 0; i < json.length; i++) {
          astronautCount += 1;
          if (json[i].active) {
            colorChange = "active";
          }
        
          // I can put them in order OR I can tag them green; I cannot get both to happen at the same time. 
          // NOTE: if using the below code, need to change all the json[i] to orderedJson instead.
          // let orderedList = json.sort(function(a, b) {return a.hoursInSpace - b.hoursInSpace});
          // let orderedJson = orderedList[i];

          container.innerHTML += `
            <div class = "astronaut">    
            <div class = "bio">      
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul> 
                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                    <li class = ${colorChange}>Active: ${json[i].active}</li>
                    <li>Skills: ${json[i].skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>`;
               
        }
        container.innerHTML += `
        <h3>The total number of astronauts is ${astronautCount}.</h3>`
            
        });
    });

  });