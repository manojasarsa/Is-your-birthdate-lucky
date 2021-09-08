const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const privacyBtn = document.querySelector("#privacy-btn");
const privacyNote = document.querySelector("#privacy-note");
const output = document.querySelector("#output");



function findSumOfDate(birthDate) {

    const validDate = birthDate.replaceAll("-", "")
    var sum = 0;
    for (let num of validDate) {
        sum = sum + Number(num)
    }
    return sum;
}


function findBithdateIsLucky() {
    if (dob.value && luckyNumber.value>0) {
        const sum = findSumOfDate(dob.value);

        if (sum % luckyNumber.value == 0) {
            output.innerText = "YAY! Your birthday is lucky!! 😍";
        } else {
            output.innerText = "Oops!! Your birthday is not lucky!! 😔";
        }
    }
    else{
        output.innerText = "Please enter valid inputs!";
    }

}

checkBtn.addEventListener("click", findBithdateIsLucky);

privacyBtn.addEventListener("click", () => {
    privacyNote.style.display = "none";
})