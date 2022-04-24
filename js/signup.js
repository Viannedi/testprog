function checkPass()
{
    var password = document.getElementById('password');
    var statusBar = document.getElementById('statusBar'); 
    statusBar.style.display = "flex";
    var goodColor = "#3cb878";
    var badColor = "#e2502b";
 	
    if(password.value.length > 8)
    { 
        statusBar.style.backgroundColor  = goodColor;
        statusBar.innerHTML = "Надежный"
    }
    else
    {
        statusBar.style.backgroundColor  = badColor;
        statusBar.innerHTML = "Ненадежный"
        return;
    } 
}  