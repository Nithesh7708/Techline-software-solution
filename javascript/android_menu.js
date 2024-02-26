// menu bar open and close section
function menu_open() {
   document.getElementById("menu_bar_android").style.display = "block";
   document.getElementById("menu_bar_top_close").style.display = "block";
   document.getElementById("menu_bar_top").style.display = "none";
 }
 
 function menu_close() {
   document.getElementById("menu_bar_android").style.display = "none";
   document.getElementById("menu_bar_top_close").style.display = "none";
   document.getElementById("menu_bar_top").style.display = "block";
 }
// function menu_closed_foceus(){
//    aleart("closed")
// }