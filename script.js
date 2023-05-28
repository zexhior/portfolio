const night = document.querySelector('.night');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    const width = Math.floor(Math.random() * (5 - 2) + 2);
    const posx = Math.floor(Math.random() * ((window.screen.width - 100) - 1));
    const posy = Math.floor(Math.random() * (500 - 1));
    const speed = Math.floor(Math.random() * (60 - 31) + 30);
    star.classList.add('star');
    star.style.width = `${width}px`;
    star.style.height = `${width}px`;
    star.style.borderRadius = `${width}px`;
    star.style.position = 'absolute';
    star.style.left = `${posx}px`;
    star.style.top = `${posy}px`;
    star.style.animation = `goup ${speed}s infinite ease-in`;
    star.style.backgroundColor = 'white';
    night.appendChild(star);
}