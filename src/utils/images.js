// vite way for get all pics one time and out put array of obj like this "/src/assets/port1.png"
const images = import.meta.glob('../assets/*.{jpg,jpeg,png}', {
    eager: true, // get all pics one time
    import: 'default' //return path of image
});

const formattedImages = {};

for (const path in images) {
    const cleanName = path
        .split('/')
        .pop()
        .split('.')[0]; // img1.jpg => img1

    formattedImages[cleanName] = images[path];
}

export default formattedImages;
