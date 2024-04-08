

const names=document.getElementById("name")
const savenames=document.getElementById("addname")
const forms=document.getElementById("form")
const list=document.getElementById("lists")
const part=[]

form.addEventListener("submit",function(event){
    event.preventDefault()
    part.push(names.value)
    console.log(part)
    let htmlElements=""
    part.forEach(function(el){
        htmlElements=htmlElements +`<li>${el}</li>`
    })
    
    lists.innerHTML=htmlElements
})

