const getActiv = document.getElementById("get-activity")

getActiv.addEventListener("click", activity)


function activity(){
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").textContent = data.activity
        document.getElementById("title").textContent = "🦾 HappyBot 🦿"
      })
}