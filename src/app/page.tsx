import { ROOT_DOMAIN, services, serviceUrl } from "@/lib/services";

const CURRENT_YEAR = new Date().getFullYear();

export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <p className="badge">{ROOT_DOMAIN}</p>
        <h1>
          Hello, <span className="accent">World.</span>
        </h1>
        <p className="lead">
          A small collection of services, all in one place. Pick one to get
          started.
        </p>
      </header>

      <section className="grid" aria-label="Services">
        {services.map((s) => {
          const url = serviceUrl(s.subdomain);
          return (
            <a key={s.subdomain} href={url} className="card" target="_blank">
              <span className="icon" aria-hidden="true">
                {s.icon}
              </span>
              <h2>{s.name}</h2>
              <p>{s.description}</p>
              <span className="host">
                {s.subdomain}.{ROOT_DOMAIN} <span className="arrow">→</span>
              </span>
            </a>
          );
        })}
      </section>

      <footer className="footer">
        &copy; {CURRENT_YEAR} {ROOT_DOMAIN}
      </footer>
    </main>
  );
}
