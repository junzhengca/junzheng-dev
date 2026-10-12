'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { experience } from '@/data/experience';
import { outsideWork } from '@/data/outside-work';
import { profile } from '@/data/profile';
import { Icon, type IconName } from '@/components/Icon';
import DraggableMascot from '@/components/DraggableMascot';

const navigation = [
  { id: 'outside', label: 'Outside work', icon: 'compass' },
  { id: 'about', label: 'About', icon: 'user' },
] as const;

type SectionId = (typeof navigation)[number]['id'];

function SectionLabel({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: IconName;
}) {
  return (
    <p className="section-label">
      <Icon name={icon} size={16} />
      <span>{children}</span>
    </p>
  );
}

export default function PortfolioSite() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const visibleSections = new Map<SectionId, HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            visibleSections.set(section.id as SectionId, section);
          } else {
            visibleSections.delete(section.id as SectionId);
          }
        });

        const orderedSections: HTMLElement[] = [];
        visibleSections.forEach((section) => orderedSections.push(section));
        const activeSection = orderedSections.sort(
          (first, second) =>
            first.getBoundingClientRect().top -
            second.getBoundingClientRect().top,
        )[0];

        setActiveSection((activeSection?.id as SectionId | undefined) ?? null);
      },
      { rootMargin: '-22% 0px -62% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner page-wrap">
          <a className="wordmark" href="#top" aria-label="Jun Zheng, home">
            <Icon name="home" size={16} />
            Jun Zheng
          </a>

          <nav className="primary-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={
                  activeSection === item.id ? 'location' : undefined
                }
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            aria-pressed={isDark}
            onClick={() => setIsDark((current) => !current)}
          >
            <Icon name={isDark ? 'sun' : 'moon'} size={16} />
            <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </div>
      </header>

      <main id="main-content" className="page-wrap">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow">
                Jun Zheng <span aria-hidden="true">·</span>
                <Icon name="location" size={15} /> Toronto, Canada
              </p>
              <h1 className="hero__title" id="hero-title">
                Hi, I’m Jun.
              </h1>
              <p className="hero__intro">
                I’m a software engineer at Google. I work on AI collaboration
                and search.
              </p>
              <ul
                className="hero__interests"
                aria-label="Areas I work on and enjoy"
              >
                <li>
                  <Icon name="users" size={16} /> AI collaboration
                </li>
                <li>
                  <Icon name="search" size={16} /> Search
                </li>
                <li>
                  <Icon name="shield" size={16} /> Security
                </li>
              </ul>
              <a className="primary-link" href="#about">
                About me
                <Icon name="arrow-right" size={17} />
              </a>
            </div>

            <aside className="hero__aside-card" aria-label="A little about Jun">
              <p className="eyebrow hero__aside-label">
                <Icon name="coffee" size={16} /> Away from work
              </p>
              <p className="hero__aside-title">Security research &amp; coffee</p>
              <p className="hero__aside-copy">
                I use the handle <span>antin0de</span> on security platforms.
              </p>
              <a className="text-link" href="#outside">
                A few more things I like
              </a>
            </aside>
          </div>
        </section>
        <section
          className="content-section outside-section"
          id="outside"
          aria-labelledby="outside-title"
        >
          <div className="section-heading section-heading--split">
            <div>
              <SectionLabel icon="compass">Outside work</SectionLabel>
              <h2 id="outside-title">A few things I’m into.</h2>
            </div>
            <p className="section-heading__intro">{outsideWork.intro}</p>
          </div>

          <div className="outside-grid">
            <article className="security-folio">
              <div className="security-folio__heading">
                <p className="eyebrow security-folio__eyebrow">
                  <Icon name="shield" size={16} /> Security research
                </p>
                <h3>antin0de</h3>
              </div>
              <div className="security-folio__badges">
                {outsideWork.badges.map((badge) => (
                  <a
                    className="security-badge"
                    href={badge.href}
                    key={badge.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="security-badge__label">
                      <Icon name={badge.icon} size={16} />
                      {badge.name}
                      <Icon
                        className="security-badge__external"
                        name="arrow-up-right"
                        size={14}
                      />
                    </span>
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={badge.width}
                      height={badge.height}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </article>

            <aside className="software-list">
              <p className="eyebrow security-folio__eyebrow">
                <Icon name="laptop" size={16} /> Software I like
              </p>
              <h3>Useful little tools.</h3>
              <p className="software-list__intro">{outsideWork.toolsIntro}</p>
              <ul>
                {outsideWork.tools.map((tool) => (
                  <li className="software-pick" key={tool.name}>
                    <div>
                      <a href={tool.href} target="_blank" rel="noreferrer">
                        <span className="software-pick__icon">
                          <Icon name={tool.icon} size={18} />
                        </span>
                        {tool.name}
                        <Icon
                          className="software-pick__external"
                          name="arrow-up-right"
                          size={15}
                        />
                      </a>
                      <p>{tool.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section
          className="content-section about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <SectionLabel icon="briefcase">About</SectionLabel>
            <h2 id="about-title">Work and school.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p className="about-copy__lede">{profile.bio}</p>
              <p>
                I’m based in Toronto. Away from work, I do security research
                and look for useful software.
              </p>
              <a
                className="text-link about-copy__github"
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" size={17} />
                Find me on GitHub
                <Icon name="arrow-up-right" size={15} />
              </a>
            </div>

            <div className="about-details">
              <div className="experience-list">
                {experience.map((item) => (
                  <article className="experience-row" key={item.company}>
                    <div className="experience-row__top">
                      <div className="experience-row__company">
                        <span className="experience-row__icon">
                          <Icon name={item.icon} size={17} />
                        </span>
                        <h3>{item.company}</h3>
                      </div>
                      <span>{item.period.replace(' -> ', ' to ')}</span>
                    </div>
                    <p>{item.role}</p>
                    <p className="experience-row__description">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="education-row">
                <span className="eyebrow education-row__label">
                  <Icon name="graduation" size={17} /> Education
                </span>
                <div>
                  <h3>University of Toronto</h3>
                  <p>B.Sc. Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-wrap">
        <div className="site-footer__bottom">
          <a className="wordmark" href="#top">
            <Icon name="home" size={16} />
            Jun Zheng
          </a>
          <p>
            <Icon name="location" size={16} /> Toronto, Canada
          </p>
          <a
            className="site-footer__photo-credit"
            href="https://unsplash.com/id/foto/pemandangan-awan-dari-jendela-pesawat-1BlNRATdLFs"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="cloud" size={15} />
            Photo by Israel Palacio / Unsplash
            <Icon name="arrow-up-right" size={14} />
          </a>
          <p>© {new Date().getFullYear()} Jun Zheng</p>
        </div>
      </footer>
      <DraggableMascot />
    </div>
  );
}
