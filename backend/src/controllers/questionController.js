import history from "../data/history.js"
let questions = [
    {
        id: 1,
        query: "what is derivative",
        ans: "A derivative measures the rate of change of a function."
    },
    {
        id: 2,
        query: "what is limit",
        ans: "A limit describes the value a function approaches."
    },
    {
        id: 3,
        query: "what is integration",
        ans: "Integration is used to find accumulated quantities and areas under curves."
    },
    {
        id: 4,
        query: "what is differentiation",
        ans: "Differentiation is the process of finding the derivative of a function."
    },
    {
        id: 5,
        query: "what is continuity",
        ans: "A function is continuous at a point if it has no break or jump there."
    }
];
let id=1;
export function middleware(req,res,next){
    let {query}=req.body;
    if(typeof query!=="string"||query.trim()==""){
        return res.status(400).json({error:"invalid input"})
    }
    next();
}
export function getAnswer(req,res){
    id=id+1
    let {query}=req.body;
    let answer=questions.find((ans)=>query.trim().toLowerCase()==ans.query.trim().toLowerCase());
    if(!answer){
        return res.status(400).json({error:"invalid input"})
    }
    let result=answer.ans
    //console.log(result)
    const obj={
        id:id,
        query:query,
        answer:result
    }
    history.push(obj)
    
res.status(200).json({answer:result})
}