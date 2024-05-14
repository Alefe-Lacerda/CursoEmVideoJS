var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`São exatamente ${hora} horas e ${minuto} minutos`)
if (hora < 12){
    console.log('Bom dia! O sol já nasceu lá na fazendinha.')
} else if (hora < 18) {
    console.log('Boa tarde! Na fazendinha deve tá fazeno calor.')
} else{
    console.log('Buenas notches!')
}