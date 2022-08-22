let cb = document.getElementById('cb')


const func = () => {
    cb.checked == true ?
    localStorage.setItem (
        'theme', 
        'dark'
    ):
    localStorage.setItem (
        'theme', 
        'light'  
    )
    if (
        localStorage.getItem('theme') == 'dark'
    ) {
        document.body.style.backgroundColor = '#262626'
    document.body.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    }
}

function theme () {
    if (
        localStorage.getItem('theme') == 'dark'
    ) {
        cb.checked = true
    } else {
        cb.checked = false
    }
    if (
        localStorage.getItem('theme') == 'dark'
    ) {
        document.body.style.backgroundColor = '#262626'
    document.body.style.color = 'white'
    } else {
        document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    }
}

theme()


   