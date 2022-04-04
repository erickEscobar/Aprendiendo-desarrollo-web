
document.addEventListener('DOMContentLoaded', e => {
    const $videos = document.querySelectorAll('video[data-smart-video]');

    const cb = (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.play();
            }
            else{
                entry.target.pause();
            }

            window.addEventListener('visibilitychange', e => document.visibilityState === "visible" ? entry.target.play() : entry.target.pause());
        });
    }

    const observerVideo = new IntersectionObserver(cb, {threshold: 0.5});

    $videos.forEach((el) => observerVideo.observe(el));
})