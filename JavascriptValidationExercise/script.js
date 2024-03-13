console.log("Hello");

let isFormValid = false;
let forms = document.forms["grade-form"];

let fname = forms["fname"].value = '';
let lname = forms["lname"].value = '';
let mark1 = forms["mark1"].value = 0;
let mark2 = forms["mark2"].value = 0;
let mark3 = forms["mark3"].value = 0;

function validateTxt() {
    let fname = forms["fname"].value;
    let lname = forms["lname"].value;
    let mark1 = forms["mark1"].value;
    let mark2 = forms["mark2"].value;
    let mark3 = forms["mark3"].value;
    let errorEle = document.querySelector("span");

    if (fname.length == 0) {
        errorEle.innerText = "Enter First Name";
        errorEle.classList.remove("success");
    } else if (lname.length == 0) {
        errorEle.innerText = "Enter Last name";
        errorEle.classList.remove("success");
    } else if (isNaN(mark1) || mark1 < 0 || mark1 > 100) {
        errorEle.innerText = "Mark 1 not valid";
        errorEle.classList.remove("success");
    } else if (isNaN(mark2) || mark2 < 0 || mark2 > 100) {
        errorEle.innerText = "Mark 2 not valid";
        errorEle.classList.remove("success");
    } else if (isNaN(mark3) || mark3 < 0 || mark3 > 100) {
        errorEle.innerText = "Mark 3 not valid";
        errorEle.classList.remove("success");
    } else {
        errorEle.innerText = "Form is Validated, Press Print Result for results";
        errorEle.classList.add("success");
        isFormValid = true;
    }
}

function printResult() {
    let fname = forms["fname"].value;
    let lname = forms["lname"].value;
    let mark1 = parseInt(forms["mark1"].value);
    let mark2 = parseInt(forms["mark2"].value);
    let mark3 = parseInt(forms["mark3"].value);
    let pEle = document.querySelector("p");

    if (isFormValid) {
        console.log(mark1, mark2, mark3)
        let avg = (mark1 + mark2 + mark3) / 3;
        if (avg >= 90) {
            pEle.innerText = fname + " " + lname + "'s Grade is Awesome";
        } else if (avg >= 80) {
            pEle.innerText = fname + " " + lname + "'s Grade is Very Good";
        } else if (avg >= 50) {
            pEle.innerText = fname + " " + lname + "'s Grade is OK";
        } else {
            pEle.innerText = fname + " " + lname + "'s has Failed";
        }
        console.log(avg);
    } else {
        pEle.innerText = "Validate the Form Please";
    }
}
