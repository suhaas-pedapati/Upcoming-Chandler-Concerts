async function fetchData() {
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/venue/past?name=Chandler&minDate=2022-01-25&maxDate=2023-01-30&page=1';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '', //Insert your X-RapidAPI-Key
            'X-RapidAPI-Host': '' //Insert your X-RapidAPI-Host
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the response as JSON
        const concerts = data.data;

        const concertsElement = document.getElementById("concerts");

        if (concerts.length > 0) {
            concerts.forEach(concert => {
                const li = document.createElement('li');
                li.textContent = `${concert.name} - ${new Date(concert.startDate).toLocaleDateString()}`;
                concertsElement.appendChild(li);
            });
        } else {
            concertsElement.textContent = 'No concerts found';
        }

    } catch (error) {
        console.error(error);
    }
}

fetchData();
