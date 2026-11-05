import { FormEvent, useState } from "react"

type IconName = "arrow" | "badge" | "bell" | "book" | "building" | "calendar" | "camera" | "check" | "chevron" | "clock" | "download" | "energy" | "fire" | "graduation" | "instagram" | "linkedin" | "lock" | "mail" | "map" | "menu" | "network" | "phone" | "quote" | "shield" | "spark" | "star" | "support" | "user" | "whatsapp" | "x"
const iconPaths: Record<IconName, string> = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  badge:
    "M12 3l2.2 2.2 3.1-.4.4 3.1L20 10l-1.4 2.8.7 3-3 .7L15 19l-3-1.4L9 19l-1.3-2.5-3-.7.7-3L4 10l2.3-2.1.4-3.1 3.1.4L12 3zm-3 8.5 2 2 4-4",
  bell: "M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7m-8 11h4",
  book: "M4 5a3 3 0 0 1 3-3h13v17H7a3 3 0 0 1 0-6h13",
  building: "M4 21V4h11v17m0-12h5v12M8 8h3m-3 4h3m-3 4h3M2 21h20",
  calendar: "M3 5h18v16H3zm5-2v4m8-4v4M3 10h18",
  camera: "M3 8h4l2-3h6l2 3h4v11H3zm9 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
  check: "m5 12 4 4L19 6",
  chevron: "m6 9 6 6 6-6",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 4v5l3 2",
  download: "M12 3v12m-5-5 5 5 5-5M4 21h16",
  energy: "m13 2-8 12h7l-1 8 8-12h-7z",
  fire: "M12 22c4 0 7-3 7-7 0-3-2-6-5-9 0 3-1 4-2 5 0-4-2-7-4-9 0 5-3 7-3 12 0 4 3 8 7 8z",
  graduation: "M2 9 12 4l10 5-10 5L2 9zm4 2.5V16c3 3 9 3 12 0v-4.5M22 9v6",
  instagram:
    "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm9 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8m5.5-1.5h.01",
  linkedin: "M3 3h18v18H3zm5 7v7m0-10v.01M12 17v-7m0 3a3 3 0 0 1 6 0v4",
  lock: "M4 10h16v11H4zm4 0V7a4 4 0 0 1 8 0v3m-4 4v3",
  mail: "M3 5h18v14H3zm0 2 9 6 9-6",
  map: "M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0zm-8-2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
  menu: "M4 7h16M4 12h16M4 17h16",
  network: "M3 4h7v5H3zm11 11h7v5h-7zM3 15h7v5H3zm3.5 0v-3h11v3M12 9v3",
  phone:
    "M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-4-2-2 2c-4-1.5-6.5-4-8-8l2-2z",
  quote:
    "M7 17H3v-4c0-4 2-6 6-7v2c-2 .8-3 2-3 4h3v5zm10 0h-4v-4c0-4 2-6 6-7v2c-2 .8-3 2-3 4h3v5z",
  shield: "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6zm-4 10 3 3 5-6",
  spark: "M12 2l1.3 5.7L19 9l-5.7 1.3L12 16l-1.3-5.7L5 9l5.7-1.3z",
  star: "m12 2 3 6 7 .9-5 4.8 1.2 6.8L12 17.3l-6.2 3.2L7 13.7 2 8.9 9 8z",
  support:
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M5 13v-2a7 7 0 0 1 14 0v2m-2 2c0 2-1 3-4 3",
  user: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 21a8 8 0 0 1 16 0",
  whatsapp:
    "M20 11.5A8 8 0 1 1 6.3 6l-2 6 6.2-1.8A8 8 0 0 0 20 11.5zm-11.5-3c.5 3 2 4.5 5 5l1-1",
  x: "m6 6 12 12M18 6 6 18",
}
function Icon({ name, size = 22,}: {name: IconName; size?: number;}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[name]} />
    </svg>
  )
}

const solutions: [IconName, string, string][] = [
  [
    "camera",
    "CFTV",
    "Monitoramento em alta definição com inteligência de vídeo.",
  ],
  [
    "bell",
    "Alarmes",
    "Proteção ativa com sensores e centrais de alta performance.",
  ],
  [
    "lock",
    "Controle de Acesso",
    "Gestão segura de pessoas, ambientes e horários.",
  ],
  [
    "network",
    "Redes Corporativas",
    "Conectividade estável e preparada para crescer.",
  ],
  [
    "fire",
    "Detecção de Incêndio",
    "Sistemas certificados para prevenção e resposta.",
  ],
  [
    "spark",
    "Automação",
    "Mais eficiência, conforto e controle para sua operação.",
  ],
  ["energy", "Energia", "Proteção elétrica para máxima continuidade."],
  [
    "building",
    "Infraestrutura",
    "Projetos completos, do cabeamento à operação.",
  ],
]
const testimonials = [
  [
    "MC",
    "Marina Costa",
    "Diretora • Grupo Costa Norte",
    "A ARCSEG entendeu nossa operação e entregou uma solução muito mais robusta do que imaginávamos.",
  ],
  [
    "RF",
    "Rafael Ferreira",
    "Engenheiro • RF Engenharia",
    "O suporte técnico faz toda a diferença. Temos segurança para indicar a ARCSEG em cada projeto.",
  ],
  [
    "AC",
    "Ana Clara",
    "Gestora • Clínica Integra",
    "Do diagnóstico à instalação, tudo foi conduzido com transparência, agilidade e competência.",
  ],
  [
    "JS",
    "João Silva",
    "Integrador parceiro",
    "Além dos melhores equipamentos, encontro orientação técnica e condições para crescer.",
  ],
  [
    "LM",
    "Lucas Martins",
    "Coordenador de TI • Maranhão Log",
    "Consolidamos redes, acesso e CFTV com um só parceiro. Hoje temos mais controle.",
  ],
  [
    "BP",
    "Beatriz Pereira",
    "Gerente • Hotel Brisa",
    "Equipe disponível, projeto bem executado e um pós-venda realmente presente.",
  ],
]
const testimonialPhotos = [
  "https://images.unsplash.com/photo-1559410117-4c12d656c06f?crop=faces&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1667133295328-62609fc2250b?crop=faces&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1729795795561-97daeedfec02?crop=faces&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1729795795466-d379c4543806?crop=faces&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1729795795344-3f102e3f9d37?crop=faces&fit=crop&w=160&h=160&q=80",
  "https://images.unsplash.com/photo-1559410117-4c12d656c06f?crop=faces&fit=crop&w=160&h=160&q=80",
]
const clientVideos = [
  {
    company: "Maranhão Log",
    segment: "Logística e distribuição",
    time: "4 anos de parceria",
    image:
      "https://images.unsplash.com/photo-1560895025-52541dfaf1a6?crop=entropy&fit=crop&w=900&h=560&q=80",
  },
  {
    company: "Grupo Costa Norte",
    segment: "Varejo corporativo",
    time: "6 anos de parceria",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&fit=crop&w=900&h=560&q=80",
  },
  {
    company: "RF Engenharia",
    segment: "Engenharia e integração",
    time: "3 anos de parceria",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&fit=crop&w=900&h=560&q=80",
  },
]
const WHATSAPP =
  "https://wa.me/559830890557?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20ARCSEG."
const nav = [
  ["Empresa", "empresa"],
  ["Autônomo", "autonomo"],
  ["Soluções", "empresa"],
  ["Depoimentos", "depoimentos"],
  ["Contato", "contato"],
]
function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`logo ${footer ? "footerLogo" : ""}`}
      href="#inicio"
      aria-label="Voltar ao topo do site ARCSEG"
    >
      <img src="/logo_arcseg.png" alt="ARCSEG Distribuidora" />
    </a>
  )
}
function Title({
  eyebrow,
  title,
  text,
  mobileText,
  light = false,
}: {
  eyebrow: string
  title: string
  text?: string
  mobileText?: string
  light?: boolean
}) {
  return (
    <div className={`title ${light ? "light" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p className={mobileText ? "trainingDesktopText" : undefined}>{text}</p>}
      {mobileText && <p className="trainingMobileText">{mobileText}</p>}
    </div>
  )
}

export default function App() {
  const [menu, setMenu] = useState(false),
    [faq, setFaq] = useState(0),
    [profile, setProfile] = useState("Empresa"),
    [sent, setSent] = useState(false),
    [proofTab, setProofTab] = useState<"text" | "video">("text"),
    [videoModal, setVideoModal] = useState<number | null>(null)
  // Controla a expansão dos depoimentos escritos somente no layout mobile.
  const [showAllReviews, setShowAllReviews] = useState(false)
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    window.open(WHATSAPP, "_blank", "noopener,noreferrer")
    setTimeout(() => setSent(false), 4500)
  }
  return (
    <div className="site">
      <header>
        <div className="container nav">
          <Brand />
          <nav className={menu ? "open" : ""}>
            {nav.map(([l, id]) => (
              <button onClick={() => go(id)} key={id}>
                {l}
              </button>
            ))}
            <div className="mobileContact">
              <b>(98) 3089-0557</b>
              <span>Av. Jerônimo de Albuquerque, 90 — Angelim</span>
              <span>comercialninex@hotmail.com</span>
              <span>gerencia.vendas@arcsegma.com.br</span>
              <a
                href="https://instagram.com/arcseg"
                target="_blank"
                rel="noreferrer"
              >
                @arcseg
              </a>
            </div>
          </nav>
          <a
            className="navCta"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="navCtaFull">Falar com consultor</span>
            <span className="navCtaCompact">Consultor</span>
          </a>
          <button
            className="menu"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            <Icon name={menu ? "x" : "menu"} />
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="grid" />
          <div className="container heroInner">
            <div className="heroCopy">
              <div className="tag">
                <Icon name="badge" size={15} /> DISTRIBUIDORA OFICIAL INTELBRAS
                NO MARANHÃO
              </div>
              <h1>
                Tecnologia e Segurança para <em>Impulsionar seu Negócio</em>
              </h1>
              <p>
                Há mais de uma década, oferecemos soluções em CFTV, alarmes,
                controle de acesso, redes corporativas e detecção de incêndio,
                com suporte especializado em todo o Maranhão.
              </p>
              <strong className="slogan">
                Seu parceiro estratégico em tecnologia e segurança
              </strong>
              <div className="actions">
                <button className="btn green" onClick={() => go("empresa")}>
                  Sou empresa <Icon name="arrow" />
                </button>
                <button className="btn outline" onClick={() => go("autonomo")}>
                  Sou autônomo <Icon name="arrow" />
                </button>
              </div>
              <div className="trust">
                {[
                  "Distribuidora Oficial Intelbras",
                  "Estoque Local",
                  "Suporte Técnico Especializado",
                  "Atendimento Empresarial e Residencial",
                ].map((x) => (
                  <span key={x}>
                    <Icon name="check" size={14} />
                    {x}
                  </span>
                ))}
              </div>
            </div>
            <div className="heroVisual">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=86&w=1400"
                alt="Equipe empresarial analisando estratégias de tecnologia"
                fetchPriority="high"
              />
              <div className="float f1">
                <Icon name="camera" />
                <span>
                  <small>MONITORAMENTO</small>
                  <b>Sistema online</b>
                </span>
              </div>
              <div className="float f2">
                <span>Segurança operacional</span>
                <b>98%</b>
                <i />
              </div>
              <div className="intel">
                intelbras <small>Parceiro oficial</small>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <div className="container">
            <Title
              eyebrow="POR QUE ESCOLHER A ARCSEG?"
              title="Estrutura local. Tecnologia global. Suporte de verdade."
              text="Credibilidade construída em mais de uma década ao lado de empresas, revendas e profissionais do Maranhão."
            />
          </div>
          <div className="container four credibilityGrid">
            {([
              [
                "clock",
                "13+ anos de mercado",
                "Experiência e confiança no mercado maranhense.",
              ],
              [
                "badge",
                "Distribuidora Oficial Intelbras",
                "Tecnologia original com procedência garantida.",
              ],
              [
                "building",
                "Estoque Local Imediato",
                "Agilidade para sua obra, instalação ou operação.",
              ],
              [
                "support",
                "Suporte Técnico Especializado",
                "Orientação antes, durante e depois da compra.",
              ],
              [
                "shield",
                "Nota Fiscal e Garantia",
                "Segurança comercial em todos os equipamentos.",
              ],
              [
                "network",
                "Parceira de Integradores e Revendas",
                "Condições e conhecimento para fazer parceiros crescerem.",
              ],
            ] as [IconName, string, string][]).map(([i, t, p], n) => (
              <article key={t}>
                <small>0{n + 1}</small>
                <div className="icon">
                  <Icon name={i} />
                </div>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Chamada direta ao cliente — substitui o antigo carrossel de campanhas. */}
        <section className="campaign dark campaignCta" aria-labelledby="campaign-cta-title">
          <div className="container campaignCtaInner">
            <div className="campaignCtaCopy">
              <h2 id="campaign-cta-title">Quer mais segurança para sua empresa?</h2>
              <p>
                Conte pra gente o que seu negócio precisa. A ARCSEG ajuda você
                a encontrar a solução ideal.
              </p>
            </div>
          </div>
        </section>

        <section className="testimonials" id="depoimentos">
          <div className="container">
            <div className="heading">
              <Title
                eyebrow="QUEM CONFIA, RECOMENDA"
                title="O que nossos clientes dizem"
                text="Empresas e profissionais que encontraram na ARCSEG a segurança de contar com especialistas."
              />
              <div className="score">
                <b>
                  98<small>%</small>
                </b>
                <span>
                  de satisfação
                  <br />
                  dos clientes
                </span>
              </div>
            </div>
            <div
              className="proofTabs"
              role="tablist"
              aria-label="Tipos de depoimentos"
            >
              <button
                className={proofTab === "text" ? "active" : ""}
                onClick={() => setProofTab("text")}
              >
                Depoimentos escritos
              </button>
              <button
                className={proofTab === "video" ? "active" : ""}
                onClick={() => setProofTab("video")}
              >
                Vídeos de clientes
              </button>
            </div>
            {proofTab === "text" ? (
              <>
              <div
                className={`reviews${showAllReviews ? " reviewsExpanded" : ""}`}
                id="reviews-list"
              >
                {testimonials.map(([av, n, r, p], index) => (
                  <article key={n}>
                    <Icon name="quote" />
                    <div className="stars">★★★★★</div>
                    <p>“{p}”</p>
                    <div className="person">
                      <img
                        src={testimonialPhotos[index]}
                        alt={`Foto de ${n}`}
                        loading="lazy"
                      />
                      <span>
                        <strong>{n}</strong>
                        <small>{r}</small>
                        <a
                          href="https://instagram.com/arcseg"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="instagram" size={13} /> @empresa_cliente
                        </a>
                      </span>
                    </div>
                  </article>
                ))}
              </div>
              <button
                type="button"
                className="reviewsMore"
                aria-controls="reviews-list"
                aria-expanded={showAllReviews}
                onClick={() => setShowAllReviews((value) => !value)}
              >
                {showAllReviews ? "Mostrar menos depoimentos" : "Mostrar mais depoimentos"}
                <Icon name="chevron" size={17} />
              </button>
              </>
            ) : (
              <div className="videoReviews">
                {clientVideos.map((video, index) => (
                  <button
                    key={video.company}
                    className="videoCard"
                    onClick={() => setVideoModal(index)}
                  >
                    <div>
                      <img
                        src={video.image}
                        alt={`Depoimento em vídeo — ${video.company}`}
                        loading="lazy"
                      />
                      <span>▶</span>
                    </div>
                    <strong>{video.company}</strong>
                    <small>
                      {video.segment} · {video.time}
                    </small>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="autonomo dark" id="autonomo">
          <div className="container split">
            <div>
              <Title
                light
                eyebrow="UNIVERSO DO PROFISSIONAL"
                title="Soluções para quem trabalha por conta própria"
                text="Conhecimento, suporte e condições especiais para você executar projetos melhores e fazer seu negócio evoluir."
              />
              <div className="pro">
                <Icon name="graduation" />
                <span>
                  <small>ARCSEG PRO</small>
                  <b>Você instala. A gente impulsiona.</b>
                </span>
              </div>
              <button className="btn green" onClick={() => go("contato")}>
                Quero evoluir profissionalmente <Icon name="arrow" />
              </button>
            </div>
            <div className="proCards">
              {([
                [
                  "book",
                  "Dicas técnicas",
                  "Conteúdos rápidos de boas práticas.",
                ],
                [
                  "calendar",
                  "Agenda de treinamentos",
                  "Cursos e capacitações com especialistas.",
                ],
                [
                  "support",
                  "Consultoria gratuita",
                  "Horários exclusivos para atendimento.",
                ],
                [
                  "energy",
                  "Promoções da semana",
                  "Ofertas selecionadas para autônomos.",
                ],
                [
                  "download",
                  "Materiais educativos",
                  "Guias e conteúdos para download.",
                ],
              ] as [IconName, string, string][]).map(([ic, t, p]) => (
                <article key={t}>
                  <div className="icon">
                    <Icon name={ic} />
                  </div>
                  <div>
                    <h3>{t}</h3>
                    <p>{p}</p>
                    <button onClick={() => go("contato")}>
                      Saber mais <Icon name="arrow" size={15} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="training">
          <div className="container trainingIntro">
            <Title
              eyebrow="CAPACITAÇÃO E TREINAMENTOS"
              title="Conhecimento que transforma profissionais em referência"
              text="A ARCSEG investe continuamente no crescimento dos profissionais do setor. Oferecemos treinamentos práticos para iniciantes e revendas experientes, ministrados por instrutores oficiais da fábrica da Intelbras, proporcionando atualização profissional, certificações e domínio das tecnologias mais utilizadas pelo mercado."
              mobileText="Treinamentos práticos e certificações para sua evolução profissional."
            />
            <div className="trainingGrid">
              {([
                [
                  "graduation",
                  "Treinamentos Presenciais",
                  "Aprendizado prático com especialistas.",
                ],
                [
                  "spark",
                  "Workshops Técnicos",
                  "Novas tecnologias e tendências.",
                ],
                [
                  "badge",
                  "Certificações",
                  "Diferenciais para atuação profissional.",
                ],
                ["calendar", "Agenda Mensal", "Cursos e eventos recorrentes."],
              ] as [IconName, string, string][]).map(([icon, title, text]) => (
                <article key={title}>
                  <div className="icon">
                    <Icon name={icon} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <a
              className="btn green"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Quero participar dos treinamentos <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="solutions" id="empresa">
          <div className="container">
            <Title
              eyebrow="SOLUÇÕES CORPORATIVAS"
              title="Sua empresa merece segurança inteligente"
              text="Um ecossistema completo de tecnologia para proteger ativos, conectar equipes e tornar sua operação mais eficiente."
            />
            <div className="solutionGrid">
              {solutions.map(([ic, t, p], n) => (
                <article key={t}>
                  <small>{String(n + 1).padStart(2, "0")}</small>
                  <div className="icon">
                    <Icon name={ic} />
                  </div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                  <button onClick={() => go("contato")}>
                    Saiba mais <Icon name="arrow" size={16} />
                  </button>
                </article>
              ))}
            </div>
            <div className="center">
              <button className="btn forest" onClick={() => go("contato")}>
                Solicitar orientação técnica <Icon name="arrow" />
              </button>
              <span>
                <Icon name="clock" size={16} /> Retorno em até 1 dia útil
              </span>
            </div>
          </div>
        </section>

        <section className="stats dark" id="numeros">
          <div className="container statsInner">
            <div>
              <span className="over">NOSSA HISTÓRIA EM NÚMEROS</span>
              <h2>
                Confiança construída
                <br />
                todos os dias.
              </h2>
            </div>
            <div className="statGrid">
              {[
                ["13+", "anos de atuação"],
                ["5k+", "equipamentos entregues"],
                ["800+", "clientes atendidos"],
                ["Oficial", "parceira Intelbras"],
                ["Expert", "suporte especializado"],
              ].map(([n, l]) => (
                <div key={l}>
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="partners">
          <div className="container">
            <Title
              eyebrow="MARCAS E PARCEIROS"
              title="Trabalhamos com as principais tecnologias do mercado"
              text="Soluções homologadas, fabricantes reconhecidos e a segurança de comprar com uma distribuidora oficial."
            />
            <div className="partnerGrid">
              <article className="intelbrasPartner">
                <b>intelbras</b>
                <span>Distribuidora oficial no Maranhão</span>
              </article>
              <article>
                <b>HIKVISION</b>
                <span>Videomonitoramento</span>
              </article>
              <article>
                <b>TP-Link</b>
                <span>Conectividade</span>
              </article>
              <article>
                <b>WD PURPLE</b>
                <span>Armazenamento</span>
              </article>
              <article>
                <Icon name="badge" />
                <b>Produtos certificados</b>
                <span>Nota fiscal e garantia</span>
              </article>
            </div>
          </div>
        </section>

        <section className="lead dark" id="contato">
          <div className="container split leadSplit">
            <div>
              <Title
                light
                eyebrow="FALE COM UM ESPECIALISTA"
                title="Vamos encontrar a solução ideal para você"
                text="Conte sobre seu desafio. Nossa equipe fará uma análise inicial e entrará em contato com a melhor orientação."
              />
              <div className="contacts">
                <p>
                  <Icon name="phone" />
                  <span>
                    <small>TELEFONE E WHATSAPP</small>
                    <b>(98) 3089-0557</b>
                  </span>
                </p>
                <p>
                  <Icon name="mail" />
                  <span>
                    <small>E-MAILS COMERCIAIS</small>
                    <b>comercialninex@hotmail.com</b>
                    <b>gerencia.vendas@arcsegma.com.br</b>
                  </span>
                </p>
                <p>
                  <Icon name="map" />
                  <span>
                    <small>ENDEREÇO</small>
                    <b>
                      Av. Jerônimo de Albuquerque, 90 — Angelim, São Luís - MA
                    </b>
                  </span>
                </p>
                <p>
                  <Icon name="instagram" />
                  <span>
                    <small>INSTAGRAM</small>
                    <a
                      className="contactInstagram"
                      href="https://www.instagram.com/arcseg/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @arcseg
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <form onSubmit={submit}>
              <div className="step">
                <b>01</b>
                <span>
                  <strong>Selecione seu perfil</strong>
                  <small>Assim direcionamos seu atendimento.</small>
                </span>
              </div>
              <div className="profiles">
                {["Empresa", "Profissional Autônomo"].map((x) => (
                  <button
                    type="button"
                    className={profile === x ? "active" : ""}
                    onClick={() => setProfile(x)}
                    key={x}
                  >
                    <Icon name={x === "Empresa" ? "building" : "user"} />
                    {x}
                  </button>
                ))}
              </div>
              <div className="step">
                <b>02</b>
                <span>
                  <strong>Seus dados</strong>
                  <small>Campos com * são obrigatórios.</small>
                </span>
              </div>
              <div className="fields">
                <label>
                  Nome completo *
                  <input required placeholder="Como podemos te chamar?" />
                </label>
                <label>
                  Empresa
                  <input placeholder="Nome da empresa (opcional)" />
                </label>
                <label>
                  E-mail *
                  <input required type="email" placeholder="seu@email.com.br" />
                </label>
                <label>
                  Telefone / WhatsApp *
                  <input
                    required
                    pattern="[0-9() +\\-]{10,}"
                    placeholder="(98) 99999-9999"
                  />
                </label>
                <label>
                  Cidade *<input required placeholder="Sua cidade" />
                </label>
                <label>
                  Principal interesse *
                  <select required defaultValue="">
                    <option value="" disabled>
                      Selecione uma solução
                    </option>
                    {solutions.map(([, t]) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="full">
                  Mensagem
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente sobre sua necessidade..."
                  />
                </label>
              </div>
              <label className="consent">
                <input required type="checkbox" /> Concordo com a Política de
                Privacidade.
              </label>
              <button className="btn green submit">
                {sent
                  ? "Mensagem enviada com sucesso"
                  : "Quero falar com a ARCSEG"}
              </button>
            </form>
          </div>
        </section>

        <section className="social">
          <div className="container">
            <Title
              eyebrow="ARCSEG EM TODOS OS CANAIS"
              title="Continue conectado com a ARCSEG"
              text="Informação, oportunidades e atendimento especializado sempre por perto."
            />
            <div className="socialGrid">
              {([
                [
                  "whatsapp",
                  "WhatsApp",
                  "Atendimento rápido para dúvidas e orçamentos.",
                ],
                [
                  "instagram",
                  "Instagram",
                  "Novidades, dicas técnicas e bastidores.",
                ],
                [
                  "linkedin",
                  "LinkedIn",
                  "Conteúdos para empresas e parceiros.",
                ],
              ] as [IconName, string, string][]).map(([ic, t, p]) => (
                <article key={t}>
                  <div className="icon">
                    <Icon name={ic} />
                  </div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                  <a
                    className="socialLink"
                    href={
                      t === "Instagram"
                        ? "https://instagram.com/arcseg"
                        : t === "WhatsApp"
                          ? WHATSAPP
                          : "#"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Acessar canal <Icon name="arrow" size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq">
          <div className="container split">
            <Title
              eyebrow="DÚVIDAS FREQUENTES"
              title="Informação clara para uma decisão segura"
              text="Não encontrou o que procurava? Nossa equipe está pronta para ajudar."
            />
            <div>
              {[
                [
                  "Vocês atendem todo o Maranhão?",
                  "Sim. Atendemos São Luís e todo o estado com suporte comercial e técnico.",
                ],
                [
                  "Vocês oferecem suporte para projetos complexos?",
                  "Sim. Nossa equipe oferece suporte técnico e auxilia no dimensionamento de projetos complexos, orientando a escolha de equipamentos e soluções adequados.",
                ],
                [
                  "Atendem empresas de pequeno porte?",
                  "Temos soluções escaláveis para pequenos negócios, grandes operações e autônomos.",
                ],
                [
                  "Existe suporte pós-venda?",
                  "Sim. Nosso relacionamento continua após a compra com acompanhamento especializado.",
                ],
                [
                  "Como agendar uma visita?",
                  "Preencha o formulário ou fale pelo WhatsApp para confirmar o melhor horário.",
                ],
              ].map(([q, a], n) => (
                <article
                  className={`faqItem ${faq === n ? "open" : ""}`}
                  key={q}
                >
                  <button onClick={() => setFaq(faq === n ? -1 : n)}>
                    <span>0{n + 1}</span>
                    <b>{q}</b>
                    <Icon name="chevron" />
                  </button>
                  <div>
                    <p>{a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final dark">
          <div className="container finalInner">
            <div>
              <span className="over">PRONTO PARA O PRÓXIMO PASSO?</span>
              <h2>
                Segurança, tecnologia e crescimento começam com a{" "}
                <em>parceria certa.</em>
              </h2>
              <p className="finalDescription">
                Descubra como a ARCSEG pode transformar sua infraestrutura
                tecnológica.{" "}
                <span className="finalPhoneContact">
                  Ligue para (98) 3089-0557 ou fale com nosso time.
                </span>
              </p>
              <p className="finalContact">
                <span className="finalContactAddress">
                  Av. Jerônimo de Albuquerque, 90 — Angelim
                </span>
                <span className="finalContactSeparator" aria-hidden="true">{" · "}</span>
                <span className="finalContactEmail">
                  gerencia.vendas@arcsegma.com.br
                </span>
                <span className="finalContactSeparator" aria-hidden="true">{" · "}</span>
                <span className="finalContactSocial">@arcseg</span>
              </p>
            </div>
            <div>
              <button className="btn green" onClick={() => go("contato")}>
                Solicitar orçamento <Icon name="arrow" />
              </button>
              <a
                className="btn outline"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="finalWhatsappIcon"
                  src="/logo_whatsapp_branco.png"
                  alt=""
                  aria-hidden="true"
                />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footerGrid">
          <div>
            <Brand footer />
            <p>
              Há mais de uma década conectando empresas às melhores soluções em
              tecnologia e segurança.
            </p>
          </div>
          <div>
            <h3>Navegação</h3>
            {nav.map(([l, id]) => (
              <button key={id} onClick={() => go(id)}>
                {l}
              </button>
            ))}
          </div>
          <div>
            <h3>Soluções</h3>
            {solutions.slice(0, 6).map(([, t]) => (
              <button onClick={() => go("empresa")} key={t}>
                {t}
              </button>
            ))}
          </div>
          <div>
            <h3>Fale conosco</h3>
            <p>
              Av. Jerônimo de Albuquerque, 90
              <br />
              Angelim — São Luís — MA
              <br />
              (98) 3089-0557
              <br />
              comercialninex@hotmail.com
              <br />
              gerencia.vendas@arcsegma.com.br
              <br />
              <a
                href="https://instagram.com/arcseg"
                target="_blank"
                rel="noreferrer"
              >
                @arcseg
              </a>
            </p>
          </div>
        </div>
        <div className="container bottom">
          © 2025 ARCSEG. Todos os direitos reservados.{" "}
          <span>Política de Privacidade · Termos de Uso</span>
          <b>
            Distribuidora Oficial <em>intelbras</em>
          </b>
        </div>
      </footer>
      <a
        className="floatingWhatsapp"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale com um especialista da ARCSEG"
      >
        <span>Fale com um especialista da ARCSEG</span>
        <img src="/logo_whatsapp.png" alt="" aria-hidden="true" />
      </a>
      {videoModal !== null && (
        <div
          className="videoModal"
          role="dialog"
          aria-modal="true"
          aria-label="Depoimento em vídeo"
        >
          <button
            className="modalClose"
            onClick={() => setVideoModal(null)}
            aria-label="Fechar vídeo"
          >
            <Icon name="x" />
          </button>
          <div className="modalContent">
            <video controls autoPlay poster={clientVideos[videoModal].image}>
              <source
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                type="video/mp4"
              />
            </video>
            <div>
              <span>DEPOIMENTO DE CLIENTE</span>
              <h3>{clientVideos[videoModal].company}</h3>
              <p>
                {clientVideos[videoModal].segment} ·{" "}
                {clientVideos[videoModal].time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
