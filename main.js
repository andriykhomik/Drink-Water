const smallCups = document.querySelectorAll('.cup-small');
const litters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

updateBigCup();

smallCups.forEach((cup, idx)=> {
    cup.addEventListener('click', ()=> {
        highlightCups(idx);
    })
})

function highlightCups(idx){
    if (smallCups[idx].classList.contains('full') && !smallCups[idx + 1].classList.contains('full')){
        idx--
    }

    smallCups.forEach((cup, idx2)=>{
        if (idx2 <= idx){
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    const fullPercentages = 100 / totalCups * fullCups;
    if (fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullPercentages}%`;
        percentage.innerText = `${fullPercentages}%`
    }

    if (fullPercentages === 100) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        litters.style.visibility = 'visible';
        litters.innerText = `${0.25 * (totalCups-fullCups)}L`
    }

}

