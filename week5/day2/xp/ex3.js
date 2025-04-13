async function fetchdata(){
    try{
        const responce = await fetch("https://www.swapi.tech/api/starships/9/");
        if(!responce.ok) throw new Error("fetching data failed")
        const data = await responce.json()
        console.log(data.result)
    }catch (error){
        console.error("Error: ", error.message)
    }
}
