
document.addEventListener('DOMContentLoaded', e => {
    const $sectionsEspia = document.querySelectorAll('section[data-scroll-spy]');
    const cb = (entries) => {
        // console.log("entries", entries);
        entries.forEach((entry) => {
            // console.log("entry", entry)
            const id = entry.target.getAttribute("id");
            console.log(id);
            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("activeA");
            }
            else{
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("activeA");
            }

        })
    }

    const observer = new IntersectionObserver(cb, {
        // root
        // rootMargin: "-270px",
        threshold: 0.5
    });

    $sectionsEspia.forEach(el => observer.observe(el));
}) 