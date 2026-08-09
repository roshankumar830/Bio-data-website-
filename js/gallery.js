const gSlides = document.getElementById('gSlides');
const gDots = document.getElementById('gDots');

const galleryPhotos = [

    "5 image .webp",
    "2 image .jpeg",
    "4 image .png",
    "1 image .jpeg",
    "image 6.jpeg",
    "7 image .jpeg",
    "8 image .jpeg",
    "9 image .jpeg",
    "10 image .jpeg",
    "11 image .jpeg",
    "12 image .jpeg",
    "13 image .jpeg",
    "14 image.jpeg",

];

let gCur = 0;
let gTotal = galleryPhotos.length;

galleryPhotos.forEach((photo, i) => {

    const s = document.createElement('div');

    s.className = 'gallery-slide';

    s.innerHTML = `
        <img src="${photo}" alt="Photo ${i + 1}">
    `;

    gSlides.appendChild(s);


    const d = document.createElement('button');

    d.className = 'gallery-dot' + (i === 0 ? ' active' : '');

    d.onclick = () => gGo(i);

    gDots.appendChild(d);
});


function gUpdate() {

    gSlides.style.transform =
        `translateX(-${gCur * 100}%)`;

    document.getElementById('gNum').textContent =
        `${gCur + 1} / ${gTotal}`;

    document.querySelectorAll('.gallery-dot')
        .forEach((d, i) => {

            d.classList.toggle(
                'active',
                i === gCur
            );

        });
}


function gMove(dir) {

    gCur = (gCur + dir + gTotal) % gTotal;

    gUpdate();
}


function gGo(i) {

    gCur = i;

    gUpdate();
}


let gAuto = setInterval(() => gMove(1), 4000);


document.getElementById('gallerySlider')
    .addEventListener('mouseenter', () => {

        clearInterval(gAuto);

    });


document.getElementById('gallerySlider')
    .addEventListener('mouseleave', () => {

        gAuto = setInterval(() => gMove(1), 4000);

    });