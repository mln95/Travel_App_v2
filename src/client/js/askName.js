window.onload = function(){
    const askName = prompt('What is your name ?');
    if(Client.checkName(askName)){
        document.getElementById('name').textContent += " " + askName + " :)";
    }else if(askName === null){
        alert("The value is not a name, the webpage is about to reload");
        setTimeout(() => {
            document.location.reload();
        }, 1000);;
    }
    else{
        alert("The value is not a name, the webpage is about to reload");
        setTimeout(() => {
            document.location.reload();
        }, 1000);;
    }
}
