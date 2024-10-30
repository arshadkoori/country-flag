let url=window.location.href;
let urlparams=new URLSearchParams(url.split("?")[1])
let id=urlparams.getElemendeById("det")
console.log("det");

async function Details() {
    const res= await fetch(`../data.json`)
     data=await res.json()
    
}
Details(){

    

}