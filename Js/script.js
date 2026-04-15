let menubar = document.getElementById("menuList")
menubar.style.maxHeight = "0px";

function toggle_menu(){
    if(menubar.style.maxHeight == "0px")
    {
        menubar.style.maxHeight = "320px";
    }
    else{
        menubar.style.maxHeight = "0px";
    }

}

function process_data(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    
    var texto = "Nombre de usuario: "+name+"\n Correo: "+email+"\n Teléfono: "+phone+"\n"+message+"\n No tenemos base de datos, pero al menos el formulario funciona :v";
    var enlace = document.createElement("a");
    enlace.setAttribute("href", "data:text/plain; charset:utf-8,"+encodeURIComponent(texto));
    enlace.setAttribute("download", "documento.txt");
    enlace.style.display="none";
    
    document.body.appendChild(enlace);
    enlace.click();

    document.body.removeChild(enlace);
}


function show_details_1(){
    let detail = document.getElementById("info1");
    let photo2 = document.getElementById("photo2");
    let photo3 = document.getElementById("photo3");
    if(detail.open){
        detail.open = false;
        detail.style.display = "none";
        photo2.style.display = "block";
        photo3.style.display = "block";
    }else{
        detail.style.display = "block";
        detail.open = true; 
        photo2.style.display = "none";
        photo3.style.display = "none";
    }
}
function show_details_2(){
    let detail = document.getElementById("info2");
    let photo1 = document.getElementById("photo1");
    let photo3 = document.getElementById("photo3");
    if(detail.open){
        detail.open = false;
        detail.style.display = "none";
        photo1.style.display = "block";
        photo3.style.display = "block";
    }else{
        detail.style.display = "block";
        detail.open = true; 
        photo1.style.display = "none";
        photo3.style.display = "none";
    }
}
function show_details_3(){
    let detail = document.getElementById("info3");
    let photo1 = document.getElementById("photo1");
    let photo3 = document.getElementById("photo2");
    if(detail.open){
        detail.open = false;
        detail.style.display = "none";
        photo1.style.display = "block";
        photo2.style.display = "block";
    }else{
        detail.style.display = "block";
        detail.open = true; 
        photo1.style.display = "none";
        photo2.style.display = "none";
    }
}
//Para el formulario de la seccion de contacto
function send(){
    document.getElementById("texto_para_form").innerHTML = "Gracias por sus comentarios, en breve nos contactaremos con usted";
}

// Elementos para el formulario de reservas

var inputDate = document.getElementById("date-reserv");
var inputHours = document.getElementById("hour-set");
var selPersons = document.getElementById("sel-person");
var buttonReserve = document.getElementById("btn_reservar");
var dialog = document.getElementById("reservation-dialog");

inputDate.addEventListener('input', (evento) =>{
    const valor = evento.target.value;
    
    if (!esFechaFutura(valor)) {
    alert("La fecha no puede ser anterior a hoy.");
    inputDate.value = ''; // Limpiar el input
   } 
   else{
     inputHours.disabled = false;
     selPersons.disabled = false;
     buttonReserve.disabled = false;
   }
});
function esFechaFutura(fechaInput) {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Resetear horas para comparar solo días
    const fechaSeleccionada = new Date(fechaInput);
    return fechaSeleccionada >= hoy;
}
function reserve(){
    dialog.style.display = "flex";
    dialog.style.opacity = "1";
    let date = document.getElementById("date-reserv").value;
    let time = document.getElementById("hour-set").value;
    let persons = document.getElementById("sel-person").value;

    document.getElementById("date-day").innerHTML = date.toString();
    document.getElementById("date-hour").innerHTML = time.toString();
    document.getElementById("date-members").innerHTML = persons.toString();
}
function close_dialog(){
    dialog.opacity = "0";
    dialog.style.display = "none";
}
function sub(){
    document.getElementById("message").innerHTML = "<br>Gracias por su subscripción";

}