const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

let isTrue = false;

const playBttn = document.querySelector('.bttn');
const replayBttn = document.querySelector('.fa-reply');

function setCounter(){
    
    playBttn.addEventListener('click',function(){
        isTrue = !isTrue;
        if(isTrue){
            const hourValue = hour.value;
            const minuteValue = minute.value;
            const secondValue = second.value;

            const now = new Date();
            const targetTime = new Date(now.getTime()+hourValue*60*60*1000+minuteValue*60*1000+secondValue*1000);

            intervalId = setInterval(function(){
                const presentTime = Date.now();
                const remainingTime = targetTime - presentTime;
                if(remainingTime<=0){
                    isTrue = false;
                    clearInterval(intervalId);
                    playBttn.classList.remove('fa-pause');
                    playBttn.classList.add('fa-play');
                }
                else{
                    const hourVal =Math.floor((remainingTime) % (24*60*60*1000) / (60*60*1000)).toString().padStart(2,'0');
                    const minuteVal = Math.floor((remainingTime) % (60*60*1000) / (60*1000)).toString().padStart(2,'0');
                    const secondVal = Math.floor((remainingTime) % (60*1000) / (1000)).toString().padStart(2,'0');

                    hour.value = hourVal;
                    minute.value = minuteVal;
                    second.value = secondVal; 
                }               
            }
            ,1000);

            playBttn.classList.remove('fa-play');
            playBttn.classList.add('fa-pause');
        }
        else{
            playBttn.classList.remove('fa-pause');
            playBttn.classList.add('fa-play');
            clearInterval(intervalId);
        }
    })
    
}

replayBttn.addEventListener('click',function(){
    hour.value = '';
    minute.value = '';
    second.value = ''; 
})
setCounter();
