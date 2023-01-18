const form = document.getElementById("form")
const date = document.getElementById("date")
const time = document.getElementById("time")
const nombre = document.getElementById("name")
const tel = document.getElementById("tel")
const person = document.getElementById("persons")
const reservar = document.getElementById("reservar")
const editar = document.getElementById("editar")
const eliminar = document.getElementById("eliminar")

const DB = []
let count = 0



reservar.addEventListener('click' , function name(params) {

    console.log(`Este es el primero${count}`)
   let dateUser = date.value
   let timeUser = time.value
   let nameUser = nombre.value
   let telUser = tel.value
   let numberPerson = person.value

   count = count + 1   
   
   

    DB.push({count,dateUser,timeUser,nameUser,telUser,numberPerson})

    console.log(DB);

    
    console.log(count)
    
    showCard()

    console.log(DB)


})

const showCard = () => {
    const cardPresentation = document.querySelector(".reservation");
    cardPresentation.innerHTML = ""

    for (const index in DB) {
        cardPresentation.innerHTML += `<div class="car-container"><h5 id="FinalName">${DB[index].nameUser}</h5><p class="card-text">TELEFO: ${DB[index].telUser}</p><p class="card-text">FECHA DE LA RESERVA: ${DB[index].dateUser}</p>
        <p class="card-text">HORA DE LA RESERVA: ${DB[index].timeUser}</p><p class="card-text">CANTIDAD DE PERSONAS: ${DB[index].numberPerson}</p><div class="text-center">
        <button type="button" class="btn bg-success id="editar"">Editar</button>
        <button type="button" class="btn bg-danger  id="eliminar" onclick="deleteReservation(${DB[index].count})">Eliminar</button>
    </div></div>`;
      }



}

const deleteReservation = (count) => {
    const numeroActual = count
    console.log(numeroActual)
    const eliminarReserva = DB.findIndex(contador => contador.count == numeroActual)

    console.log(`Este es la ya tu sabes ${eliminarReserva}`);

    DB.splice(eliminarReserva, 1)
    
    showCard()   

    
}