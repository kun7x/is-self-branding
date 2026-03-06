import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { Icon, IconExternalLink } from '../components/Icons';
import content from '../data/content.json';

const tabs = [
    { key: 'education', label: 'Education' },
    { key: 'certifications', label: 'Certifications' },
    { key: 'publications', label: 'Publications' },
];

export default function Qualification() {
    const [activeTab, setActiveTab] = useState('education');
    const { qualifications } = content;
    const items = qualifications[activeTab] || [];

    return (
        <section className="py-16 lg:py-24" aria-label="Qualifications">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <SectionHeading
                    title="Qualification"
                    subtitle="My academic journey, certifications, and publications."
                />

                {/* Filter Tabs */}
                <ScrollReveal>
                    <div
                        className="flex gap-1 p-1 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-md)] w-fit mb-12"
                        role="tablist"
                        aria-label="Qualification categories"
                    >
                        {tabs.map(({ key, label }) => (
                            <button
                                key={key}
                                role="tab"
                                aria-selected={activeTab === key}
                                aria-controls={`panel-${key}`}
                                onClick={() => setActiveTab(key)}
                                className={`px-4 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-all duration-200 ${activeTab === key
                                    ? 'bg-[var(--color-accent)] text-white shadow-sm'
                                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-border-light)]'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Timeline */}
                <div
                    id={`panel-${activeTab}`}
                    role="tabpanel"
                    aria-label={`${activeTab} timeline`}
                >
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--color-border)] hidden sm:block" aria-hidden="true" />

                        <div className="space-y-8">
                            {items.map((item, i) => (
                                <ScrollReveal key={`${activeTab}-${i}`}>
                                    <div className="flex gap-6">
                                        {/* Timeline marker */}
                                        <div className="hidden sm:flex flex-col items-center shrink-0">
                                            <div className="w-10 h-10 rounded-full bg-[var(--color-bg-card)] border-2 border-[var(--color-border)] flex items-center justify-center z-10">
                                                <Icon
                                                    name={item.icon}
                                                    width={16}
                                                    height={16}
                                                    className="text-[var(--color-accent)]"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 pb-2">
                                            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] p-6 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                                                    <h3 className="text-base font-semibold text-[var(--color-text)]">
                                                        {item.title}
                                                    </h3>
                                                    <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/6 px-2.5 py-1 rounded-full shrink-0">
                                                        {item.period}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-[var(--color-text-muted)] mb-2">
                                                    {item.institution}
                                                </p>
                                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                                    {item.description}
                                                </p>
                                                {item.url && (
                                                    <a
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-200"
                                                    >
                                                        View Certificate
                                                        <IconExternalLink width={12} height={12} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {items.length === 0 && (
                        <p className="text-sm text-[var(--color-text-muted)] text-center py-12">
                            No items in this category yet.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
