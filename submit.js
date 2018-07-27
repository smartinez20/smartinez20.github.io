var submit = document.querySelector('#submit')


submit.addEventListener('click', e => {
    var image = document.querySelector('#image').value
    var desc = document.querySelector('#description').value
    console.log(image);
    console.log(desc);
    var post = {'image': image, 'description': desc}
    firebase.database().ref('/').push(post)
});





// firebase.database().ref('/').push(image);
// firebase.database().ref('/').push(desc);

