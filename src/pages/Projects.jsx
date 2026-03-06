import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { IconArrowRight, IconExternalLink, IconGithub } from '../components/Icons';
import content from '../data/content.json';

export default function Projects() {
    const { projects } = content;

    return (
        <section className="py-16 lg:py-24" aria-label="Projects">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <SectionHeading
                    title="Projects"
                    subtitle="A selection of things I've built — each one solving a real problem."
                />

                <ScrollReveal stagger>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <article
                                key={project.slug}
                                className="reveal group flex flex-col bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Thumbnail */}
                                <div className="h-40 bg-gradient-to-br from-[var(--color-accent)]/4 to-[var(--color-accent)]/8 flex items-center justify-center">
                                    <ProjectIcon name={project.thumbnail} />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                        <h3 className="text-base font-semibold transition-colors duration-200">
                                            <Link
                                                to={`/projects/${project.slug}`}
                                                className="text-[var(--color-text)] hover:text-[var(--color-accent)]"
                                            >
                                                {project.title}
                                            </Link>
                                        </h3>
                                        <span className="text-xs text-[var(--color-text-muted)] shrink-0 mt-1">
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className="text-xs text-[var(--color-text-muted)] mb-3">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">
                                        {project.summary}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border-light)]">
                                        <Link
                                            to={`/projects/${project.slug}`}
                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-200"
                                        >
                                            Case Study
                                            <IconArrowRight width={14} height={14} />
                                        </Link>

                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200 ml-auto"
                                                aria-label={`View ${project.title} repository`}
                                            >
                                                <IconGithub width={14} height={14} />
                                            </a>
                                        )}

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                                                aria-label={`View ${project.title} live`}
                                            >
                                                <IconExternalLink width={14} height={14} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

function ProjectIcon({ name }) {
    const icons = {
        localserve: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="8" y="12" width="40" height="32" rx="6" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
                <circle cx="20" cy="28" r="4" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.7" />
                <circle cx="36" cy="28" r="4" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.7" />
                <path d="M24 28h8" stroke="var(--color-accent)" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
                <path d="M28 18v-4M28 42v-4" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.3" />
            </svg>
        ),
        searchxplore: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="24" cy="24" r="12" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.6" />
                <line x1="33" y1="33" x2="44" y2="44" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                <rect x="18" y="20" width="12" height="2" rx="1" fill="var(--color-accent)" opacity="0.3" />
                <rect x="18" y="25" width="8" height="2" rx="1" fill="var(--color-accent)" opacity="0.2" />
            </svg>
        ),
        documentqa: (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="12" y="8" width="24" height="32" rx="4" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
                <path d="M30 8v8h8" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.4" />
                <rect x="18" y="22" width="12" height="2" rx="1" fill="var(--color-accent)" opacity="0.3" />
                <rect x="18" y="27" width="8" height="2" rx="1" fill="var(--color-accent)" opacity="0.2" />
                <rect x="18" y="32" width="10" height="2" rx="1" fill="var(--color-accent)" opacity="0.2" />
                <circle cx="40" cy="36" r="10" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.4" />
                <path d="M37 34c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1-0.6 1.8-1.5 2.2V38h-3v-1.8c-0.9-0.4-1.5-1.2-1.5-2.2z" fill="var(--color-accent)" opacity="0.3" />
                <circle cx="40" cy="41" r="1" fill="var(--color-accent)" opacity="0.3" />
            </svg>
        ),
    };

    return icons[name] || icons.localserve;
}
