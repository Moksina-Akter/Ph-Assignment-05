
//common function
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

    const card = copies.closest ('.card');
    const number = card.getElementsByClassName ('number')[0].innerText;

    navigator.clipboard.writeText(number);

    alert(`নম্বর কপি হয়েছে : ${number}` )
})
}



// calling event
const calls = document.querySelectorAll('.callBtn');

for (const call of calls) {
  call.addEventListener('click', function () {
    const card = call.closest('.card'); 
    const cardHeading = card.getElementsByClassName('cardHeading')[0].innerText;
    const cardNumber = card.getElementsByClassName('number')[0].innerText;
    

    const starElement = getElement('starDecrease');
    let starValue = parseInt(starElement.innerText);
    starValue = starValue - 20 ;
    
    
    if (starValue >= 0 ) {

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

      alert(`📞 Calling ${cardHeading} ${cardNumber}`);

    } 
    else {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
    }
    
  });
};


//button clear
getElement('clearBtn').addEventListener('click', function(){
   const div = getElement('card-container');
   div.innerHTML = "";

})

  