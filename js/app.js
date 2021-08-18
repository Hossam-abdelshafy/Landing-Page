/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
let getNavUl = document.querySelector("#navbar__list");
let getmain = document.querySelector(".get");
let getLi = document.getElementsByTagName('a');
let secCount , menuCount ;
secCount = 5;
menuCount = 5;


// build the nav

    getNavUl.innerHTML = ` 
    <li><a class="menu__link" data-link ="section1">section1</a></li>
    <li><a class="menu__link" data-link ="section2">section2</a></li>
    <li><a class="menu__link" data-link ="section3">section3</a></li>
    <li><a class="menu__link" data-link ="section4">section4</a></li>
    `;


for (const link of getLi) {
    
    link.addEventListener('click',function(){
        const ele = document.getElementById(link.getAttribute("data-link"));
        ele.scrollIntoView({
            behavior : 'smooth',
            block : 'center'
        });

    });  
}

//creat a section 
const creatSection = (num) =>
    `
    <section id="section${num}" data-nav="Section ${num}" ">
    <div class="landing__container">
        <h2>Section ${num}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>
    `;

// active section after pressing the add section button
function sec (a)
{
 
    let Sec = creatSection(a);
    getmain.insertAdjacentHTML('beforeend',Sec);
    let sections = document.querySelectorAll('Section') ;
 
    function sectionView(elem){
        let postion = Math.floor( elem.getBoundingClientRect().top);
        
        return( postion );
    };

    function toggleActive(){
        for (const sect of sections) {
    
            if ( sectionView(sect) < 285 && sectionView(sect) >= -285 ) {
                if(!sect.classList.contains('your-active-class'))
                    {
                        sect.classList.add('your-active-class');
                    }  
            }else{sect.classList.remove('your-active-class')}
        }  
    };
    document.addEventListener("scroll",toggleActive);
};

 //active section if you don't press the add section button 
 let sections = Array.from(document.querySelectorAll('Section'))  ;
 
    function sectionView(elem){
        let postion = Math.floor( elem.getBoundingClientRect().top);
        
        return( postion );
    };

    function toggleActive(){
        for (const sect of sections) {

            if ( sectionView(sect) < 285 && sectionView(sect) >= -285 ) {
                if(!sect.classList.contains('your-active-class'))
                    {
                        sect.classList.add('your-active-class');
                    }  
            }else{sect.classList.remove('your-active-class')}
        }  
    };
    document.addEventListener("scroll",toggleActive);

//when you press add section button

document.querySelector(".addSection").addEventListener("click",function(){
    
    sec(secCount);
    menu(secCount);
    secCount++;
});

//adding a section to navBar
const creatMenu = (num) =>`

<li><a class="menu__link" data-link ="section${num}">section${num}</a></li>
`;

function menu (a)
{
    let Menu = creatMenu(a);
    getNavUl.insertAdjacentHTML('beforeend',Menu);
    let getLi = document.getElementsByTagName('a');
    for (const link of getLi) {
        
        link.addEventListener('click',function(){
            const ele = document.getElementById(link.getAttribute("data-link"));
            ele.scrollIntoView({
                behavior : 'smooth',
                block : 'center'
            });
    
        });  
    }
    
};

// Pressing menu button to toggle the visibility

document.querySelector(".press").addEventListener("click",function(){

    getNavUl.classList.toggle('active');
});




