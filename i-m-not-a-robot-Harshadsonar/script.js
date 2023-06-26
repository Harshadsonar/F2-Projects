let n = Math.floor(Math.random() * 5 + 1);
let main = document.getElementsByTagName('main')[0];
let images = document.querySelectorAll('img');
var randomImage = document.getElementsByClassName('none')[0];
let imageContainer = document.getElementsByClassName("image")[0];
let arr = [];
let reset = document.getElementById('reset');
reset.style.display = 'none';
let verify = document.getElementById('verify');
let result = document.getElementsByClassName('para')[0];
verify.style.display = 'none';
randomImage.setAttribute("class", `img${n}`);
images.forEach((e) => {
    e.addEventListener('click', () => {
        e.style.border = "8px solid blue";
        arr.push(e.getAttribute('class'));
        if (arr.length > 0 && arr.length < 3) {
            reset.style.display = 'block';
        }
        if (arr.length == 2) {
            verify.style.display = 'block';
        }
        if (arr.length > 2) {
            reset.style.display = 'none';
            verify.style.display = 'none';
            let para = document.createElement('p');
            para.innerText = "Please select only 2 images. Kindly refresh the page";
            main.append(para);
        }
    })
})

reset.addEventListener('click', () => {
    for (let i = 0; i <= arr.length; i++) {
        arr.pop();
    }
    reset.style.display = "none";
    result.innerText = "";
    verify.style.display = 'none'
    images.forEach((e) => {
        e.style.border = 'none';
    })
})

verify.addEventListener('click', () => {
    if (arr[0] == arr[1]) {
        result.innerText = 'You are a human. Congratulations!.';
    } else {
        result.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
    }
})

imageContainer.append(randomImage);