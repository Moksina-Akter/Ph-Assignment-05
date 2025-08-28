
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

    const  cardNumber=copies.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

    navigator.clipboard.writeText(cardNumber);

    alert(`নম্বর কপি হয়েছে : ${cardNumber}` )
})
}


//calling event
const calls = document.querySelectorAll('.callBtn');
for (const call of calls) {
  call.addEventListener('click', function () {
    const  cardHeading= call.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    const  cardNumber= call.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

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

  