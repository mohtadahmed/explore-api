function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhoto(data))
}


function displayPhoto(photos){
    const photoContainer = document.getElementById('photo-container');
    for (const photo of photos) {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo-div')
        photoDiv.innerHTML = `
            <h4>ID-${photo.id}</h4>
            <h4>Title: ${photo.title}</h4>
            <img src="${photo.url}">
        `
        photoContainer.appendChild(photoDiv);
    }

}


loadPhoto();