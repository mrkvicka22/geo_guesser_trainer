import axios from "axios"

export default function getRandomImage(setImageSrc, setCountry){

    const config = {
    method: 'get',
    url: 'http://localhost:8000/bollard',
    headers: { 
        'Content-Type': 'application/json'
    }
    };

    axios(config)
    .then(function (response) {
        setCountry(response.data.country);
        setImageSrc(response.data.image_path);
    })
    .catch(function (error) {
        console.log(error);
    });

}