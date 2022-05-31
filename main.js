console.log(reports)
// make sure I have access to data

const weatherList = document.querySelector('#weather-list')
// get the main box to put data in

// make the js build one of these for each report
for (let report of reports) {
    let reportElement = document.createElement('div')
    reportElement.classList.add('report')
    let contentElement = document.createElement('article')
    contentElement.classList.add("br2", "ba", "dark-gray", "b--black-10", "mv4", "w-100", "w-50-m", "w-25-l", "mw5", "center")
    let imageElement = document.createElement('img')
    imageElement.src = "http://placekitten.com/g/600/300"
    imageElement.alt = 'image of kitten'
    imageElement.classList.add("db", "w-100", "br2", "br--top")
    contentElement.appendChild(imageElement)
    reportElement.appendChild(contentElement)
    let infoElement = document.createElement('div')
    infoElement.classList.add("pa2", "ph3-ns", "pb3-ns")
    let cityElement = document.createElement('h1')
    cityElement.classList.add("5", "f4-ns", "mv0")
    cityElement.innerText = `Location: ${report.city}`
    contentElement.appendChild(cityElement)
    weatherList.appendChild(reportElement)
}
/* <div class="report">
<article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
    <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top"
        alt="Photo of a kitten looking menacing.">
    <div class="pa2 ph3-ns pb3-ns">
        <div class="dt w-100 mt1">
            <div class="dtc">
                <h1 class="f5 f4-ns mv0">Mexico City</h1>
            </div>
            <div class="dtc tr">
                <h3 class="f5 mv0">Temp: 75</h3>
            </div>
        </div>
        <p class="f6 lh-copy measure mt2 mid-gray">
            Mostly cloudy
        </p>
    </div>
</article>
</div> */