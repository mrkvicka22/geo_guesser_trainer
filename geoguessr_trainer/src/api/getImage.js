import axios from "axios"

export default function getImage(path_to_img, setImage){
    

    var config = {
    method: 'get',
    url: `http://localhost:8000/bollard_image?bollard_path=${path_to_img}`,
    headers: { 
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Credentials": true,
        'Content-Type': 'application/json'
    },
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    setImage(response.data)
    })
    .catch(function (error) {
    console.log(error);
    console.log("Bruh")
    });

}