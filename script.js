const allBtn = document.getElementsByClassName("bus");
let count = 0;
let booking = 40;
 for(const btn of allBtn){
    btn.addEventListener("click", function(e){   
        count = count +1;
        setInnerText("booking-seats", count);
        booking = booking -1;
        setInnerText("seat-left", booking);
        
    });
 }

 function setInnerText(id, value){
    document.getElementById(id).innerText = value;
 }


let totalPrice = 0;
const seats = document.querySelectorAll(".seat");


for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    seat.addEventListener("click", function (){
    //    console.log("CLICKED")
    const title = seat.querySelector("h1").innerText;
    const seatType = seat.querySelector("p").innerText;
    const ticketPrice = parseFloat(seat.querySelector("h3").innerText.split(" "));
   

    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = title;
    titleContainer.appendChild(p);

    const classContainer = document.getElementById("class-container");
    const h2 = document.createElement("h2");
    h2.innerText = seatType;
    classContainer.appendChild(h2);

    const priceContainer = document.getElementById("price-container");
    const h3 = document.createElement("h3");
    h3.innerText = ticketPrice;
    priceContainer.appendChild(h3);

   
    totalPrice += ticketPrice;
    document.getElementById("totalPrice").innerText = totalPrice;   
         

    })
    
}

const discountBtn = document.getElementById("apply-btn");
discountBtn.addEventListener("click",function(){
 const couponElement = document.getElementById("discount-input").value;
 const couponCode = couponElement.split(" ").join("").toUpperCase();
  console.log(couponCode)

 
   
 if(totalPrice >= 2200){
    // alert("You Can't Buy More Than 4 Tickets");
    seats[index].setAttribute("disabled" , true);


    if(couponCode === "NEW15"){
        const discountElement = document.getElementById("discountPrice");
        const discountAmount = totalPrice - (totalPrice * 0.15);
        discountElement.innerText = discountAmount;

        document.getElementById("discount-input").style.display = "none";
        document.getElementById("apply-btn").style.display = "none";

 
        
    }else if(couponCode === "COUPLE20"){
        const discountElement = document.getElementById("discountPrice");
        const discountAmount = totalPrice - (totalPrice * 0.2);
        discountElement.innerText = discountAmount; 
        document.getElementById("discount-input").value = "";
        
    }else {
        alert("invalid coupon")
        
        document.getElementById("discount-input").value = "";
    }
   
 }else{
    alert("Please at least buy 4 tickets")
    document.getElementById("discount-input").value = "";
 }
});
    


