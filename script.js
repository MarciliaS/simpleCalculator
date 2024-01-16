let buttons = Array.from(document.querySelectorAll("button"));

    buttons.map(buttons => {
        buttons.addEventListener('click', (e) =>{
            let inputOne = Number(document.getElementById("number1").value);
            let inputTwo = Number(document.getElementById("number2").value);

            let result = 0;

            if(e.target.innerText === "+"){
                result = parseFloat(inputOne) + parseFloat(inputTwo);
            }else if(e.target.innerText === "-"){
                result = parseFloat(inputOne) - parseFloat(inputTwo);
            }else if(e.target.innerText === "x"){
                result = parseFloat(inputOne) * parseFloat(inputTwo);
            }else {
                result = parseFloat(inputOne) / parseFloat(inputTwo);
            }
                document.getElementById("resultArea").innerHTML = " Result: "+String(result);
    })
})