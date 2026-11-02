import { useEffect, useState } from 'react';

const base =
    "relative rounded-[30px] px-[14px] py-[6px] text-[11px] no-underline transition duration-300 " +
    "min-[769px]:px-5 min-[769px]:py-2 min-[769px]:text-xs";
const idle = "bg-white/20 text-white hover:bg-white/35";
const on = "bg-white font-semibold text-[#b30000] shadow-[0_0_15px_rgba(255,255,255,0.6)]";

// One fixed bar at the top of the screen. Highlights the section currently in view.
export default function Navbar({ nav }) {
    const [active, setActive] = useState('info');

    useEffect(() => {
        const onScroll = () => {
            let id = 'info';
            document.querySelectorAll('section[id]').forEach((s) => {
                if (window.scrollY >= s.offsetTop - window.innerHeight / 2) id = s.id;
            });
            setActive(id);
        };
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex justify-center gap-2 bg-black/40 px-4 py-3 backdrop-blur-md min-[769px]:gap-[10px]">
            {Object.entries(nav).map(([id, label]) => (
                <a key={id} href={`#${id}`} className={`${base} ${active === id ? on : idle}`}>{label}</a>
            ))}
        </nav>
    );
}
