const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

document.getElementById("appointmentForm").addEventListener("submit",function(e){
  e.preventDefault();
  const d=new FormData(this);
  const subject=encodeURIComponent("Appointment Enquiry - Prakriti Ayurveda");
  const body=encodeURIComponent(
    `Name: ${d.get("name")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nMessage: ${d.get("message")}`
  );
  window.location.href=`mailto:Info@prakritiayurvedic.com?subject=${subject}&body=${body}`;
});
