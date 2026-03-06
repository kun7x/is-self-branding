import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import content from '../data/content.json';

const levelColors = {
    Advanced: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] border-[var(--color-accent)]/20',
    Intermediate: 'bg-amber-50 text-amber-700 border-amber-200/60',
    Beginner: 'bg-gray-50 text-gray-600 border-gray-200/60',
};

export default function Skills() {
    const { skills } = content;

    return (
        <section className="py-16 lg:py-24" aria-label="Skills">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <SectionHeading
                    title="Skills"
                    subtitle="Technologies and tools I work with, and the soft skills I bring to every team."
                />

                {/* Technical Skills */}
                <div className="space-y-10">
                    <ScrollReveal>
                        <h3 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-6">
                            Technical Skills
                        </h3>
                    </ScrollReveal>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {skills.technical.map((category) => (
                            <ScrollReveal key={category.category}>
                                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] p-6">
                                    <h4 className="text-sm font-semibold text-[var(--color-text)] mb-4">
                                        {category.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className={`inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full border ${levelColors[skill.level] || levelColors.Beginner
                                                    }`}
                                            >
                                                <span className="font-medium">{skill.name}</span>
                                                <span className="text-[10px] opacity-70">{skill.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="mt-16">
                    <ScrollReveal>
                        <h3 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-6">
                            Soft Skills
                        </h3>
                    </ScrollReveal>

                    <ScrollReveal stagger>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {skills.soft.map((skill) => (
                                <div
                                    key={skill}
                                    className="reveal flex items-center gap-3 px-5 py-4 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-md)]"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                    <span className="text-sm text-[var(--color-text-secondary)]">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
