
const movie={
    title:"Avengers"
}
const options={
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body:JSON.stringify(movie),
    mode:'cors'
}

async function fetchapi(){
 
     const data= await fetch('http://127.0.0.1:5000/getMovieBySearch',options);
     console.log(await data.json())

}


fetchapi();