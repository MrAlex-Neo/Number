// let number = +prompt('Введите номер телефона:')
// if (number.length == 12) {
//     let array = String(number).split('').map(Number);
//     let num = (`'+'${array[0,1,2]} (${array[3,4]}) ${array[5,6,7]}-${array[8,9]}-${array[10,11]}`)
//     alert(num)
//     console.log(num)
// } else {
//     alert('Нет, так не пойдет, введите номер снова и постарайтесь хотябы в этот раз не ошибаться!')
// }

let number = +prompt('Введите номер телефона любого узбекского мобильного оператора:')
let ar = String(number).split('').map(Number);
if (number.length = 12 && `${ar[0]}${ar[1]}${ar[2]}`== '998') {
    let num = (`+${ar[0]}${ar[1]}${ar[2]} (${ar[3]}${ar[4]}) ${ar[5]}${ar[6]}${ar[7]}-${ar[8]}${ar[9]}-${ar[10]}${ar[11]}`)
    alert(num)
    console.log(num)
} else {if (number.length = 13 && `${ar[0]}${ar[1]}${ar[2]}${ar[3]}`== '+998') {
        let num = (`+${ar[0]}${ar[1]}${ar[2]}${ar[3]} (${ar[4]}${ar[5]}) ${ar[6]}${ar[7]}${ar[8]}-${ar[9]}${ar[10]}-${ar[11]}${ar[12]}`)
        alert(num)
        console.log(num)
        } else {
            alert('Вы совершили ошибку! Проверьте правильность ввода и не беспокойте болше нас по мелочам!!!')
        }
}




