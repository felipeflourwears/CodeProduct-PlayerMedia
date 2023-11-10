document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById("code");
    inputField.focus();
});

const codes = [
    { value: "7501055330683", redirectUrl: "templates/valle.html" },
    { value: "7501055320639", redirectUrl: "templates/coca.html" },
    { value: "7501295600126", redirectUrl: "templates/clara.html"},
    { value: "7501055307906", redirectUrl: "templates/ciel.html"}
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