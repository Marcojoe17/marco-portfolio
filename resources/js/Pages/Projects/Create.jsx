import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Components/AdminLayout';
import ProjectForm from '@/Components/ProjectForm';

export default function Create() {
    const form = useForm({
        title: '', description: '', software_used: '', project_url: '',
        date_completed: '', display_order: 0, image: null,
    });

    // On validation failure Laravel redirects back; Inertia keeps the typed values
    // in `form.data` and fills `form.errors`, with no full page reload.
    const submit = (e) => {
        e.preventDefault();
        form.post(route('projects.store'), { forceFormData: true });
    };

    return (
        <AdminLayout title="Add Project">
            <Head title="Add Project" />
            <ProjectForm form={form} onSubmit={submit} submitLabel="Save project" />
        </AdminLayout>
    );
}
