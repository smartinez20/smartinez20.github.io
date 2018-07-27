console.log('js attached')

firebase.database().ref('/')
    .once('value')
    .then(function(snapshot) {
        var data = snapshot.val()
        var holder = document.querySelector(('#holder'))
        for(key in data){
            holder.innerHTML += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data[key].image}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${data[key].description}</p>
  
  </div>
</div>`
        }
    })
