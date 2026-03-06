import { IconGithub, IconLinkedin, IconMail } from './Icons';
import content from '../data/content.json';

export default function Footer() {
    const { personal } = content;
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-border-light)] mt-20" role="contentinfo">
            <div className="mx-auto max-w-6xl px-6 lg:px-8 py-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="text-sm text-[var(--color-text-muted)] text-center sm:text-left">
                        &copy; {year} {personal.name}. Built with care.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {personal.github && (
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                                aria-label="GitHub profile"
                            >
                                <IconGithub width={18} height={18} />
                            </a>
                        )}
                        {personal.linkedin && (
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                                aria-label="LinkedIn profile"
                            >
                                <IconLinkedin width={18} height={18} />
                            </a>
                        )}
                        {personal.email && (
                            <a
                                href={`mailto:${personal.email}`}
                                className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
                                aria-label="Send email"
                            >
                                <IconMail width={18} height={18} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
