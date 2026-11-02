export default function Footer({ email }) {
    return (
        <footer className="px-4 py-[30px] text-center text-[11px] opacity-70 min-[769px]:p-10 min-[769px]:text-base">
            <p>{email}</p>
        </footer>
    );
}
