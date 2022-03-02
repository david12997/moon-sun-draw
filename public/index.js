'use strict'

let state = document.getElementById('state');
let BodySiwtch = document.getElementById('body-switch');


//sky
const Sky = (state)=>{

    let sky = document.getElementById('sky');
    let cuantity;
    let elementClass;

    if(state !== 'sun'){

        cuantity=150;
        elementClass='backgroundSky__star';
        sky.classList.add('backgroundSky--moon');
        sky.classList.remove('backgroundSky--sun');
        
    }else{

        cuantity=100;
        elementClass='backgroundSky__cloud';
        sky.classList.add('backgroundSky--sun');
        sky.classList.remove('backgroundSky--moon');
    }

    sky.innerHTML=``;
    for(let i =0;i<cuantity;i++){

        sky.innerHTML+=`
            <div class="${elementClass}"
                style="top:${parseInt(Math.random()*(100-1)+1)}vh;left:${parseInt(Math.random()*(100-1)+1)}vw"
            ></div>
        `;
    }
}

//main obj
const ObjMain = (state)=>{

    let mainObj = document.getElementById('main-obj');
    let glow = document.getElementById('glow');
    
    MoonCrater(mainObj,state);
    
    if(state !== 'sun'){

        mainObj.classList.remove('mainSkyObj__obj--sun');
        glow.classList.remove('mainSkyObj__glow--sun');

        mainObj.classList.add('mainSkyObj__obj--moon');
        glow.classList.add('mainSkyObj__glow--moon');

        mainObj.style.boxShadow= '0px 0px 45px white;'

    }else{

        mainObj.classList.remove('mainSkyObj__obj--moon');
        glow.classList.remove('mainSkyObj__glow--moon');

        mainObj.classList.add('mainSkyObj__obj--sun');
        glow.classList.add('mainSkyObj__glow--sun');

        mainObj.style.boxShadow= '0px 0px 45px red;'
    }
}

//moon crater
const MoonCrater =(main_obj,state)=>{



    main_obj.innerHTML='';
    
    if(state === 'moon'){

        main_obj.innerHTML=`
    
        <div style="" class="mainSkyObj__craterMoon"></div>
        <div style="" class="mainSkyObj__craterMoon"></div>
        <div style="" class="mainSkyObj__craterMoon"></div>
        `;
    }

}


//ocean
const Ocean = (state)=>{

    let theOcean = document.getElementById('the-ocean');
    let reflect = document.getElementsByClassName('ocean__reflect');

    if(state !== 'sun'){

        theOcean.classList.add('ocean--moon');
        theOcean.classList.remove('ocean--sun');

        for(let i = 0; i< reflect.length;i++){

            reflect[i].classList.add('ocean__reflect--moon');
            reflect[i].classList.remove('ocean__reflect--sun');
        }
    
    }else{

        theOcean.classList.remove('ocean--moon');
        theOcean.classList.add('ocean--sun');

        for(let i = 0; i< reflect.length;i++){

            reflect[i].classList.add('ocean__reflect--sun');
            reflect[i].classList.remove('ocean__reflect--moon');
        }
    
    }
}

//Animation pointer

const AniamtionPointer = (state) =>{

    let time = 300;
    let pointer = document.getElementById('pointer');
    let bodySwitch = document.getElementById('body-switch');

    if(state === 'sun'){

        pointer.style.animationName = 'move_pointer_sun';
        setTimeout(()=>{

            bodySwitch.style.background = 'rgb(255, 123, 0)';
            pointer.style.left = '65px';
            
        },time);

    }else{

        pointer.style.animationName = 'move_pointer_moon';
        setTimeout(()=>{

            bodySwitch.style.background = '#00345d';
            pointer.style.left = '5px';
        },time);
    }
    

}

//change state moon - sun
const ChangeState = (state)=>{


    if(state.value === 'moon') state.value = 'sun'
    else if(state.value === 'sun') state.value = 'moon';

    AniamtionPointer(state.value)
    Main(state)
}



const Main = (state)=>{

    Sky(state.value);
    ObjMain(state.value);
    Ocean(state.value);

}



//event change state
BodySiwtch.addEventListener('click',()=>ChangeState(state));
window.addEventListener('load',()=>Main(state));