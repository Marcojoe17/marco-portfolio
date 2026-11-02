import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/AdminLayout';
import ConfirmModal from '@/Components/ConfirmModal';

export default function Index({ projects }) {
    const [toDelete, setToDelete] = useState(null);

    // delete confirmation step: nothing is deleted until the modal is confirmed
    const confirmDelete = () => {
        router.delete(route('projects.destroy', toDelete.id), { onFinish: () => setToDelete(null) });
    };

    return (
        <AdminLayout title="Manage Projects">
            <Head title="Projects" />
            <div className="mb-4 text-right">
                <Link href={route('projects.create')} className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                    + Add project
                </Link>
            </div>

            <div className="overflow-x-auto rounded bg-white shadow">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="p-3">Order</th><th className="p-3">Image</th><th className="p-3">Title</th>
                            <th className="p-3">Software used</th><th className="p-3">Completed</th><th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.length === 0 && (
                            <tr><td colSpan="6" className="p-6 text-center text-gray-500">No projects yet.</td></tr>
                        )}
                        {projects.map((p) => (
                            <tr key={p.id} className="border-t">
                                <td className="p-3">{p.display_order}</td>
                                <td className="p-3">{p.image_url && <img src={p.image_url} alt="" className="h-12 w-16 rounded object-cover" />}</td>
                                <td className="p-3 font-medium">{p.title}</td>
                                <td className="p-3">{p.software_used}</td>
                                <td className="p-3">{p.date_completed}</td>
                                <td className="space-x-3 p-3">
                                    <Link href={route('projects.edit', p.id)} className="text-indigo-600 hover:underline">Edit</Link>
                                    <button onClick={() => setToDelete(p)} className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <ConfirmModal
                open={toDelete !== null}
                title="Delete project?"
                message={toDelete ? `"${toDelete.title}" will be permanently deleted. This cannot be undone.` : ''}
                onConfirm={confirmDelete}
                onCancel={() => setToDelete(null)}
            />
        </AdminLayout>
    );
}
