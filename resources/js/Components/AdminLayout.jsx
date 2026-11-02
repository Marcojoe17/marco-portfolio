import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ title, children }) {
    const { flash } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            <header className="bg-white shadow">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <nav className="space-x-4 text-sm">
                        <Link href={route('home')} className="text-indigo-600 hover:underline">View portfolio</Link>
                        <Link href={route('projects.index')} className="text-indigo-600 hover:underline">Projects</Link>
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-5xl px-4 py-6">
                {flash?.success && (
                    <div className="mb-4 rounded border border-green-300 bg-green-100 px-4 py-3 text-green-800" role="status">
                        {flash.success}
                    </div>
                )}
                {children}
            </main>
        </div>
    );
}
