function updateClock(){
    const now = new Date
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    const timeString = `${hours}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

//Atualiza o tempo a cada segundo 
setInterval(updateClock,1000)

//Atualiza o relogio imediatamente quando recarregar a pagina

updateClock();