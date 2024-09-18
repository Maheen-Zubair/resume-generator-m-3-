document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("button");
    var generatedResume = document.getElementById("generated");
    var resumeForm = document.getElementById("resumeBox");
    generateButton.addEventListener("click", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phoneNo = document.getElementById("phoneNo").value;
        var region = document.getElementById("region").value;
        var skills = document.getElementById("skills").value;
        var education = document.getElementById("education").value;
        var education2 = document.getElementById("education2").value;
        document.getElementById("getName").textContent = name;
        document.getElementById("getmail").textContent = email;
        document.getElementById("getNumber").textContent = phoneNo;
        document.getElementById("getRegion").textContent = region;
        document.getElementById("getskills").textContent = skills;
        document.getElementById("getEdu").textContent = education;
        document.getElementById("getEdu2").textContent = education2;
        generatedResume.classList.remove("hidden");
        // resumeForm.reset(); 
    });
});
