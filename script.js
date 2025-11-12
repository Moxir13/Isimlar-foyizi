const ol = document.getElementById("ol");
const input = document.getElementById("input");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    if (input.value.trim().length < 1) {
        alert("ism kiriting...");
    } else {
        fetch("https://api.nationalize.io/?name=" + input.value)
            .then(javob=> javob.json())
            .then(data=> chizish(data.country));

    }
});

function chizish(malumot){
    ol.innerHTML="";
    malumot.map(davlat=>{
        const li=document.createElement("li");
       li.innerHTML=`
       <img src="https://flagcdn.com/24x18/${davlat.country_id.toLowerCase()}.png" alt="">${davlat.country_id}  ${(davlat.probability*100).toFixed(2)} %      `;
       ol.appendChild(li);
    })
}