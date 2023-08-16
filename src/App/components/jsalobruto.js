function lol (){
    const carrucel = document.getElementsByClassName("sep_")
    carrucel[0].addEventListener("wheel", function(event){
        if(event.deltaY > 0){
            window.location.href = "#quienes-somos"
            //alert(event.deltaY)    
        }
        else{
            window.location.href = "#carrucel"
        }
        //event.deltaY
        event.preventDefault()
        console.log(event.deltaY)
    })
    console.log(carrucel[0])
}
module.exports = lol