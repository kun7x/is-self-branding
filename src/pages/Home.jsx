import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { IconArrowRight, IconExternalLink } from '../components/Icons';
import content from '../data/content.json';

export default function Home() {
    const { personal, projects } = content;
    const featured = projects[0];

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-[85vh] flex items-center" aria-label="Introduction">
                <div className="mx-auto max-w-6xl px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Content */}
                        <div>
                            <ScrollReveal>
                                <p className="text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-4">
                                    Hello, I&rsquo;m
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={100}>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-text)] leading-[1.1]">
                                    {personal.name}
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={200}>
                                <p className="mt-4 text-lg sm:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-lg">
                                    {personal.tagline}
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={300}>
                                <p className="mt-5 text-base text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
                                    {personal.shortIntro}
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={400}>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    <Link
                                        to="/projects"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-hover)] transition-all duration-250 hover:shadow-md"
                                    >
                                        View Projects
                                        <IconArrowRight width={16} height={16} />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium rounded-[var(--radius-sm)] hover:border-[var(--color-text)] transition-all duration-250"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Hero Photo */}
                        <ScrollReveal delay={300} className="hidden lg:flex justify-center">
                            <div className="relative">
                                <div className="w-80 h-80 rounded-2xl overflow-hidden border border-[var(--color-border-light)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                    <img
                                        src="/kundan_photo.jpg"
                                        alt="Kundan Patil"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                {/* Floating accent decorations */}
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-[var(--radius-md)] bg-[var(--color-accent)]/10 animate-float" />
                                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[var(--color-accent)]/8 animate-float-delayed" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Featured Project */}
            {featured && (
                <section className="py-16 lg:py-20" aria-label="Featured project">
                    <div className="mx-auto max-w-6xl px-6 lg:px-8">
                        <ScrollReveal>
                            <p className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-6">
                                Featured Project
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <Link
                                to={`/projects/${featured.slug}`}
                                className="group block bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] p-6 sm:p-8 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    {/* Project thumbnail */}
                                    <div className="w-full sm:w-48 h-32 sm:h-28 rounded-[var(--radius-md)] overflow-hidden shrink-0 bg-[var(--color-accent)]/5">
                                        <img
                                            src="/local_serve.png"
                                            alt="LocalServe project screenshot"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                                                    {featured.title}
                                                </h3>
                                                <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                                                    {featured.subtitle} &middot; {featured.year}
                                                </p>
                                            </div>
                                            <IconArrowRight
                                                className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-1"
                                                width={18}
                                                height={18}
                                            />
                                        </div>

                                        <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {featured.summary}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {featured.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--color-accent)]/5 text-[var(--color-accent)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* Float animation keyframes via style tag */}
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
        </>
    );
}
