export default function ProjectCard({ project }) {
    return (
        <div>
            {project.image_url && (
                <img src={project.image_url} alt={project.title} className="mb-5 w-full rounded-[15px]" />
            )}
            <h4 className="mb-2.5 text-sm font-bold">{project.title}</h4>
            <p>{project.description}</p>
            {project.project_url && (
                <a href={project.project_url} target="_blank" rel="noreferrer"
                    className="mt-2 inline-block text-xs underline">View project</a>
            )}
        </div>
    );
}
