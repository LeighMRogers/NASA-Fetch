//1. Using this url, fetch data related to NASA’s picture of the day.
//2. Display the returned object in the console.
//3. Write a template function that will return a DOM component with the image, date, explanation, title, and copyright. Remember to use semantic HTML.
//4. Write a function that will display the component on the DOM.

const nasaContainer = document.querySelector(".nasaPic");

function createNasaHTML(nasaObj) {
    let nasaHTML = `
    <section>
        <h1>Cool NASA Picture of Space</h1>
        <h3>Title: ${nasaObj.title}</h3>
        <p>Date: ${nasaObj.date}</p>
        <p>Explanation: ${nasaObj.explanation}</p>
        <p>&copy; ${nasaObj.copyright}</p>
        <img src="${nasaObj.url}">
    </section>
    `
    return nasaHTML;
}

function addNasaToDom(htmlNasa) {
    nasaContainer.innerHTML += htmlNasa;
}

fetch("https://api.nasa.gov/planetary/apod?api_key=KtZjD1P0nkHA6Tm0rusxbQFCtEU4G366UO1tKCcx")
    .then(pics => pics.json())
    .then(parsedNasa => {
        const nasaAsHTML = createNasaHTML(parsedNasa)
        addNasaToDom(nasaAsHTML)
    })
