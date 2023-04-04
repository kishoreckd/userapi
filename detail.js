
// Targeting all the HTML element to use.

//*the location.search get the id from URL
let id = window.location.search
let image = document.querySelector(".image")
let details = document.querySelector(".details")

let div = document.querySelector(".load")

let header = document.querySelector(".header")



// adding funtion for showing and removing loaders
/* ---------------------------------------------------------------------------------------- */

function showloader() {
    div.classList.add("show")


}
function removeloader() {
    div.classList.remove("show")

}

// added eventlistner for initial load 
/* ---------------------------------------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
    //* The showloader function is used to show loading icon

    showloader()

    fetch(`https://randomuser.me/api?id=${id}`)
        .then(res => res.json())
        .then(json => {
            //* The removeloader function is used to remove loading icon after fetching
            removeloader()

            let result = json.results;
            result.forEach(results => {
                let img = document.createElement("img")
                img.src = results.picture.large;
                image.appendChild(img)

                let name = document.createElement("h2")
                name.innerText = `FullName:${results.name.first}${results.name.last}`
                details.appendChild(name)

                let gender = document.createElement("h3")
                gender.innerText = `Gender:${results.gender}`
                details.appendChild(gender)

                let genderdefine = document.createElement("div")
                genderdefine.setAttribute("class","genders")
                if (results.gender == "male") {
                    genderdefine.innerHTML = `<i class="fa-solid fa-person"></i>`
                    console.log(genderdefine);
                    header.appendChild(genderdefine)

                }
                if (results.gender == "female") {
                    genderdefine.innerHTML = `<i class="fa-solid fa-person-dress"></i>`
                    console.log(genderdefine);
                    header.appendChild(genderdefine)

                }


                let dob = document.createElement("h3")
                dob.innerText = `Dob:${results.dob.date.slice(0, 10)}Age${results.dob.age}`;
                details.appendChild(dob)


                let e = document.createElement("h3")
                e.innerText = "Email Id:"

                let email = document.createElement("a")
                email.href = `${results.email}`;
                e.appendChild(email)
                email.innerText = `${results.email}`;

                details.appendChild(e)
                console.log(email);

                let phoneno = document.createElement("h3")
                phoneno.innerText = `PhoneNo:${results.phone}`
                details.appendChild(phoneno)


            });


        })

})
/* ---------------------------------------------------------------------------------------- */
