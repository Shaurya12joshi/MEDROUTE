const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    requestAnimationFrame(() => {
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.remove("opacity-0");
    });
    overlay.classList.remove("opacity-0");
    overlay.classList.remove("pointer-events-none");

});

function closeSidebar() {

    sidebar.classList.add("translate-x-full");
    sidebar.classList.add("opacity-0");
    overlay.classList.add("opacity-0");
    overlay.classList.add("pointer-events-none");
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 500);

}
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// PREVENT CLOSING WHEN CLICKING INSIDE SIDEBAR
sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
});
const testimonials = [
            { initials:'AK', bg:'bg-blue-100', color:'text-blue-900', quote:'"Found an English-speaking doctor in Jaipur within 2 minutes. Absolute lifesaver during my solo trip."', name:'Anika K.', loc:'Tourist from Germany' },
            { initials:'RS', bg:'bg-green-100', color:'text-green-900', quote:'"Was in Hyderabad for work, fell sick at midnight. MedRoute showed me a 24/7 clinic 0.3 km away."', name:'Rahul S.', loc:'Business traveler, Delhi' },
            { initials:'MJ', bg:'bg-amber-100', color:'text-amber-900', quote:'"As a foreign student in Pune, I had no idea where to go. This made healthcare feel less scary."', name:'Marco J.', loc:'Student from Italy' },
            { initials:'PL', bg:'bg-red-100', color:'text-red-900', quote:'"Emergency mode found the nearest ER in seconds. I didn\'t have to think — just followed directions."', name:'Preethi L.', loc:'Domestic traveler, Kerala' },
        ];

        let current = 0; let timer;
        const dotsEl = document.getElementById('t-dots');

        testimonials.forEach((_, i) => {
            const d = document.createElement('button');
            d.className = `h-1.5 rounded-full transition-all duration-200 ${i === 0 ? 'w-4 bg-[#D0423A]' : 'w-1.5 bg-slate-300'}`;
            d.addEventListener('click', () => { clearInterval(timer); show(i); startTimer(); });
            dotsEl.appendChild(d);
        });

        function show(i) {
            current = i;
            const t = testimonials[i];
            const av = document.getElementById('t-avatar');
            av.textContent = t.initials;
            av.className = `w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${t.bg} ${t.color}`;
            document.getElementById('t-quote').textContent = t.quote;
            document.getElementById('t-name').textContent = t.name;
            document.getElementById('t-loc').textContent = '· ' + t.loc;
            dotsEl.querySelectorAll('button').forEach((d, idx) => {
                d.className = `h-1.5 rounded-full transition-all duration-200 ${idx === i ? 'w-4 bg-[#D0423A]' : 'w-1.5 bg-slate-300'}`;
            });
        }

        function startTimer() { timer = setInterval(() => show((current + 1) % testimonials.length), 3500); }
        startTimer();