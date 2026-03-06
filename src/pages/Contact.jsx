import { useState, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { IconMail, IconGithub, IconLinkedin, IconSend, IconCheck, IconLocation } from '../components/Icons';
import content from '../data/content.json';

export default function Contact() {
    const { contact, personal } = content;
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        _honeypot: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const formRef = useRef(null);

    const validate = () => {
        const errs = {};
        if (!formState.name.trim()) errs.name = 'Name is required.';
        if (!formState.email.trim()) errs.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
            errs.email = 'Please enter a valid email.';
        if (!formState.subject.trim()) errs.subject = 'Subject is required.';
        if (!formState.message.trim()) errs.message = 'Message is required.';
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot check
        if (formState._honeypot) return;

        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch(contact.formAction, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    subject: formState.subject,
                    message: formState.message,
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormState({ name: '', email: '', subject: '', message: '', _honeypot: '' });
            }
        } catch {
            // Silently fail — form will still show as unsubmitted
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="py-16 lg:py-24" aria-label="Contact">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                <SectionHeading
                    title="Contact"
                    subtitle="Have a question or want to work together? Drop me a line."
                />

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <ScrollReveal>
                            {submitted ? (
                                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-lg)] p-8 text-center">
                                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                                        <IconCheck className="text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-medium text-[var(--color-text)] mb-2">
                                        Message sent!
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">
                                        Thanks for reaching out. I'll get back to you soon.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 text-sm text-[var(--color-accent)] hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                    noValidate
                                >
                                    {/* Honeypot */}
                                    <input
                                        type="text"
                                        name="_honeypot"
                                        value={formState._honeypot}
                                        onChange={handleChange}
                                        className="hidden"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        autoComplete="off"
                                    />

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 text-sm bg-[var(--color-bg-card)] border rounded-[var(--radius-sm)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 focus:border-[var(--color-accent)] focus:outline-none ${errors.name ? 'border-red-400' : 'border-[var(--color-border)]'
                                                    }`}
                                                placeholder="Your name"
                                                required
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleChange}
                                                className={`w-full px-4 py-3 text-sm bg-[var(--color-bg-card)] border rounded-[var(--radius-sm)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 focus:border-[var(--color-accent)] focus:outline-none ${errors.email ? 'border-red-400' : 'border-[var(--color-border)]'
                                                    }`}
                                                placeholder="you@example.com"
                                                required
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-xs text-red-500" role="alert">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formState.subject}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 text-sm bg-[var(--color-bg-card)] border rounded-[var(--radius-sm)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 focus:border-[var(--color-accent)] focus:outline-none ${errors.subject ? 'border-red-400' : 'border-[var(--color-border)]'
                                                }`}
                                            placeholder="What's this about?"
                                            required
                                        />
                                        {errors.subject && (
                                            <p className="mt-1 text-xs text-red-500" role="alert">{errors.subject}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formState.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 text-sm bg-[var(--color-bg-card)] border rounded-[var(--radius-sm)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200 focus:border-[var(--color-accent)] focus:outline-none resize-y ${errors.message ? 'border-red-400' : 'border-[var(--color-border)]'
                                                }`}
                                            placeholder="Tell me about your project or question..."
                                            required
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-xs text-red-500" role="alert">{errors.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white text-sm font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-accent-hover)] transition-all duration-250 hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {submitting ? 'Sending...' : 'Send Message'}
                                        <IconSend width={16} height={16} />
                                    </button>
                                </form>
                            )}
                        </ScrollReveal>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <ScrollReveal delay={100}>
                            <div className="space-y-6">
                                <h3 className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] mb-4">
                                    Get in Touch
                                </h3>

                                <a
                                    href={`mailto:${contact.email}`}
                                    className="flex items-center gap-4 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-md)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-accent)]/6 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                                        <IconMail width={18} height={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text)]">Email</p>
                                        <p className="text-xs text-[var(--color-text-muted)]">{contact.email}</p>
                                    </div>
                                </a>

                                <a
                                    href={contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-md)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-accent)]/6 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                                        <IconGithub width={18} height={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text)]">GitHub</p>
                                        <p className="text-xs text-[var(--color-text-muted)]">View my repositories</p>
                                    </div>
                                </a>

                                <a
                                    href={contact.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-md)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-accent)]/6 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)]/10 transition-colors">
                                        <IconLinkedin width={18} height={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text)]">LinkedIn</p>
                                        <p className="text-xs text-[var(--color-text-muted)]">Connect with me</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-4 bg-[var(--color-bg-card)] border border-[var(--color-border-light)] rounded-[var(--radius-md)]">
                                    <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--color-accent)]/6 flex items-center justify-center text-[var(--color-accent)]">
                                        <IconLocation width={18} height={18} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-[var(--color-text)]">Location</p>
                                        <p className="text-xs text-[var(--color-text-muted)]">{personal.location}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
