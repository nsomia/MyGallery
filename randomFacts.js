var num = 0;

function getRandomFact() {
    const url = "https://uselessfacts.jsph.pl/random.json?language=en";
  
    fetch(url)
      .then(response => {
        if (response.ok) {

          response.json().then(data => {
            const fact = data.text;
            const ID = data.id;
  

            document.getElementById("fact").textContent = fact;
            document.getElementById("ID").textContent = ID;
          });
        } else {
          console.log("Error retrieving random fact from API");
        }
      })
      .catch(error => {
        console.log("Error retrieving random fact from API:", error);
      });
  }

  function dailyFact() {
    const url = "https://uselessfacts.jsph.pl/api/v2/facts/today?lanugage=en";
  
    fetch(url)
      .then(response => {
        if (response.ok) {

          response.json().then(data => {
            const fact = data.text;
            const ID = data.id;
  

            document.getElementById("fact").textContent = fact;
            document.getElementById("ID").textContent = ID;
          });
        } else {
          console.log("Error retrieving random fact from API");
        }
      })
      .catch(error => {
        console.log("Error retrieving random fact from API:", error);
      });
  }