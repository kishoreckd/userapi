
const img = document.querySelector(".images")
const male = document.querySelector(".male")
// console.log(button);
const female = document.querySelector(".female")

let div = document.querySelector(".load")
let searchcategory = document.querySelector("#search")

let number =20;

function show() {
    div.classList.add("show")


}
function remove() {
    div.classList.remove("show")


}
// added eventlistner for initial load 

window.addEventListener("DOMContentLoaded", () => {
    show()
    fetch("https://randomuser.me/api?results=5")
        .then(res => res.json())
        .then(json => {

            remove()
            let result = json.results;
            // console.log(result)
            for (let i = 0; i < result.length; i++) {

                // console.log(result[i]);
                general(result[i])


            }
            searchcategory.addEventListener("keyup", () => {
                let user_name = document.querySelectorAll(".para")
                for (let i = 0; i < user_name.length; i++) {
                    if (user_name[i].innerText.toUpperCase().indexOf(searchcategory.value.toUpperCase()) != -1) {
                        user_name[i].parentElement.parentElement.style.display = "block"
                    }
                    else {
                        user_name[i].parentElement.parentElement.style.display = "none"
                    }
                }
            })

            male.addEventListener("click", () => {
                child()

                male.classList.toggle("active")
                female.classList.remove("active")
                if (male.classList.contains("active")) {
                    let result = json.results;
                    for (let i = 0; i < result.length; i++) {
                        console.log(result[i])

                        // console.log(result[i]);
                        let gender = result[i].gender;
                        // console.log(gender);
                        if (gender == "male") {
                            // console.log(result[i])
                            general(result[i])
                            // alert("L")
                        }

                    }
                }
                else {
                    let result = json.results;
                    // console.log(result)
                    for (let i = 0; i < result.length; i++) {

                        // console.log(result[i]);
                        general(result[i])


                    }
                }



            })
            female.addEventListener("click", () => {
                child()
                female.classList.toggle("active")
                male.classList.remove("active")
                if (female.classList.contains("active")) {
                    let result = json.results;
                    console.log(result)
                    for (let i = 0; i < result.length; i++) {

                        // console.log(resultparams[i]);
                        let gender = result[i].gender;
                        console.log(gender);
                        if (gender == "female") {
                            general(result[i])


                        }

                    }
                }
                else{
                    let result = json.results;
            // console.log(result)
            for (let i = 0; i < result.length; i++) {

                // console.log(result[i]);
                general(result[i])


            }
                }


            })

         




        })






})
function child() {
    while (img.hasChildNodes()) {
        img.firstChild.remove()

    }

}


function general(datas) {
    let div = document.createElement("div")
    let a = document.createElement("a")
    a.href = `detail.html?id=${datas.id.value}`

    let image = document.createElement("img")
    image.setAttribute("class", "img")
    let src = datas.picture.large;
    image.src = src;
    a.appendChild(image)
    // console.log(a);



    let link = document.createElement("a")
    link.setAttribute("class","link")
    link.href = `detail.html?id=${datas.id.value}`
    let name = document.createElement("p")
    name.setAttribute("class", "para")
    name.innerText = `${datas.name.first}${datas.name.last}`;
    link.appendChild(name)

    div.appendChild(a)
    div.appendChild(name)
    img.appendChild(div)
}


// redirect when clicking on the user card => detail.html?id=[idoftheuser] 
// get the id from the url - window.location.search => ?=2323
// extract the id from the above step and pass to the API (https://randomuser.me/api?id=[id])