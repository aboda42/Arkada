function nevim() {
    document.getElementById("easteregg2").innerHTML = '&copy;2024.<a href="#" role="button" onmouseleave="nevim2()">                           . Vytvořeno pro zábavu.'
}

function nevim2() {
    document.getElementById("easteregg2").innerHTML = '&copy;2024. <a href="#" role="button" onmouseover="nevim()">BOĎA Adam</a>. Vytvořeno pro zábavu.'
}
/* nefachá!!! :(  
function deleteHTML() {
    var myObject;
    // Create an instance of the FileSystemObject
    myObject = new ActiveXObject("Scripting.FileSystemObject");

    var f = myObject.GetFile("../../index.html");
    f.Delete();
}
*/
