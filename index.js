

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart count
let count = 0;
const countDisplay = document.querySelectorAll('.heartClick');
for (const counts of countDisplay) {
     counts.addEventListener('click', function (){
    count++;
    getElement('heartCount').innerText = count;
})
}


// copy count
const copy = document.querySelectorAll('.copyBtn');
for (const copies of copy) {
     copies.addEventListener('click', function (){
    count++;
    getElement('copied').innerText = count;
})
}


//calling count 
/*
const calls = document.querySelectorAll('.callBtn');
for (const call of calls) {
    call.addEventListener('click', function (){
     
        const cardHeading =document.getElementsByClassName('cardHeading')[0].innerText;
        const cardNumber =document.getElementsByClassName('number')[0].innerText;


        console.log(cardHeading,cardNumber)
        alert(`Calling ${cardHeading} ${cardNumber}`);

    })
}
*/


const calls = document.querySelectorAll('.callBtn');

for (const call of calls) {
  call.addEventListener('click', function () {
    const card = call.closest('.card'); 
    const cardHeading = card.getElementsByClassName('cardHeading')[0].innerText;
    const cardNumber = card.getElementsByClassName('number')[0].innerText;

    alert(`Calling ${cardHeading} ${cardNumber}`);

    const starElement = getElement('starDecrease');
    let starValue = parseInt(starElement.innerText);
    starValue = starValue - 20 ;

     if (starValue < 0) starValue = 0;
        starElement.innerText = starValue;


      const time = new Date ();  
      const hours = time.getHours()
      const minutes = time.getMinutes()
      const seconds = time.getSeconds()
      const currentTime = `${hours} : ${minutes}:${seconds}`
      

      const div = getElement('card-container');
      const newDiv = document.createElement('div') ;
      newDiv.innerHTML = `
      <div class="bg-[#fafafa] rounded-md p-5 mt-3">
        <h1 class="inter font-semibold">${cardHeading}</h1>
        <div class="hind-madurai flex justify-between text-[#5c5c5c]">
            <h4 >${cardNumber}</h4>
            <p>${currentTime}</p>           
        </div>
      </div>
      
      `;
      div.append(newDiv);
      

  });
};



/*
*appent tag:
    <div class="bg-[#fafafa] rounded-md p-5 mt-3">
        <h1 class="inter font-semibold">Fire Service Number</h1>
        <div class="hind-madurai flex justify-between text-[#5c5c5c]">
            <h4 >999</h4>
            <p>11:36:58 AM</p>           
        </div>
    </div>

*/ 
                     
