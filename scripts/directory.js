//get the current page 
var segments = window.location.pathname.split('/');
var result = segments[segments.length - 1];

//fetching hospital data if the url is hotels.html
if(result === 'hospitals.html')
{
    //get hospital data
    fetch("../../data/hospitalData.json")
    .then(function (response) 
    {
        return response.json(); //this can be written as .then(res => res.json()) in arrow function
    }) 
    .then(function (data)   //this can be written as .then(data => data.map()); in arrow function
    {
        const hospHTML = data.map(hospital => {
            return `
            <div class="items">
                <div>
                    <img alt="${hospital.name}" src="${hospital.photo}">
                </div>
                <div>
                    <h4>${hospital.name}</h4>
                    <p>${hospital.address}</p>
                    <p>Phone: ${hospital.phone}</p>   
                    ${hospital.email ? `<p style="font-size:x-small">Email: ${hospital.email}</p>` : ''}         
                </div>
            </div>
            `
        }).join('');

        document.getElementById('hospitals').innerHTML = hospHTML;
    })
}

//fetching hotels data if the url is hotels.html
if(result === 'hotels.html')
{
    //get hotel data
    fetch("../../data/hotelData.json")
    .then(res => res.json()) 
    .then(function (data) 
    {
        const hotHTML = data.map(hotel => {
            return `
            <div class="items">
                <div>
                    <img alt="${hotel.name}" src="${hotel.photo}">
                </div>
                <div>
                    ${hotel.web ? `<a href="http://${hotel.web}" target="#">`: ''}<h4>${hotel.name} (${hotel.star})</h4></a>
                    <p>Type: ${hotel.type}</p>
                    <p>Phone: ${hotel.phone}</p>
                    <p>Distance from Town: ${hotel.distance}</p>         
                </div>
            </div>
            `
        }).join('');

        document.getElementById('hotels').innerHTML = hotHTML;
    })
}

//fetching colleges data if the url is colleges.html
if(result === 'colleges.html')
{
    //get colleges data
    fetch("../../data/collegeData.json")
    .then(res => res.json()) 
    .then(function (data) 
    {
        const colHTML = data.map(college => {
            return `
            <div class="items">
                <div>
                    <img alt="${college.name}" src="${college.photo}">
                </div>
                <div>
                    ${college.website ? `<a href="http://${college.website}" target="#">` : ''}<h4>${college.name}</h4></a>
                    <p>${college.address}</p>
                    <p>Phone: ${college.phone}</p>
                    ${college.email ? `<p style="font-size:x-small">Email: ${college.email}</p>` : ''}
                    ${college.website ? `<p style="font-size:x-small">${college.website}</p>` : ''}      
                </div>
            </div>
            `
        }).join('');

        document.getElementById('colleges').innerHTML = colHTML;
    })
}

//fetching the data and filterig aided schools from the data if the url is schools_aided.html
if(result === 'schools_aided.html')
{
    const dataFile = "../../data/schoolData.json";
    const main = document.getElementById('adidedSchools');

    //get schools data
    fetch(dataFile)
    .then(res => res.json()) 
    .then(data => main.innerHTML = getListOfSchools(data));

    const getListOfSchools = (data) => 
    {
        const aidedHTML = data.filter(schools => schools.syllabus === 'State').map(schools => 
        `
        <div class="items">
            <div>
                <img alt="${schools.name}" src="${schools.photo}">
            </div>
            <div>
                ${schools.website ? `<a href="http://${schools.website}" target="#">` : ''}<h4>${schools.name}</h4></a>
                <p>${schools.address}</p>
                <p>Classes: ${schools.class}</p>
                <p>Phone: ${schools.phone}</p>
                ${schools.email ? `<p style="font-size:x-small">Email: ${schools.email}</p>` : ''}
                ${schools.website ? `<p style="font-size:x-small">${schools.website}</p>` : ''}      
            </div>
        </div>
        `).join('');
        
        return aidedHTML;
    }
}

//fetching the data and filterig cbse schools from the data if the url is schools_cbse.html
if(result === 'schools_cbse.html')
{
    const dataFile = "../../data/schoolData.json";
    const main = document.getElementById('cbseSchools');

    //get schools data
    fetch(dataFile)
    .then(res => res.json()) 
    .then(data => main.innerHTML = getListOfSchools(data));

    const getListOfSchools = (data) => 
    {
        const cbseHTML = data.filter(schools => schools.syllabus === 'CBSE').map(schools => 
        `
        <div class="items">
            <div>
                <img alt="${schools.name}" src="${schools.photo}">
            </div>
            <div>
                ${schools.website ? `<a href="http://${schools.website}" target="#">` : ''}<h4>${schools.name}</h4></a>
                <p>${schools.address}</p>
                <p>Classes: ${schools.class}</p>
                <p>Phone: ${schools.phone}</p>
                ${schools.email ? `<p style="font-size:x-small">Email: ${schools.email}</p>` : ''}
                ${schools.website ? `<p style="font-size:x-small">${schools.website}</p>` : ''}      
            </div>
        </div>
        `).join('');
        
        return cbseHTML;
    }
}

//fetching the office data if the url is offices.html
if(result === 'offices.html')
{
    const dataFile = "../../data/officeData.json";
    const main = document.getElementById('offices');

    //get schools data
    fetch(dataFile)
    .then(res => res.json()) 
    .then(data => main.innerHTML = getListOfOffices(data));

    const getListOfOffices = (data) => 
    {
        const officeHTML = data.map(office => 
        `
        <div class="items">
            <div>
                <img alt="${office.name}" src="${office.photo}">
            </div>
            <div>
                <h4>${office.name}</h4>
                <p>${office.address}</p>
                <p>Phone: ${office.phone}</p>
                ${office.email ? `<p style="font-size:x-small">Email: ${office.email}</p>` : ''}   
            </div>
        </div>
        `).join('');
        
        return officeHTML;
    }
}
