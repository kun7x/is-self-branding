import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ title, subtitle }) {
    return (
        <ScrollReveal>
            <div className="mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-[var(--color-text)]">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-3 text-base text-[var(--color-text-secondary)] max-w-xl">
                        {subtitle}
                    </p>
                )}
                <div className="mt-4 h-px w-12 bg-[var(--color-accent)]" />
            </div>
        </ScrollReveal>
    );
}
