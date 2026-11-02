import { Link } from '@inertiajs/react';
import FormField from '@/Components/FormField';

const input = 'w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none';

export default function ProjectForm({ form, onSubmit, submitLabel, currentImage }) {
    const { data, setData, errors, processing } = form;

    return (
        <form onSubmit={onSubmit} className="rounded bg-white p-6 shadow">
            <FormField label="Title" error={errors.title}>
                <input className={input} value={data.title} onChange={(e) => setData('title', e.target.value)} />
            </FormField>

            <FormField label="Description" error={errors.description}>
                <textarea rows="4" className={input} value={data.description} onChange={(e) => setData('description', e.target.value)} />
            </FormField>

            <FormField label="Software used (e.g. Blender, Adobe Photoshop, SketchUp)" error={errors.software_used}>
                <input className={input} value={data.software_used} onChange={(e) => setData('software_used', e.target.value)} />
            </FormField>

            <FormField label="Project URL (optional)" error={errors.project_url}>
                <input className={input} value={data.project_url} onChange={(e) => setData('project_url', e.target.value)} />
            </FormField>

            <FormField label="Date completed" error={errors.date_completed}>
                <input type="date" className={input} value={data.date_completed} onChange={(e) => setData('date_completed', e.target.value)} />
            </FormField>

            <FormField label="Display order" error={errors.display_order}>
                <input type="number" className={input} value={data.display_order} onChange={(e) => setData('display_order', e.target.value)} />
            </FormField>

            <FormField label={currentImage ? 'Image (JPG/PNG/WEBP, max 2 MB, leave empty to keep the current one)' : 'Image (JPG/PNG/WEBP, max 2 MB)'} error={errors.image}>
                {currentImage && <img src={currentImage} alt="" className="mb-2 h-24 rounded" />}
                <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} />
            </FormField>

            <div className="flex gap-3">
                <button type="submit" disabled={processing} className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50">
                    {submitLabel}
                </button>
                <Link href={route('projects.index')} className="rounded border px-4 py-2">Cancel</Link>
            </div>
        </form>
    );
}
