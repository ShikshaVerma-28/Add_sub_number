(function () {
    const button = document.querySelectorAll('.btn')
    // const lower = document.querySelector('.lower')
    // const add = document.querySelector('.add')

    let count = 0

    button.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (button.classList.contains('prvbtn')) {
                count--
            }
            else if (button.classList.contains('nextbtn')) {
                count++
            }

            const number = document.querySelector('.box')
            number.textContent = count

            if(count<0){
                number.style.color='red'
            }
            else if (count>0){
                number.style.color='green'
            }
            else{
                number.style.color='black'

            }
        })
    });
})()
