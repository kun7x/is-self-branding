import { useParams, Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { IconArrowLeft, IconExternalLink, IconGithub, IconCheck } from '../components/Icons';
import content from '../data/content.json';

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = content.projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="py-24 text-center">
                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                    <h2 className="text-2xl font-light text-[var(--color-text)]">Project not found</h2>
                    <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline">
                        <IconArrowLeft width={16} height={16} />
                        Back to projects
                    </Link>
                </div>
            </section>
        );
    }

    const { detail } = project;

    return (
        <section className="py-16 lg:py-24" aria-label={`${project.title} case study`}>
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                {/* Back link */}
                <ScrollReveal>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 mb-8"
                    >
                        <IconArrowLeft width={16} height={16} />
                        All Projects
                    </Link>
                </ScrollReveal>

                {/* Header */}
                <ScrollReveal>
                    <header className="mb-12">
                        <p className="text-sm text-[var(--color-accent)] font-medium mb-2">{project.year}</p>
                        <h1 className="text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-text)]">
                            {project.title}
                        </h1>
                        <p className="mt-2 text-base text-[var(--color-text-secondary)]">
                            {project.subtitle}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-accent)]/5 text-[var(--color-accent)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* External links */}
                        <div className="mt-6 flex gap-4">
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                                >
                                    <IconGithub width={16} height={16} />
                                    Repository
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                                >
                                    <IconExternalLink width={16} height={16} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </header>
                </ScrollReveal>

                {/* Challenge */}
                <ScrollReveal>
                    <div className="mb-10">
                        <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-3">
                            The Challenge
                        </h2>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                            {detail.challenge}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Role */}
                <ScrollReveal>
                    <div className="mb-10">
                        <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-3">
                            My Role
                        </h2>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                            {detail.role}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Approach */}
                <ScrollReveal>
                    <div className="mb-10">
                        <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-3">
                            Approach
                        </h2>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                            {detail.approach}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Tech Stack */}
                <ScrollReveal>
                    <div className="mb-10">
                        <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-4">
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {detail.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-sm px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--color-bg-card)] border border-[var(--color-border-light)] text-[var(--color-text-secondary)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Key Features */}
                <ScrollReveal>
                    <div className="mb-10">
                        <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-4">
                            Key Features
                        </h2>
                        <ul className="space-y-3">
                            {detail.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <IconCheck width={16} height={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" />
                                    <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

                {/* Outcome */}
                <ScrollReveal>
                    <div className="p-6 bg-[var(--color-accent)]/4 rounded-[var(--radius-lg)] border border-[var(--color-accent)]/10">
                        <h2 className="text-xs font-medium tracking-wider uppercase text-[var(--color-accent)] mb-3">
                            Outcome
                        </h2>
                        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
                            {detail.outcome}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Back link */}
                <ScrollReveal>
                    <div className="mt-12 pt-8 border-t border-[var(--color-border-light)]">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                        >
                            <IconArrowLeft width={16} height={16} />
                            Back to all projects
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
