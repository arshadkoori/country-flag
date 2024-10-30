async function findData() {
    const res=await fetch(`../data.json`)
    const data=await res.json()
    console.log(data);
    str=``
console.log(data[1]);
    
    data.map((datas)=>{


str+=`
 <div class="container">

            <div class="images">
                <img src="${datas.flag}" alt="" height="100%" width="100%">
            </div>
            <div class="bottom">
<a href="../html/details.html?id=${datas.name}">

            <div id="c_name"><p>${datas.name}</p></div>
            <div class="population"><p>population:${datas.population}</p></div>
            <div class="region"><p>region:${datas.region}</p></div>
            <div class="capital"><p>Capital:${datas.capital}</p></div>
            </div>
        </div>
</a>
`
    })

    document.getElementById("main").innerHTML=str
    
}
findData()