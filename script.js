window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
      console.log(response);
      response.json().then(function(json) {
        let container = document.getElementById("container");
        let astronautCount = 0;

        for (let index in json) {
          astronautCount += 1;
          
          container.innerHTML += `
            <div class = "astronaut">    
            <div class = "bio">      
                <h3>${json[index].firstName} ${json[index].lastName}</h3>
                <ul> 
                    <li>Hours in space: ${json[index].hoursInSpace}</li>
                    <li>Active: ${json[index].active}</li>
                    <li>Skills: ${json[index].skills}</li>
                </ul>
                </div>
                <img class="avatar" src="${json[index].picture}">
                </div>`;
               
        }
        container.innerHTML += `
        <h3>The total number of astronauts is ${astronautCount}.</h3>`
            
        });
    });

  });