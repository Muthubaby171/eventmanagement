<script>
function ShowPopup()
{
    document.getElementById("popup").style.display="block";
    document.getElementById("popupText").innerHTML="Thank you ! We will Contact you soon.";
}
fuction ClosePopup()
{
    document.getElementById("popup").style.display="none";

}
function bookNow(service)
{
    document.getElementById("popup").style.display="block";
    document.getElementById("popupText").innerHTML=service+"Booked Successfully!";
}
</script>