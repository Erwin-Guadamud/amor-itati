// Referencias a elementos
const musicPlayer = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const backgroundMusic = document.getElementById('backgroundMusic');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');
const albumArt = document.getElementById('albumArt');
const discoverBtn = document.getElementById('discoverBtn');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const momentsVideo = document.getElementById('momentsVideo');

let isPlaying = false;

// Lista de canciones
const songs = [
    {
        title: "Confieso",
        artist: "Humbe",
        file: "confieso.mp3",
        image: "fotos/11.jpeg"
    },
    {
        title: "La Promesa",
        artist: "Melendi",
        file: "Melendi - La promesa (Videoclip oficial) - (320 Kbps).mp3",
        image: "fotos/11.jpeg"
    }
];

let currentSongIndex = 1; // Empezar con Melendi (La Promesa)

// Función para cargar una canción
function loadSong(index) {
    const song = songs[index];
    backgroundMusic.src = song.file;
    document.querySelector('.song-title').textContent = song.title;
    document.querySelector('.artist-name').textContent = song.artist;
    albumArt.src = song.image;
    
    // Reproducir automáticamente la nueva canción
    backgroundMusic.play().then(() => {
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        albumArt.style.animation = 'rotate 20s linear infinite';
    }).catch(() => {
        console.log('No se pudo reproducir automáticamente');
    });
}

// Contador de días juntos
function updateDaysCounter() {
    const startDate = new Date('2024-04-27'); // Fecha desde que son novios
    const today = new Date();
    
    // Calcular diferencia en días
    const timeDiff = today - startDate;
    const daysTogether = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
    // Actualizar el contador en la página con animación
    const counterElement = document.getElementById('daysCounter');
    if (counterElement) {
        let currentCount = 0;
        const increment = Math.ceil(daysTogether / 50); // Velocidad de animación
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= daysTogether) {
                currentCount = daysTogether;
                clearInterval(timer);
            }
            counterElement.textContent = currentCount;
        }, 30);
    }
}

// Actualizar contador al cargar la página
updateDaysCounter();

// Formatear tiempo
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Control de música
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        albumArt.style.animation = 'none';
    } else {
        backgroundMusic.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        albumArt.style.animation = 'rotate 20s linear infinite';
    }
    isPlaying = !isPlaying;
});

// Actualizar barra de progreso
backgroundMusic.addEventListener('timeupdate', () => {
    const progress = (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
    progressFill.style.width = `${progress}%`;
    currentTime.textContent = formatTime(backgroundMusic.currentTime);
});

// Mostrar duración total
backgroundMusic.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(backgroundMusic.duration);
});

// Click en barra de progreso para cambiar posición
progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    backgroundMusic.currentTime = percent * backgroundMusic.duration;
});

// Botones anterior/siguiente para cambiar de canción
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Cuando termina una canción, pasar a la siguiente automáticamente
backgroundMusic.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Cargar la primera canción al inicio
loadSong(currentSongIndex);

// Intentar reproducir automáticamente cuando el usuario interactúe por primera vez
let hasStarted = false;

function startMusic() {
    if (!hasStarted && !isPlaying) {
        backgroundMusic.play().then(() => {
            isPlaying = true;
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            albumArt.style.animation = 'rotate 20s linear infinite';
            hasStarted = true;
        }).catch(() => {
            console.log('No se pudo reproducir automáticamente');
        });
    }
}

// Escuchar varios eventos para iniciar la música
document.addEventListener('click', startMusic, { once: true });
document.addEventListener('scroll', startMusic, { once: true });
document.addEventListener('keydown', startMusic, { once: true });
document.addEventListener('touchstart', startMusic, { once: true });

// Intentar iniciar inmediatamente al cargar
setTimeout(() => {
    startMusic();
}, 500);

// Animación de scroll para las tarjetas
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas las tarjetas de momentos
document.querySelectorAll('.moment-card').forEach(card => {
    observer.observe(card);
});

// Abrir modal del video
discoverBtn.addEventListener('click', () => {
    videoModal.classList.add('active');
    
    // Configurar el video sin audio y más lento
    momentsVideo.muted = true;
    momentsVideo.playbackRate = 0.3; // 30% de velocidad (muy lento)
    momentsVideo.play();
    
    // Cambiar a la canción "Confieso" y reproducirla
    currentSongIndex = 0; // Confieso está en el índice 0
    loadSong(currentSongIndex);
});

// Cerrar modal
closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    momentsVideo.pause();
    momentsVideo.currentTime = 0;
    momentsVideo.playbackRate = 1; // Restaurar velocidad normal
});

// Cerrar modal al hacer clic fuera del contenido
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeModal.click();
    }
});

// Efecto parallax suave en scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Prevenir que el usuario haga scroll mientras el video está abierto
videoModal.addEventListener('transitionend', () => {
    if (videoModal.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});
