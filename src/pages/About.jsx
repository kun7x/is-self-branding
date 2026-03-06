import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { Icon } from '../components/Icons';
import content from '../data/content.json';

export default function About() {
    const { personal, about } = content;

    return (
        <section className="py-16 lg:py-24" aria-label="About">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <SectionHeading
                    title="About"
                    subtitle="A little bit about who I am and what drives me."
                />

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Portrait and Bio */}
                    <div className="lg:col-span-3">
                        <ScrollReveal>
                            <div className="flex flex-col sm:flex-row gap-8 items-start">
                                {/* Portrait */}
                                <div className="shrink-0">
                                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[var(--color-border-light)]">
                                        <img
                                            src="/kundan_photo.jpg"
                                            alt="Portrait of Kundan Patil"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="space-y-4">
                                    {about.bio.map((paragraph, i) => (
                                        <p
                                            key={i}
                                            className="text-base text-[var(--color-text-secondary)] leading-relaxed"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Quick Info */}
                    <div className="lg:col-span-2">
                        <ScrollReveal delay={100}>
                            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] p-6">
                                <h3 className="text-sm font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-5">
                                    Quick Info
                                </h3>
                                <dl className="space-y-4">
                                    <div>
                                        <dt className="text-xs text-[var(--color-text-muted)]">Location</dt>
                                        <dd className="text-sm font-medium text-[var(--color-text)]">{personal.location}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs text-[var(--color-text-muted)]">Education</dt>
                                        <dd className="text-sm font-medium text-[var(--color-text)]">B.Tech CS, NMIMS University</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs text-[var(--color-text-muted)]">Focus</dt>
                                        <dd className="text-sm font-medium text-[var(--color-text)]">Full-Stack Development, React, Java</dd>
                                    </div>
                                </dl>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Values */}
                <div className="mt-16 lg:mt-20">
                    <ScrollReveal>
                        <h3 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-8">
                            Working Principles
                        </h3>
                    </ScrollReveal>

                    <ScrollReveal stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {about.values.map((value) => (
                                <div
                                    key={value.title}
                                    className="reveal group p-6 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-accent)]/6 flex items-center justify-center text-[var(--color-accent)] mb-4 group-hover:bg-[var(--color-accent)]/10 transition-colors duration-300">
                                        <Icon name={value.icon} width={18} height={18} />
                                    </div>
                                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-2">
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>

                {/* Achievements */}
                {about.achievements && about.achievements.length > 0 && (
                    <div className="mt-16 lg:mt-20">
                        <ScrollReveal>
                            <h3 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-6">
                                Positions of Responsibility
                            </h3>
                        </ScrollReveal>

                        <ScrollReveal stagger>
                            <ul className="space-y-3">
                                {about.achievements.map((achievement, i) => (
                                    <li key={i} className="reveal flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                        <span className="text-sm text-[var(--color-text-secondary)]">
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                )}
            </div>
        </section>
    );
}
