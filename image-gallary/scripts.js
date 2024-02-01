
const imageData = [
    { url:'nature/123.jpeg', category: 'nature' },
    { url:'nature/1234.jpeg', category: 'nature' },
    { url: 'sports/777.jpeg', category: 'sports' },
    { url: 'food/1.jpeg', category: 'food' },

   
];


function filterImages(category) {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = ''; 

    if (category === 'all') {
        // Display all images if 'All' is selected
        imageData.forEach(image => displayImage(image.url));
    } else {
        // Display images based on the selected category
        const filteredImages = imageData.filter(image => image.category === category);
        filteredImages.forEach(image => displayImage(image.url));
    }
}

// Function to display an image in the gallery
function displayImage(url) {
    const gallery = document.getElementById('image-gallery');
    const imgElement = document.createElement('img');
    imgElement.src = url;
    gallery.appendChild(imgElement);
}

// Initial load to display all images
filterImages('all');
