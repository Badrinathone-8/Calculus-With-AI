
let input=document.querySelector("#input")
let btn=document.querySelector("#btn");
let ans=document.querySelector("#answer")

let getAnswer=async ()=>{
    let query=input.value
    let result=await fetch("http://localhost:8000/api/query",{
       method:"POST",
        headers: {
        "Content-Type": "application/json"
    },
       body:JSON.stringify({
        query:query,
       }),
    
    })
    let final=await result.json();
    console.log(final.answer)
    ans.innerText=final.answer
}
btn.addEventListener("click",()=>{
    getAnswer()
})