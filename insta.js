
let url = "https://jsonplaceholder.typicode.com/photos";
fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    for(let i in data){
        console.log(data[i].url);

        let imag = document.createElement("div");
        imag.classList.add("image")
        let img = document.createElement("img")

        img.src = data[i].url;

        imag.appendChild(img);
        document.querySelector(".grid").appendChild(imag);

        if(i==11){
            break;
        }
    }
    
})
