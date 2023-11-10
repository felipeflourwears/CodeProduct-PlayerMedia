document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById("code");
    inputField.focus();
});

const codes = [
    { value: "7502289450024", redirectUrl: "templates/coca1.html" },
    { value: "7501483106966", redirectUrl: "templates/coca2.html" }
    // Agrega más códigos y URLs de redirección según sea necesario
];

function redirect() {
    const codeInput = document.getElementById("code").value;
        
    const codeObject = codes.find(code => code.value === codeInput);

    if (codeObject) {
         window.location.href = codeObject.redirectUrl;
    } else {
        console.log("***", codeInput, "***");
        setTimeout(function() {
            document.getElementById("code").value = "";
        }, 1000); // Ajusta el valor del retraso en milisegundos según tus necesidades
    }
}