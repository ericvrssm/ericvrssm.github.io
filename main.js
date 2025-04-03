function updateTimer() {
    const now = new Date();
    const startDate = new Date('2024-03-25'); // Defina a data de início desejada (pode ser alterada)
    const timeDifference = now - startDate;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = `${years} ANO, ${days} DIAS, ${hours} HORAS, ${minutes} MINUTOS e ${seconds} SEGUNDOS`;
}

setInterval(updateTimer, 1000);