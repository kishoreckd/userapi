let id = window.location.search
let image = document.querySelector(".image")
let details = document.querySelector(".details")

let div = document.querySelector(".load")
// console.log(div);

// console.log(div);
function show() {
    div.classList.add("show")


}
function remove() {
    div.classList.remove("show")

}


window.addEventListener("DOMContentLoaded", () => {
    show()

    fetch(`https://randomuser.me/api?id=${id}`)
        .then(res => res.json())
        .then(json => {
            remove()

            let reuslts = json.results;
            reuslts.forEach(results => {
                console.log(results)
                let img = document.createElement("img")
                img.src = results.picture.large;
                image.appendChild(img)

                let name = document.createElement("h2")
                name.innerText = `FullName:${results.name.first}${results.name.last}`
                details.appendChild(name)

                let gender = document.createElement("h3")
                gender.innerText = `Gender:${results.gender}`
                details.appendChild(gender)


                let dob = document.createElement("h3")
                dob.innerText = `Dob:${results.dob.date.slice(0, 10)}Age${results.dob.age}`;
                details.appendChild(dob)

            //     let address = document.createElement("h4")
            //     address.innerText = `DoorNumber:${results.location.street.number}Street:${results.location.street.name}City:${results.location.city}State:${results.location.state}Country:${results.location.country}
            // Postcode:${results.location.postcode}`;
            //     user_details.appendChild(address)

                let  e =document.createElement("h3")
                e.innerText ="Email Id:"

                let email = document.createElement("a")
                email.href= `${results.email}`;
e.appendChild(email)
                email.innerText=`${results.email}`;
                
                details.appendChild(e)
                console.log(email);

                let phoneno = document.createElement("h3")
                phoneno.innerText = `PhoneNo:${results.phone}`
                details.appendChild(phoneno)


            });


        })

})
