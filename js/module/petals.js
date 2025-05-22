export function efeitoPetala(){
    // Cria pétalas dinamicamente
      const container = document.getElementById('petals');
      const colors = ['#627ebf','#8A2BE2', '#C3B1E1', '#4B0082', '#9370DB', '#2E0854', '#e92458', '#800000' ];

      for (let i = 0; i < 80; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        const size = Math.random() * 10 + 5;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        petal.style.animationDuration = `${Math.random() * 5 + 3}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(petal);
      }
}

