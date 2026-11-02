import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Components/AdminLayout';
import ProjectForm from '@/Components/ProjectForm';

export default function Edit({ project }) {
    const form = useForm({
        _method: 'put', // PHP can't read multipart PUT, so we POST and spoof PUT
        title: project.title,
        description: project.description,
        software_used: project.software_used,
        project_url: project.project_url ?? '',
        date_completed: project.date_completed,
        display_order: project.display_order,
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(route('projects.update', project.id), { forceFormData: true });
    };

    return (
        <AdminLayout title="Edit Project">
            <Head title="Edit Project" />
            <ProjectForm form={form} onSubmit={submit} submitLabel="Update project" currentImage={project.image_url} />
        </AdminLayout>
    );
}
