
    const form = document.getElementById("form")
    const campos = document.querySelectorAll('.required')
    const span = document.querySelectorAll('.validacao')
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexName =/[A-Z][a-z].* [A-Z][a-z].*/
    const btn1 = document.getElementById("btn1")
    const btn2 = document.getElementById("btn2")
    let checkbox = document.getElementById('checkbox_privacidade');
    let span1 = document.getElementById("x1")
    let span2 = document.getElementById("x2")
    let span3 = document.getElementById("x3")
    let span4 = document.getElementById("x4")
    let span5 = document.getElementById("x5")

    function setError(index){
       
        span[index].style.display = 'block'
        
    }

    function setValid(index){
        span[index].style.display = 'none'
        
    }

    campos[0].addEventListener("input", function nameValidate(){
        
        if(regexName.test(campos[0].value)){
            setValid(0)
        }else{
            setError(0)
        }
    })

   campos[1].addEventListener("input",  function emailValidade(){
    if(regex.test(campos[1].value)){
        setValid(1)
    }else{
        setError(1)
    }
})

   campos[2].addEventListener("input",  function telValidade(){
    if(campos[2].value.length != 9){
        setError(2)
    }else{
        setValid(2)
    }
})


   campos[4].addEventListener("input",  function PassValidade(){
         
    if(campos[4].value.length < 8){
        setError(4)
       }else{
           setValid(4)
       }
})



campos[5].addEventListener("input",     function passwordVerif(){
    if(campos[5].value != campos[4].value){
        setError(5)
    }else{
        setValid(5)
    }
})
/*
    function dispalyNone(){
        let span1 = document.getElementById("x1")
        let span2 = document.getElementById("x2")
        let span3 = document.getElementById("x3")
        let span4 = document.getElementById("x4")
        let span5 = document.getElementById("x5")
    }
*/
   btn2.addEventListener("click",  function Limpar() {
    let span1 = document.getElementById("x1")
    let span2 = document.getElementById("x2")
    let span3 = document.getElementById("x3")
    let span4 = document.getElementById("x4")
    let span5 = document.getElementById("x5")
    let span6 = document.getElementById("x6")
    let erro = document.getElementById("error")
    let valid = document.getElementById("sucess")
    const campos = document.querySelectorAll('.required')
    
    campos[0].value = ""
    campos[1].value = ""
    campos[2].value = ""
    campos[3].value = ""
    campos[4].value = ""
    campos[5].value = ""

    erro.style.display = 'none'
    valid.style.display = 'none'
    span1.style.display = 'none'
    span2.style.display = 'none'
    span3.style.display = 'none'
    span4.style.display = 'none'
    span5.style.display = 'none'
    span6.style.display = 'none'
    
})
    
   btn1.addEventListener("click",  function Enviar(){
        let erro = document.getElementById("error")
        let valid = document.getElementById("sucess")
        if((campos[0].value === '' || campos[0].value.length < 5) || campos[1].value === '' || (campos[2].value === '' ||campos[2].value.length < 9 )  || (campos[4].value === '' || campos[4].value.length < 8 ) || (campos[5].value != campos[4].value || campos[5].value === '') || !(checkbox.checked) ){
            erro.style.display = 'flex'
           
        }else{
            erro.style.display = 'none'
            valid.style.display = 'flex'
            
        }
    })