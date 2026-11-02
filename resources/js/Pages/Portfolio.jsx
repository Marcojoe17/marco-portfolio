import { useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import SectionTitle from '@/Components/SectionTitle';
import ProjectCard from '@/Components/ProjectCard';

// Responsive breakpoints from the original design:
// min-[769px] = tablet+, min-[1025px] = small desktop+, min-[1201px] = large desktop

// Position + tilt of each floating skill icon (the class name comes from config/portfolio.php)
const ICON_POS = {
    icon1: 'top-[40px] left-[100px] [--r:-15deg]',
    icon2: 'top-[80px] right-[160px] [--r:10deg]',
    icon3: 'top-[260px] left-[40px] [--r:-20deg]',
    icon4: 'bottom-[240px] right-[60px] [--r:15deg]',
    icon5: 'bottom-[90px] left-[160px] [--r:-12deg]',
    icon6: 'bottom-[70px] right-[180px] [--r:18deg]',
};

// every section is at least one full screen tall and centred, so neighbours never peek in
const section = 'flex min-h-screen flex-col justify-center px-4 pb-[60px] pt-[90px] text-center scroll-mt-0 min-[769px]:px-20 min-[769px]:pb-[80px] min-[769px]:pt-[100px]';
const field = 'rounded-[10px] border-0 p-[14px] text-[13px] text-black focus:ring-0';
const notice = 'rounded-[10px] px-[14px] py-2.5 text-left text-[13px]';

export default function Portfolio({ portfolio, projects }) {
    const { hero, nav, skill_icons, skills, contact, name, email } = portfolio;
    const { flash } = usePage().props;
    const form = useForm({ name: '', email: '', message: '', website: '' });

    // smooth scrolling for the pill links
    useEffect(() => {
        document.documentElement.classList.add('scroll-smooth');
        return () => document.documentElement.classList.remove('scroll-smooth');
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        form.post(route('contact.store'), { preserveScroll: true, onSuccess: () => form.reset() });
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_center,#b30000,#000)] font-['Poppins',sans-serif] leading-[normal] text-white">
            <Head title={`${name} | Portfolio`} />
            <style>{`@keyframes floatIcon{0%,100%{transform:translateY(0) rotate(var(--r))}50%{transform:translateY(-15px) rotate(var(--r))}}`}</style>

            <Navbar nav={nav} />

            {/* HERO */}
            <section id="info"
                className="relative grid min-h-screen grid-cols-1 items-center px-4 pb-10 pt-20 text-center min-[769px]:px-[30px] min-[769px]:py-[60px] min-[1025px]:grid-cols-2 min-[1025px]:p-[60px] min-[1201px]:grid-cols-3 min-[1201px]:p-20 scroll-mt-0">
                <div>
                    <p className="text-[13px] tracking-[3px] opacity-80">{hero.greeting}</p>
                    <h1 className="mt-[10px] font-['Playfair_Display',serif] text-[38px] font-bold leading-[1.1] min-[769px]:text-[52px] min-[769px]:leading-[normal] min-[1025px]:text-[72px] min-[1201px]:text-[100px]">
                        {hero.first_name}<br />{hero.last_name}
                    </h1>
                    <div>
                        {[0, 1, 2].map((i) => (
                            <span key={i} className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                        ))}
                    </div>
                </div>

                <div>
                    <img src={`/images/${hero.image}`} alt={name}
                        className="mx-auto mt-[30px] w-full max-w-[320px] rounded-[25px] min-[769px]:max-w-[420px] min-[769px]:rounded-[50px] min-[1025px]:mx-0 min-[1025px]:mt-0 min-[1025px]:max-w-none min-[1201px]:w-[800px] min-[1201px]:max-w-full" />
                </div>

                <div>
                    <p className="mt-4 text-xs leading-[1.6] opacity-[0.85] min-[769px]:mt-5 min-[769px]:text-[13px]">
                        {hero.description}
                    </p>
                </div>

                <div className="hidden min-[1025px]:block">
                    <img src={`/images/${hero.floating}`} alt="" className="absolute bottom-[100px] right-[200px] w-[300px]" />
                </div>
            </section>

            {/* SKILLS */}
            <section id="skills" className={`relative overflow-hidden ${section}`}>
                <div className="pointer-events-none absolute inset-0 z-[2] hidden min-[769px]:block">
                    {skill_icons.map((i) => (
                        <img key={i.image} src={`/images/${i.image}`} alt={i.alt}
                            className={`absolute w-[70px] animate-[floatIcon_6s_ease-in-out_infinite] [filter:drop-shadow(0_10px_15px_rgba(0,0,0,0.6))] ${ICON_POS[i.class] ?? ''}`} />
                    ))}
                </div>

                <SectionTitle>MY SKILLS</SectionTitle>

                <div className="relative z-[3] mt-5 grid grid-cols-1 gap-5 min-[769px]:mt-0 min-[769px]:grid-cols-2 min-[769px]:gap-6 min-[1025px]:gap-10 min-[1201px]:grid-cols-3">
                    {skills.map((s, idx) => (
                        <div key={idx} className="rounded-[18px] bg-white/15 px-[22px] py-[26px] backdrop-blur-[10px] min-[769px]:rounded-[20px] min-[769px]:p-10">
                            <h3 className="mb-[14px] text-base font-bold min-[769px]:mb-5 min-[769px]:text-[18.72px]">{s.title}</h3>
                            <ul className="list-none text-xs leading-[1.6] opacity-[0.85] min-[769px]:text-[13px] min-[769px]:leading-[normal]">
                                {s.items.map((item) => <li key={item} className="mb-2.5">{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

            </section>

            {/* PROJECTS: dynamic, comes from the database */}
            <section id="projects" className={section}>
                <SectionTitle>MY PROJECT</SectionTitle>
                <div className="grid grid-cols-1 gap-6 rounded-[25px] bg-black/50 p-[30px] min-[769px]:grid-cols-2 min-[769px]:p-[50px] min-[1025px]:gap-[30px] min-[1201px]:grid-cols-3">
                    {projects.length === 0 && <p>No projects yet.</p>}
                    {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className={`relative ${section}`}>
                <SectionTitle>MY CONTACT</SectionTitle>
                <p>{contact.text}</p>

                <form onSubmit={sendMessage} className="mx-auto flex w-full max-w-[500px] flex-col gap-[15px]">
                    {flash?.status && <p className={`${notice} bg-white/20`} role="status">{flash.status}</p>}

                    {/* honeypot: hidden from people, visible to bots */}
                    <input type="text" tabIndex="-1" autoComplete="off" aria-hidden="true"
                        className="absolute -left-[9999px] h-0 w-0 opacity-0"
                        value={form.data.website} onChange={(e) => form.setData('website', e.target.value)} />

                    <input type="text" placeholder="NAME" className={field} value={form.data.name}
                        onChange={(e) => form.setData('name', e.target.value)} />
                    {form.errors.name && <div className={`${notice} bg-black/45 text-[#ffd0d0]`}>{form.errors.name}</div>}

                    <input type="email" placeholder="EMAIL" className={field} value={form.data.email}
                        onChange={(e) => form.setData('email', e.target.value)} />
                    {form.errors.email && <div className={`${notice} bg-black/45 text-[#ffd0d0]`}>{form.errors.email}</div>}

                    <textarea placeholder="MESSAGE" className={field} value={form.data.message}
                        onChange={(e) => form.setData('message', e.target.value)} />
                    {form.errors.message && <div className={`${notice} bg-black/45 text-[#ffd0d0]`}>{form.errors.message}</div>}

                    <button type="submit" disabled={form.processing}
                        className="cursor-pointer rounded-[30px] border-0 bg-[#efefef] p-[14px] text-xs font-bold text-black disabled:opacity-60 min-[769px]:text-[13px]">
                        SEND MESSAGE
                    </button>
                </form>

                <div className="absolute bottom-[200px] left-[250px] hidden w-[160px] flex-wrap gap-[14px] min-[1025px]:flex">
                    <img src={`/images/${contact.image_left}`} alt="" className="w-[500px] max-w-full [filter:drop-shadow(0_12px_20px_rgba(0,0,0,0.6))]" />
                </div>
                <div className="absolute bottom-[200px] right-[250px] hidden w-[160px] flex-wrap gap-[14px] min-[1025px]:flex">
                    <img src={`/images/${contact.image_right}`} alt="" className="w-[500px] max-w-full [filter:drop-shadow(0_12px_20px_rgba(0,0,0,0.6))]" />
                </div>

            </section>

            <Footer email={email} />
        </div>
    );
}
