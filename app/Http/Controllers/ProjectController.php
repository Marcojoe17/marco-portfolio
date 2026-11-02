<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Projects/Index', [
            'projects' => Project::orderBy('display_order')->orderBy('id')->get(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Projects/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate($this->rules(), $this->messages());

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        Project::create($data);

        return redirect()->route('projects.index')->with('success', 'Project created successfully.');
    }

    public function edit(Project $project): Response
    {
        return Inertia::render('Projects/Edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $request->validate($this->rules($project), $this->messages());

        if ($request->hasFile('image')) {
            $this->deleteImage($project);
            $data['image'] = $request->file('image')->store('projects', 'public');
        } else {
            unset($data['image']); // keep the existing image
        }

        $project->update($data);

        return redirect()->route('projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $this->deleteImage($project);
        $project->delete();

        return redirect()->route('projects.index')->with('success', 'Project deleted successfully.');
    }

    private function rules(?Project $project = null): array
    {
        return [
            // unique, but ignore this record's own id when updating
            'title'          => ['required', 'string', 'max:255', Rule::unique('projects', 'title')->ignore($project?->id)],
            'description'    => ['required', 'string', 'min:20', 'max:1000'],
            'software_used'  => ['required', 'string', 'max:100'],
            'project_url'    => ['nullable', 'url', 'max:255'],
            'date_completed' => ['required', 'date', 'before_or_equal:today'],
            'display_order'  => ['required', 'integer', 'min:0', 'max:999'],
            // required when creating; when editing it is optional (keeps the current image)
            'image'          => [$project ? 'nullable' : 'required', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ];
    }

    private function messages(): array
    {
        return [
            'title.unique'                  => 'You already have a project with this title.',
            'description.min'               => 'Please describe the project in at least 20 characters.',
            'project_url.url'               => 'Enter a full link, e.g. https://example.com',
            'date_completed.before_or_equal' => 'The completion date cannot be in the future.',
            'image.required'                => 'Please upload a project image.',
            'image.max'                     => 'The image must not be larger than 2 MB.',
            // Fires when PHP itself rejects the upload (file bigger than upload_max_filesize)
            // before Laravel's max:2048 rule can run.
            'image.uploaded'                => 'The image failed to upload. It must be under 2 MB.',
            'image.mimes'                   => 'The image must be a JPG, PNG or WEBP file.',
        ];
    }

    private function deleteImage(Project $project): void
    {
        if ($project->image && ! str_starts_with($project->image, 'images/')) {
            Storage::disk('public')->delete($project->image);
        }
    }
}
