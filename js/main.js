const themeBtn=document.getElementById('themeBtn');
function setTheme(dark){document.body.classList.toggle('dark',dark);themeBtn.textContent=dark?'☀️':'🌙';localStorage.setItem('theme',dark?'dark':'light')}
themeBtn.onclick=()=>setTheme(!document.body.classList.contains('dark'));
if(localStorage.getItem('theme')==='dark')setTheme(true);

const welcomeBg=document.getElementById('welcomeBg');
function closeWelcome(){welcomeBg.classList.remove('open');document.body.style.overflow=''}
document.getElementById('welcomeClose').onclick=closeWelcome;
document.getElementById('welcomeBtn').onclick=closeWelcome;
welcomeBg.addEventListener('click',e=>{if(e.target===welcomeBg)closeWelcome()});

const hamburger=document.getElementById('hamburger');
hamburger.onclick=()=>document.getElementById('navLinks').classList.toggle('open');
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navLinks').classList.remove('open')));

const revIo=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revIo.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>revIo.observe(el));

const modalBg=document.getElementById('modalBg');
function openModal(title,sub,html){document.getElementById('modTitle').textContent=title;document.getElementById('modSub').textContent=sub;document.getElementById('modBody').innerHTML=html;modalBg.classList.add('open');document.body.style.overflow='hidden'}
function closeModal(){modalBg.classList.remove('open');document.body.style.overflow=''}
function closeMod(e){if(e.target===modalBg)closeModal()}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeWelcome();closeModal()}});

function openDoc(name,url){
let body=url?`<iframe class="doc-frame" src="${url}"></iframe>`:`<div class="notice">📎 <b>${name}</b> ka marksheet PDF/link abhi add nahi kiya gaya hai.</div><div class="tag-row"><span class="tag">📄 PDF Required</span><span class="tag">🔗 Link Pending</span></div>`;
openModal(name,'Result Document',body)
}
function openPending(name){openModal(name+' — Result','Examination Pending',`<div class="notice">⏳ <b>${name}</b> ka result/document abhi pending hai.<br>Result aane ke baad yahan document connect kiya ja sakta hai.</div>`)}
function openFamily(role,name,detail,img){openModal('👨‍👩‍👧 '+role,name,`<img class="family-modal-img" src="${img}" alt="${name}"><p><b>${name}</b><br>${detail}</p>`)}
function showSkillInfo(name){const box=document.getElementById('skillInfoBox');document.getElementById('skillIcon').textContent=skillData[name].icon;document.getElementById('skillName').textContent=name;document.getElementById('skillDesc').textContent=skillData[name].desc;box.classList.add('visible')}

const skillData={HTML:{icon:'🌐',desc:'HTML webpage ka structure banata hai.'},CSS:{icon:'🎨',desc:'CSS website ka design, colors, layout, animation aur responsive appearance control karta hai.'},JavaScript:{icon:'⚡',desc:'JavaScript website ko interactive banata hai.'},C:{icon:'🔧',desc:'C programming ki strong foundation hai.'},'C++':{icon:'⚙️',desc:'C++ object-oriented programming ke saath useful hai.'},'MS Word':{icon:'📝',desc:'Professional documents aur reports ke liye useful office tool.'},'MS Excel':{icon:'📊',desc:'Data entry, formulas, calculations, charts aur analysis ke liye useful.'},'MS PowerPoint':{icon:'📽️',desc:'Professional presentations banane ke liye useful tool.'}};
function renderChips(list,id){const w=document.getElementById(id);list.forEach(name=>{const b=document.createElement('button');b.className='skill-chip';b.innerHTML=`${skillData[name].icon} ${name}`;b.onclick=()=>showSkillInfo(name);w.appendChild(b)})}
renderChips(['HTML','CSS','JavaScript','C','C++'],'webChips');renderChips(['MS Word','MS Excel','MS PowerPoint'],'officeChips');

document.getElementById('contactForm').addEventListener('submit',e=>{
e.preventDefault();
openModal('✅ Submitted Successfully','Contact Form',`<div class="success-box"><div class="success-icon">✓</div><h3>Details Submitted Successfully!</h3><p>Thank you for contacting me.</p></div>`);
e.target.reset();
});

const activeNavLinks=document.querySelectorAll('.nav-links a'), activeSections=document.querySelectorAll('section[id]');
function updateActiveNavigation(){let currentId='';activeSections.forEach(section=>{if(window.scrollY>=section.offsetTop-140)currentId=section.id});activeNavLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+currentId))}
window.addEventListener('scroll',updateActiveNavigation,{passive:true});updateActiveNavigation();
activeNavLinks.forEach(link=>link.addEventListener('click',function(e){const targetId=this.getAttribute('href');if(targetId?.startsWith('#')){const target=document.querySelector(targetId);if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'})}}}));



function openHobby(card){

    const modal = document.getElementById("hobbyModal");

    const icon =
        card.querySelector(".hobby-icon")
        .textContent
        .trim();

    const title =
        card.querySelector(".hobby-name")
        .textContent
        .trim();

    const points =
        card.querySelectorAll(".interest-point");

    document.getElementById("popupIcon").textContent = icon;

    document.getElementById("popupTitle").textContent = title;

    const popupPoints =
        document.getElementById("popupPoints");

    popupPoints.innerHTML = "";

    points.forEach((point,index)=>{

        const number =
            point.querySelector("span")
            .textContent
            .trim();

        const text =
            point.textContent
            .replace(number,"")
            .trim();

        popupPoints.innerHTML += `

            <div
                class="popup-point"
                style="animation-delay:${index * 0.06}s"
            >

                <span class="popup-point-number">
                    ${number}
                </span>

                <span>
                    ${text}
                </span>

            </div>

        `;
    });

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeHobby(){

    const modal =
        document.getElementById("hobbyModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* CLICK OUTSIDE POPUP */

document
.getElementById("hobbyModal")
.addEventListener("click",function(e){

    if(e.target === this){
        closeHobby();
    }

});


/* ESC KEY */

document.addEventListener("keydown",function(e){

    if(e.key === "Escape"){
        closeHobby();
    }

});


(function(){

    let current = 0;
    let playing = true;
    let timer;

    const total = 5;

    const slides =
        document.getElementById("myhomeSlides");

    const slider =
        document.getElementById("myhomeSlider");

    const playBtn =
        document.getElementById("myhomePlay");

    const dotsBox =
        document.getElementById("myhomeDots");

    // Create dots

    for(let i = 0; i < total; i++){

        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "myhome-dot";

        dot.setAttribute("aria-label","Image "+(i+1));

        dot.onclick = function(){
            current = i;
            update();
        };

        dotsBox.appendChild(dot);
    }

    // Update Slider

    function update(){

        slides.style.transform =
            `translateX(-${current * 100}%)`;

        dotsBox.querySelectorAll(".myhome-dot")
        .forEach((dot,i)=>{
            dot.classList.toggle("active",i===current);
        });

    }

    // Next and Previous

    window.myHomeChange = function(direction){

        current = (current + direction + total) % total;

        update();

    };

    // Automatic Slider

    function start(){

        clearInterval(timer);

        if(playing){

            timer = setInterval(function(){

                window.myHomeChange(1);

            },3000);

        }

    }

    // Play and Pause

    window.myHomeToggle = function(){

        playing = !playing;

        playBtn.textContent =
            playing ? "⏸ Pause" : "▶ Play";

        start();

    };

    // Pause on Mouse Hover

    slider.addEventListener("mouseenter",function(){
        clearInterval(timer);
    });

    slider.addEventListener("mouseleave",start);

    // Mobile Touch Pause

    slider.addEventListener("touchstart",function(){
        clearInterval(timer);
    });

    slider.addEventListener("touchend",start);

    // Initialize

    update();
    start();

})();
