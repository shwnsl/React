// function ctt(callback) {
//     for (let i = 0; i < 3; i++) {
//         callback();        
//     }
// };

// let fun = function () {
//     alert('hi')
// };

// ctt(fun);

window.onload = function () {
    // let op = '';
    // for (let i = 0; i < 300; i++) {
    //     op += '<div></div>';
    // }
    // document.body.innerHTML = op;
    // let div = document.querySelectorAll('div');
    // for (let i = 0; i < div.length; i++) {
    //     let dv = div[i];

    //     dv.style.height = '20px';
    //     dv.style.background = 'rgb(' + i + 1 + ',' + i + 15 + ',' + i + 20 + ')';
    // }

    let img = document.getElementById('img');

    img.src = 'http://via.placeholder.com/300x200';
    img.width = 300;
    img.height = 200;

    let clock = document.getElementById('clock');

    setInterval(function() {
        let now = new Date();
        clock.innerHTML = now.toString();
    }, 1000);

    
}

function AlertC(obj) {
    obj.textContent = obj.textContent + '★';
}