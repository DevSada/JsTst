const obj = {
    0: { name: 'a' },
    1: { name: 'b' },
    2: { name: 'c' },
    3: { name: 'd' },
    length: 4,
}

Array.prototype.forEach.call(obj, (d) => {
    console.log(d)
})

// event.preventDefault(); - отменяет стандартное поведение(например ссылки)

// const btn = document.createElement('button')
// btn.innerText = "Push me"

// btn.addEventListener('click', function(event) {
//     console.log(event)
//     console.log(this)
// })

// document.body.append(btn)

// const outer = document.querySelector('outer')
// outer.addEventListener('click', function (e) {
//     console.log(event)
// })