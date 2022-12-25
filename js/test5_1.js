const imgElement = document.querySelector('img');

imgElement.addEventListener("mouseover", () => {
    imgElement.setAttribute('src', '../img/reyna.jpg');
})
imgElement.addEventListener("mouseout", () => {
    imgElement.setAttribute('src', '../img/kayo.jpg');
})

