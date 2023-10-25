
    let amountText = document.querySelector("#amount")
    let presentText = document.querySelector("#present")
    let include = document.querySelector("#include");
    let exclude = document.querySelector("#exclude");
    let amountGst = document.querySelector("#amountGst");
    let mainAmount = document.querySelector(".mainAmount")

   

    function outbuildGst(){
        let mainb = parseFloat(amountText.value) ;
        let presentb = parseFloat(presentText.value) ;
        console.log(typeof amountGst)
        let onePresent = (mainb / 100) * presentb;
        let totalBalnce = mainb + onePresent;
        amountGst.textContent = onePresent;
        mainAmount.textContent = totalBalnce
    }

    function inbuidGst(){
        let mainb = parseFloat(amountText.value);
        let presentb = parseInt(presentText.value)
        let onePresent = (mainb / 100) * presentb;
        let totalBalnce = mainb - onePresent;
        let compress = (totalBalnce / 100) * presentb;
        amountGst.textContent = compress;
        mainAmount.textContent = totalBalnce;
        console.log("hi")
    }

    include.addEventListener("change", () => {
        if(include.checked){
            amountGst.textContent = "";
            mainAmount.textContent = "";
            exclude.checked = false;
            outbuildGst()
        }else{
            console.log("unchecked")
        }
    })

    exclude.addEventListener("change", () => {
        if(exclude.checked){
            include.checked = false;
            inbuidGst()
        }else{
            console.log("unchecked")
        }
    })
   
