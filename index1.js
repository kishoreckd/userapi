
const img = document.querySelector(".images")
const male = document.querySelector(".male")
// console.log(button);
const female = document.querySelector(".female")
const button = document.querySelectorAll("button")
let div = document.querySelector(".load")

let array = []
//console.log(array);

window.addEventListener("DOMContentLoaded", () => {
    fetch("https://randomuser.me/api?results=21")
        .then(res => res.json())
        .then(json => {

            let result = json.results;
            array.push(result)
            general(result)

                for (let i = 0; i < button.length; i++) {
                    button[i].addEventListener("click",()=>{
                        if (button[i].innerText=="Male") {
                            let arr1=[]
                           let arr =array.filter(res => res.gender >4)
                           arr1.push(arr)
                        console.log(arr1);
                            
                        }
                    })

                }
            



        })
})



function general(result) {


    for (let i = 0; i < result.length; i++) {

        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = `detail.html?id=${result[i].id.value}`

        let image = document.createElement("img")
        image.setAttribute("class", "img")
        let src = result[i].picture.large;
        image.src = src;
        a.appendChild(image)
        // console.log(a);



        let link = document.createElement("a")
        link.setAttribute("class", "link")
        link.href = `detail.html?id=${result[i].id.value}`
        let name = document.createElement("p")
        name.setAttribute("class", "para")
        name.innerText = `${result[i].name.first}${result[i].name.last}`;
        link.appendChild(name)

        div.appendChild(a)
        div.appendChild(name)
        img.appendChild(div)
    }

}
