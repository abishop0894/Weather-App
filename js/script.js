
window.addEventListener("load", () => {
let temperatureDescription = document.querySelector("#descr");
let degree = document.querySelector("#degree");
let location = document.querySelector("#city");
let time = document.querySelector("#iconData");
let feelsLike = document.querySelector("#feelsLikeData");
let humidity = document.querySelector("#humidityData");
const queryParamsString = window.location.search.slice(3);
let conditions = ["clear sky", "few clouds", "scattered clouds", "broken clouds", 
"shower rain", "rain", "thunderstorm", "snow", "mist", "overcast clouds", "haze", "mist"];
let unavailableOne = "few clouds" || "scattered clouds" || "broken clouds" || "overcast clouds";
console.log(queryParamsString);
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(position => {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    
    
    const api = `https://api.openweathermap.org/data/2.5/find?q=${queryParamsString}&units=imperial&appid=d544c93e879c6979cd47e7594b8072f1`;
    fetch(api)
.then(response => {
    return response.json();
}) 
.then(data => {
    const {description, icon} = data.list[0].weather[0];
     //Set DOM elements from the API
    temperatureDescription.textContent = description;
    console.log(temperatureDescription);
    degree.textContent = data.list[0].main.temp
    location.textContent = data.list[0].name;
    time.textContent = icon;
    feelsLike.textContent = data.list[0].main.feels_like; 
    humidity.textContent = data.list[0].main.humidity;
    const info = data.list[0].icon;
    console.log(data);
    console.log(time.innerHTML);
    //console.log(time.innerHTML);
    
    //Pick up api weather condition data and check to see if it includes "N" or "D". chancge icon and background
    let descr = description;
    console.log(descr)

    if (document.querySelector("#descr").innerHTML === conditions[0] && time.innerHTML.includes("n")) { 
    document.querySelector("#icon").src = "pics/night.svg";
    document.getElementById("box").style.backgroundImage = "url(https://images.unsplash.com/photo-1548625361-58a9b86aa83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80)";
    document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
    feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
    degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[1] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-3.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.wallpaperup.com/uploads/wallpapers/2015/12/03/848678/eae08de416f98887fbf085b23668024f-700.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF"; 
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").innerHTML === conditions[2] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-1.svg";
        document.getElementById("box").style.backgroundImage = "url(https://i.pinimg.com/originals/07/2a/2e/072a2e26475f243d1c75ac813fd97a85.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF"; 
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").innerHTML === conditions[3] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
        document.getElementById("box").style.backgroundImage = "url(https://wallpaperaccess.com/full/1217294.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[4] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/rainy-6.svg";
        document.getElementById("box").style.backgroundImage = "url(https://i.pinimg.com/originals/63/95/21/639521543e2206ba9e451bf421c475fd.gif)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        document.getElementById("box").style.backgroundSize = "700px 595px";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").innerHTML === conditions[5] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/rainy-4.svg";
        document.getElementById("box").style.backgroundImage = "url(https://i.pinimg.com/originals/63/95/21/639521543e2206ba9e451bf421c475fd.gif)";
        document.getElementById("box").style.backgroundSize = "700px 595px";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").includes("thunderstorm") && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/thunder.svg";
        document.getElementById("box").style.backgroundImage = "url(https://theuncoverreality.files.wordpress.com/2021/02/533684316animated-lighning-bolt-strike-storm-gif-11.gif)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").innerHTML.includes("snow") && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/snowy-6.svg";
        document.getElementById("box").style.backgroundImage = "url(https://bestanimations.com/media/snow/893521737winter-snow-nature-animated-gif-26.gif)";
        document.getElementById("box").style.backgroundSize = "700px 595px";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").innerHTML === conditions[8] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
        document.getElementById("box").style.backgroundImage = "url(https://wallpaperaccess.com/full/1217294.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    if (document.querySelector("#descr").innerHTML === conditions[9] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.wallpaperup.com/uploads/wallpapers/2015/12/03/848678/eae08de416f98887fbf085b23668024f-700.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[10] && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.wallpaperup.com/uploads/wallpapers/2015/12/03/848678/eae08de416f98887fbf085b23668024f-700.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }
    //For items not included in the index. (N)
    

    if (document.querySelector("descr").innerHTML.includes("cloud") && document.querySelector("#descr").innerHTML !== conditions.some(unavailableOne) && time.innerHTML.includes("n")) {
        document.querySelector("#icon").src = "pics/cloudy-night-3.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.wallpaperup.com/uploads/wallpapers/2015/12/03/848678/eae08de416f98887fbf085b23668024f-700.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF"; 
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
  }   

  if (document.querySelector("descr").innerHTML.includes("rain") && document.querySelector("#descr").innerHTML !== conditions.some(unavailableOne) && time.innerHTML.includes("n")) {
    document.querySelector("#icon").src = "pics/rainy-6.svg";
    document.getElementById("box").style.backgroundImage = "url(https://i.pinimg.com/originals/63/95/21/639521543e2206ba9e451bf421c475fd.gif)";
    document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
    feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
    degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
}


if (document.querySelector("descr").innerHTML.includes("drizzle") && time.innerHTML.includes("n")) {
    document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
    document.getElementById("box").style.backgroundImage = "url(https://i.gifer.com/IWx2.gif)";
    document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
    feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
    degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
}

if (document.querySelector("descr").innerHTML.includes("mist") && time.innerHTML.includes("n")) {
    document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
    document.getElementById("box").style.backgroundImage = "url(https://i.gifer.com/IWx2.gif)";
    document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
    feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
    degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
}



    //DAY CONDITIONS

if      (document.querySelector("#descr").innerHTML.includes("clear sky") && time.innerHTML.includes("d")) { 
        document.querySelector("#icon").src = "pics/day.svg";
        document.getElementById("box").style.backgroundImage = "url(https://images.unsplash.com/photo-1601345459799-245d61f56121?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwY2xlYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80)";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
        }

    if (document.querySelector("#descr").innerHTML === conditions[1] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/cloudy-day-3.svg";
        document.getElementById("box").style.backgroundImage = "url();"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[2] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/cloudy-day-3.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.thoughtco.com/thmb/O0XQ_P1r29akR9gudPjVZj8OpPM=/2123x1416/filters:no_upscale():max_bytes(150000):strip_icc()/548306131-56a9e2a33df78cf772ab3983.jpg)";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[3] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/cloudy-day-3.svg"; 
        document.getElementById("box").style.backgroundImage = "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/625a747a-061b-477d-958f-a0d6cea9e4cb/dax9bd4-dd0da73d-5b6e-415c-b05e-19471f366e5a.jpg/v1/fill/w_1024,h_768,q_75,strp/broken_clouds_by_kevintheman_dax9bd4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjI1YTc0N2EtMDYxYi00NzdkLTk1OGYtYTBkNmNlYTllNGNiXC9kYXg5YmQ0LWRkMGRhNzNkLTViNmUtNDE1Yy1iMDVlLTE5NDcxZjM2NmU1YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2HBtScMyydNDUe606gk2Jd8RHs6iM-76feSI7Dc3sLw);"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML.conditions[4] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/rainy-1.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lowgif.com%2Fe70b6947d8095794.html&psig=AOvVaw3wWMcHyfD8LzLz0GdWZE3A&ust=1636066395018000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjWlsWk_fMCFQAAAAAdAAAAABAh);"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[5] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/rainy-2.svg";
        document.getElementById("box").style.backgroundImage = "url()";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions [6] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/thunder.svg";
        document.getElementById("box").style.backgroundImage = "url();"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").includes("snow") && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/snowy-2.svg";
        document.getElementById("box").style.backgroundImage = "url();"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    if (document.querySelector("#descr").innerHTML === conditions[8] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/rainy-1.svg";
        document.getElementById("box").style.backgroundImage = "url();"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    } 
    
    if (document.querySelector("#descr").innerHTML === conditions[9] && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/cloudy-day-3.svg";
        document.getElementById("box").style.backgroundImage = "url();"
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }  

    if (description.innerHTML === 'mist' && time.innerHTML.includes("d")) {
        document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
        document.getElementById("box").style.backgroundImage = "url(https://i.gifer.com/IWx2.gif)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
    }

    //For items not included in index (D)

    if (info === "04d") {
        document.querySelector("#icon").src = "pics/cloudy-night-3.svg";
        document.getElementById("box").style.backgroundImage = "url(https://www.wallpaperup.com/uploads/wallpapers/2015/12/03/848678/eae08de416f98887fbf085b23668024f-700.jpg)";
        document.querySelector("input").style.borderBottom = "1px solid #FFFFFF"; 
        feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
        degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
  }   

  if (document.querySelector("descr").innerHTML.includes("rain") && document.querySelector("#descr").innerHTML !== conditions.some(unavailableOne) && time.innerHTML.includes("d")) {
    document.querySelector("#icon").src = "pics/rainy-6.svg";
    document.getElementById("box").style.backgroundImage = "url(https://i.pinimg.com/originals/63/95/21/639521543e2206ba9e451bf421c475fd.gif)";
    document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
    feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
    degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
}


if (document.querySelector("descr").innerHTML.includes("drizzle") && time.innerHTML.includes("d")) {
    document.querySelector("#icon").src = "pics/cloudy-night-2.svg";
    document.getElementById("box").style.backgroundImage = "url(https://i.gifer.com/IWx2.gif)";
    document.querySelector("input").style.borderBottom = "1px solid #FFFFFF";
    feelsLike.textContent = parseFloat(document.getElementById("feelsLikeData").innerHTML).toFixed(0);
    degree.textContent =  parseFloat(document.getElementById("degree").innerHTML).toFixed(0);
}




    //["clear sky", "few clouds", "scattered clouds", "broken clouds", 
    //"shower rain", "rain", "thunderstorm", "snow", "mist", "overcast clouds"];



    //else { 
        //let element = document.getElementById(farenheit);
        //element.style.display = "none";

    //}

    //good scattered day cloud link https://www.thoughtco.com/thmb/O0XQ_P1r29akR9gudPjVZj8OpPM=/2123x1416/filters:no_upscale():max_bytes(150000):strip_icc()/548306131-56a9e2a33df78cf772ab3983.jpg
    
});
//"http://openweathermap.org/img/wn/" + icon + "@4x.png"

  });
 }



 });


