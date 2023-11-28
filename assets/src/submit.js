selectSchool = document.getElementById("school");

selectSchool.addEventListener("change", () => {
    console.log(selectSchool.value);
    if(selectSchool.value == "직접 입력") {
        document.querySelector(".manual").style.display = "block";
    } else {
        document.querySelector(".manual").style.display = "none";
    }
})