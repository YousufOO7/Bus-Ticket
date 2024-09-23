const selectSeat = document.getElementById('select-seat');
const seatCount = document.getElementById ('seat-count');
const availableSeat = document.getElementById('available-seat');
const totalPriceEl = document.getElementById ('total-price');
const defaultText = document.getElementById ('default-text');
const couponInput = document.getElementById ('coupon-input');
const couponBtn = document.getElementById ('coupon-btn');
const grandTotal = document.getElementById ('grand-total');
const phoneNumber = document.getElementById ('phone-number');
const nextBtn = document.getElementById ('next-btn');

let selectSeatEl = [];
let totalPrice = 0;
function seatButtonClicked (event){
    const value = event.innerText;
    if(selectSeatEl.includes(value)){
        return alert("Seat Is Already Booked")
    }
    else if(selectSeatEl.length < 4){
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        selectSeatEl.push(event.innerText);
        seatCount.innerText = selectSeatEl.length;
        
        const availableSeatValue = parseFloat(availableSeat.innerText);
        const newAvailableSeatValue =availableSeatValue - 1;
        availableSeat.innerText = newAvailableSeatValue;
        // Default text 
        defaultText.classList.add ('hidden')
    
        selectSeat.innerHTML += `<li class="flex justify-between font-normal text-base">
            <p>${event.innerText}</p>
            <p>Economy</p>
            <p>550</p>
        </li>
        `
    
        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        if(selectSeatEl.length > 3){
            couponInput.removeAttribute('disabled');
            couponBtn.removeAttribute('disabled');
        }
    }
    else{
        return alert("Maximum Seat Is Booked")
    }
}


document.getElementById('coupon-btn').addEventListener('click', function(event){
    const couponInputValue = couponInput.value
    if(couponInputValue !== 'NEW50' && couponInputValue !== 'Couple 20'){
        return alert('Your Coupon Code Is Not Valid');
    }

    let couponValue = 0;
    if(couponInputValue == 'NEW50'){
        couponValue = totalPrice * .15;
    }
    else if(couponInputValue == 'Couple 20'){
        couponValue = totalPrice * .20;
    }

    const showCouponPrice = document.getElementById('show-coupon-price');
    showCouponPrice.innerHTML = `
                        <p>Discount</p>
                        <p>
                            <span>BDT:</span>
                            <span>-${couponValue.toFixed(2)}</span>
                        </p>
    `

    const grandPrice = totalPrice - couponValue;
    grandTotal.innerText = grandPrice.toFixed(2);
})

phoneNumber.addEventListener('input', function(event){
    const phoneNumberValue = event.target.value;
    if(phoneNumberValue.length >= 11){
        nextBtn.removeAttribute('disabled');
    }
})

document.getElementById('my_modal_1').addEventListener('click', function(){
    window.location.reload();
})
