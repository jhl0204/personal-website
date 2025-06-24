import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to My Digital Garden</h1>
        <p className="hero__subtitle">
          Exploring Technology, Sharing Knowledge, and Building the Future
        </p>
      </div>
    </header>
  );
}

function FeatureCard({title, description, to, icon}) {
  return (
    <Link to={to} className={styles.featureLink}>
      <div className={styles.feature}>
        <h4>{icon} {title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
}

function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <h2>About Me</h2>
            <p>
              Hello! I'm a technology enthusiast passionate about ML/AI and Full Stack Development.
              This space serves as my digital garden where I share my projects, document my learning
              journey, and explore various technical topics.
            </p>
            <h3>What You'll Find Here</h3>
            <div className={styles.features}>
              <FeatureCard
                title="Projects"
                description="A showcase of my technical projects and experiments"
                to="/docs/projects/welcome"
                icon="🚀"
              />
              <FeatureCard
                title="Topics"
                description="Deep dives into ML/AI and Full Stack Development"
                to="/docs/topics/welcome"
                icon="💡"
              />
              <FeatureCard
                title="Journal"
                description="Regular updates about my learning journey and discoveries"
                to="/journal"
                icon="📝"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Welcome"
      description="Personal website featuring projects, technical topics, and learning journal">
      <HomepageHeader />
      <main>
        <AboutMe />
      </main>
    </Layout>
  );
}
