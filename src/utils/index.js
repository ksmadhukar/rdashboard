
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

const images = require.context('./../assets/images', true, /\.(png|jpe?g|svg)$/);

const obj = {};
images.keys().forEach((key) => {
    const keyName = key.split('./').pop() // remove the first 2 characters
        .substring(0, key.length - 6); // remove the file extension
    obj[camelize(keyName)] = images(key);
});


console.log(obj)