import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  ChevronDown,
  Facebook,
  Instagram,
  Link2,
  Menu,
  MessageCircle,
  Search,
  Twitter,
  User,
  X,
  Youtube,
} from "lucide-react";

import candidato from "@/assets/candidato.jpg";
import colunista from "@/assets/colunista.png";
import nepalDestruicao from "@/assets/nepal-destruicao.jpg";
import nepalAjuda from "@/assets/nepal-ajuda.jpg";
import nepalResgate from "@/assets/nepal-resgate.jpg";
import flavioAjuda from "@/assets/flavio-ajuda.jpg";

export const Route = createFileRoute("/")({
  component: Materia,
  head: () => ({
    meta: [
      {
        title:
          "Flávio Bolsonaro mobiliza mutirão para apoiar famílias no Nepal | VNN",
      },
      {
        name: "description",
        content:
          "Campanha comunitária para apoiar famílias atingidas por desastres no Nepal.",
      },
      {
        property: "og:title",
        content:
          "Flávio Bolsonaro mobiliza mutirão para apoiar famílias no Nepal | VNN",
      },
      {
        property: "og:description",
        content:
          "Campanha comunitária de arrecadação para famílias atingidas no Nepal.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const VAKINHA_URL = "https://vakinha-online-app.netlify.app/";

const LOGO_CONFIG = {
  src: "/logo.jpg",
  marca: "CNNovo",
  subtitulo: "BRASIL",
  editoria: "Política",
};

const SITE_CONFIG = {
  nome: "CNN Brasil",
  sigla: LOGO_CONFIG.marca,
};

const MENU = [
  "Ao vivo",
  "Política",
  "WW",
  "Agro",
  "Infra",
  "IA",
  "Esportes",
  "Viagem & Gastronomia",
];

const MAIS_LIDAS = [
  {
    t: "Voluntários brasileiros desembarcam em Katmandu com carga de agasalhos",
    img: nepalAjuda,
  },
  {
    t: "Entenda por que as encostas do Himalaia cederam depois das chuvas",
    img: nepalDestruicao,
  },
  {
    t: "Flávio Bolsonaro diz que ajuda humanitária deve chegar a quem precisa",
    img: candidato,
  },
  {
    t: "ONGs alertam para risco de epidemia em abrigos improvisados no vale",
    img: nepalAjuda,
  },
];

const AO_VIVO = [
  {
    hora: "12:18",
    txt: "Comitiva confirma envio de um segundo lote com 12 toneladas de mantimentos.",
  },
  {
    hora: "11:40",
    txt: "Prefeituras parceiras abrem pontos de coleta de cobertores em nove capitais.",
  },
  {
    hora: "10:05",
    txt: "Flávio Bolsonaro acompanha os esforços para alinhar a logística do embarque.",
  },
];

/* ---------------- Header ---------------- */

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [buscaAberta, setBuscaAberta] = useState(false);
  const [termo, setTermo] = useState("");
  const [buscaEnviada, setBuscaEnviada] = useState(false);
  const [contaAberta, setContaAberta] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAberto]);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="flex min-h-12 items-center bg-topbar text-white">
          <div className="flex shrink-0 items-center gap-1 px-2">
            <button
              type="button"
              aria-label="Buscar"
              onClick={() => setBuscaAberta((v) => !v)}
              className="p-2"
            >
              <Search size={19} />
            </button>
            <button
              type="button"
              aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuAberto((v) => !v)}
              className="p-2"
            >
              {menuAberto ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <a
            href="/"
            className="flex min-w-0 items-center"
            aria-label={`${LOGO_CONFIG.marca} ${LOGO_CONFIG.editoria}`}
          >
            {LOGO_CONFIG.src ? (
              <img
                src={LOGO_CONFIG.src}
                alt={LOGO_CONFIG.marca}
                className="h-12 w-auto max-w-[8rem] object-contain"
              />
            ) : (
              <span className="flex h-12 w-14 shrink-0 flex-col items-center justify-center bg-vnn leading-none">
                <span className="font-display text-[19px] font-extrabold tracking-[-0.06em] text-white">
                  {LOGO_CONFIG.marca}
                </span>
                <span className="text-[6px] font-bold tracking-[0.22em] text-white">
                  {LOGO_CONFIG.subtitulo}
                </span>
              </span>
            )}
            <span className="relative whitespace-nowrap px-2 font-display text-[22px] font-black uppercase leading-none tracking-normal text-white">
              {LOGO_CONFIG.editoria}
              <span
                aria-hidden="true"
                className="absolute bottom-[-3px] right-1 h-1.5 w-1.5 rotate-45 bg-emerald-400"
              />
            </span>
          </a>

          <button
            type="button"
            aria-expanded={contaAberta}
            aria-label="Minha conta"
            onClick={() => setContaAberta((v) => !v)}
            className="ml-auto shrink-0 p-3"
          >
            <User size={21} />
          </button>
        </div>

        {buscaAberta && (
          <form
            className="flex items-center gap-2 bg-topbar px-3 pb-2"
            onSubmit={(e) => {
              e.preventDefault();
              setBuscaEnviada(true);
            }}
          >
            <input
              value={termo}
              onChange={(e) => {
                setTermo(e.target.value);
                setBuscaEnviada(false);
              }}
              placeholder={`Buscar no ${SITE_CONFIG.nome}`}
              className="min-w-0 flex-1 rounded-sm bg-white/12 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-vnn px-3 py-2 text-xs font-bold uppercase text-white"
            >
              Buscar
            </button>
          </form>
        )}

        {contaAberta && (
          <div className="border-t border-white/10 bg-topbar px-4 py-3 text-xs text-white/80">
            Área de conta em preparação. Para apoiar, use o link oficial da
            campanha.
          </div>
        )}

        {buscaAberta && buscaEnviada && (
          <p className="bg-topbar px-3 pb-2 text-xs text-white/70">
            Resultados para: <strong className="text-white">{termo || "todas as notícias"}</strong>
          </p>
        )}

      </header>

      {menuAberto && (
        <nav className="fixed inset-x-0 top-[48px] bottom-0 z-40 overflow-y-auto bg-topbar text-white">
          <ul className="divide-y divide-white/10">
            {MENU.map((item) => (
              <li key={item}>
                <a
                  href="#materia"
                  onClick={() => setMenuAberto(false)}
                  className="flex items-center gap-2 px-5 py-4 text-[15px] font-semibold"
                >
                  {item === "Ao vivo" && (
                    <span className="h-2 w-2 rounded-full bg-vnn" />
                  )}
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="p-5">
            <a
              href={VAKINHA_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block bg-vnn px-4 py-3 text-center text-sm font-bold uppercase"
            >
              Apoiar a campanha
            </a>
          </div>
        </nav>
      )}
    </>
  );
}

/* ---------------- Blocos ---------------- */

function Aviso() {
  return (
    <p className="bg-amber-100 px-4 py-1.5 text-[11px] leading-snug text-amber-950">
      <strong className="font-bold uppercase">Campanha comunitária</strong> —
      informações sobre a mobilização e seus objetivos.
    </p>
  );
}

function BlogBanner() {
  return (
    <section className="relative overflow-hidden bg-vnn">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 120%, transparent 38%, rgba(0,0,0,.55) 39%, transparent 40%), radial-gradient(circle at 15% 120%, transparent 58%, rgba(0,0,0,.45) 59%, transparent 60%), radial-gradient(circle at 90% -20%, transparent 45%, rgba(0,0,0,.4) 46%, transparent 47%)",
        }}
      />
      <div className="relative flex items-end gap-3 px-4 pt-3">
        <img
          src={colunista}
          alt="Retrato do colunista Caio Andrade"
          loading="lazy"
          width={700}
          height={900}
          className="h-28 w-auto shrink-0 self-end object-contain"
        />
        <div className="min-w-0 pb-3 text-white">
          <span className="inline-block bg-white px-2 py-0.5 text-[11px] font-bold text-vnn">
            Blog
          </span>
          <h2 className="mt-1.5 text-lg font-bold leading-tight">
            Caio Andrade
          </h2>
          <p className="mt-1 text-[11px] leading-snug text-white/90">
            Acompanha a política nacional e internacional, com foco em ações de
            solidariedade.
          </p>
        </div>
      </div>
    </section>
  );
}

function Compartilhar() {
  const [copiado, setCopiado] = useState(false);
  const botao =
    "flex h-9 w-9 items-center justify-center rounded-full border border-rule text-ink transition-colors hover:bg-muted";

  return (
    <div className="flex items-center gap-2 border-y border-rule py-3">
      <a
        className={botao}
        aria-label="Compartilhar no Facebook"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "/")}`}
      >
        <Facebook size={16} />
      </a>
      <a
        className={botao}
        aria-label="Compartilhar no X"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/intent/tweet?text=Campanha%20pelo%20Nepal"
      >
        <Twitter size={16} />
      </a>
      <a
        className={botao}
        aria-label="Compartilhar no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send?text=Campanha%20pelo%20Nepal"
      >
        <MessageCircle size={16} />
      </a>
      <button
        type="button"
        aria-label="Copiar link"
        className={botao}
        onClick={() => {
          if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
          }
          setCopiado(true);
          setTimeout(() => setCopiado(false), 2000);
        }}
      >
        <Link2 size={16} />
      </button>
      {copiado && (
        <span className="text-[11px] text-muted-foreground">Link copiado</span>
      )}
    </div>
  );
}

function TituloSecao({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-1.5 text-lg font-bold text-vnn">
      {children}
      <span className="mt-1 inline-block h-1.5 w-1.5 bg-vnn" />
    </h2>
  );
}

function AoVivo() {
  const [aba, setAba] = useState<"tempo-real" | "resumo">("tempo-real");

  return (
    <section className="my-8">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5 bg-vnn px-2 py-0.5 text-[11px] font-bold uppercase text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Ao vivo
        </span>
        <h2 className="text-base font-bold text-ink">Mutirão pelo Nepal</h2>
      </div>

      <div className="mt-3 flex border-b border-rule">
        {(["tempo-real", "resumo"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setAba(k)}
            className={`-mb-px border-b-2 px-3 py-2 text-xs font-bold uppercase transition-colors ${
              aba === k
                ? "border-vnn text-vnn"
                : "border-transparent text-muted-foreground"
            }`}
          >
            {k === "tempo-real" ? "Tempo real" : "Resumo"}
          </button>
        ))}
      </div>

      {aba === "tempo-real" ? (
        <ul className="divide-y divide-rule">
          {AO_VIVO.map((i) => (
            <li key={i.hora} className="flex gap-3 py-3">
              <span className="shrink-0 pt-0.5 text-xs font-bold text-vnn">
                {i.hora}
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-ink">
                {i.txt}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-4 text-sm leading-relaxed text-ink">
          A força-tarefa reúne prefeituras, igrejas e entidades civis em torno de
          uma meta única: enviar abrigo, alimento e remédio às vilas isoladas do
          Himalaia antes da virada do inverno.
        </p>
      )}
    </section>
  );
}

function Vakinha() {
  return (
    <aside className="my-7 border border-rule">
      <div className="bg-vnn px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white">
        Campanha solidária
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold leading-tight text-ink">
          Um cobertor, uma refeição, um telhado
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          A arrecadação para as famílias do Nepal é feita em uma vaquinha
          pública, com prestação de contas semanal. Qualquer valor entra no mesmo
          lote de compra de mantimentos.
        </p>
        <a
          href={VAKINHA_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-4 block bg-vnn px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-vnn-dark"
        >
          Doar na vaquinha
        </a>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Confira os detalhes e as regras da arrecadação na página oficial.
        </p>
      </div>
    </aside>
  );
}

function CardVideo() {
  return (
    <figure className="my-6">
      <img
          src={flavioAjuda}
          alt="Equipe de ajuda distribui mantimentos a moradores após uma tragédia no Nepal"
        loading="lazy"
        width={1200}
        height={800}
        className="h-auto w-full"
      />
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        Entrega de kits de inverno em um abrigo temporário • Imagem de apoio
      </figcaption>
    </figure>
  );
}

function MaisLidas() {
  return (
    <section className="my-8">
      <TituloSecao>Mais lidas</TituloSecao>
      <ol className="mt-3 space-y-3">
        {MAIS_LIDAS.map((m, i) => (
          <li key={m.t}>
            <a
              href={VAKINHA_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block border border-rule"
            >
              <div className="relative">
                <img
                  src={m.img}
                  alt=""
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-40 w-full object-cover"
                />
                <span className="absolute left-0 top-0 bg-vnn px-2 py-1 text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <p className="px-3 py-3 text-[15px] font-bold leading-snug text-ink">
                {m.t}
              </p>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  return (
    <section className="my-8 bg-muted p-4">
      <TituloSecao>Newsletter</TituloSecao>
      <p className="mt-2 text-sm text-ink">
        Receba atualizações sobre a campanha e as ações de apoio.
      </p>
      <form
        className="mt-3 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setOk(true);
        }}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu e-mail"
          className="min-w-0 flex-1 border border-rule bg-background px-3 py-2 text-sm outline-none focus:border-vnn"
        />
        <button
          type="submit"
          className="shrink-0 bg-vnn px-4 py-2 text-xs font-bold uppercase text-white"
        >
          Assinar
        </button>
      </form>
      {ok && (
        <p className="mt-2 text-xs text-vnn">
          Inscrição realizada com sucesso.
        </p>
      )}
    </section>
  );
}

function Footer() {
  const [aberto, setAberto] = useState<string | null>(null);
  const grupos: Record<string, string[]> = {
    Editorias: [
      "Política",
      "Nacional",
      "Economia",
      "Internacional",
      "Esportes",
      "Saúde",
      "Tecnologia",
      "Viagem & Gastronomia",
    ],
    Mais: ["Newsletter", "Podcasts", "Aplicativo", "WebStories"],
    [SITE_CONFIG.nome]: ["Quem somos", "Princípios editoriais", "Fale conosco"],
  };

  return (
    <footer className="bg-topbar text-white">
      <div className="px-4 py-6">
        {LOGO_CONFIG.src ? (
          <img
            src={LOGO_CONFIG.src}
            alt={LOGO_CONFIG.marca}
            className="h-10 w-auto max-w-[8rem] object-contain"
          />
        ) : (
          <span className="flex h-10 w-16 flex-col items-center justify-center bg-vnn leading-none">
            <span className="font-display text-[21px] font-extrabold tracking-[-0.06em]">
              {LOGO_CONFIG.marca}
            </span>
            <span className="text-[6px] font-bold tracking-[0.22em]">
              {LOGO_CONFIG.subtitulo}
            </span>
          </span>
        )}

        <p className="mt-4 text-[11px] text-white/60">
          Precisa de ajuda? Fale com a {SITE_CONFIG.nome}
        </p>

        <a
          href="#materia"
          className="mt-4 flex items-center gap-2 border-y border-white/12 py-3 text-sm font-bold uppercase"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-vnn" />
          Ao vivo
        </a>

        <div className="divide-y divide-white/12 border-b border-white/12">

          {Object.entries(grupos).map(([titulo, itens]) => (
            <div key={titulo}>
              <button
                type="button"
                onClick={() => setAberto(aberto === titulo ? null : titulo)}
                className="flex w-full items-center justify-between py-3 text-left text-sm font-bold uppercase"
              >
                {titulo}
                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform ${aberto === titulo ? "rotate-180" : ""}`}
                />
              </button>
              {aberto === titulo && (
                <ul className="pb-3">
                  {itens.map((i) => (
                    <li key={i}>
                      <a
                        href="#materia"
                        className="block py-1.5 text-sm text-white/70"
                      >
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex gap-3">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full border border-white/25"><Facebook size={16} /></a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="grid h-9 w-9 place-items-center rounded-full border border-white/25"><Twitter size={16} /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full border border-white/25"><Instagram size={16} /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full border border-white/25"><Youtube size={16} /></a>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-white/55">
          {SITE_CONFIG.nome} informa que esta página apresenta uma campanha comunitária.
          Consulte a página oficial da arrecadação, os responsáveis e as
          atualizações de prestação de contas antes de contribuir.
        </p>
      </div>
    </footer>
  );
}

function VoltarAoTopo() {
  const [visivel, setVisivel] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visivel) return null;
  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-vnn text-white shadow-lg sm:bottom-5"
    >
      <ArrowUp size={20} />
    </button>
  );
}

function AgeGate() {
  const [aberto, setAberto] = useState(true);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0b0d10]/75 p-4 backdrop-blur-[2px]">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
        <img
          src={nepalDestruicao}
          alt="Imagem de apoio do Nepal"
          className="h-[520px] w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#101418]/80 p-6 shadow-2xl backdrop-blur-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-vnn">
              Conteúdo adulto
            </p>

            <h3 className="mt-3 text-3xl font-black leading-tight text-white">
              Você tem 18 anos ou mais?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Este site pode conter informações e imagens relacionadas a temas que
              exigem maioridade para acesso.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="rounded-xl bg-vnn px-4 py-3 text-sm font-bold uppercase text-white transition-transform hover:scale-[1.01]"
              >
                Entrar
              </button>
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="rounded-xl border border-white/15 bg-white/3 px-4 py-3 text-sm font-bold uppercase text-white/85 transition-colors hover:bg-white/8"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BotaoVakinhaFlutuante() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-2 sm:inset-x-auto sm:bottom-5 sm:left-4">
      <p className="hidden max-w-44 rounded-sm bg-white px-2 py-1.5 text-[11px] font-semibold leading-tight text-ink shadow-md sm:block">
        Apoie a campanha humanitária pela página oficial.
      </p>
      <a
        href={VAKINHA_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Abrir a página oficial da Vakinha"
        className="animate-pulse flex-1 rounded-sm bg-vnn px-4 py-3 text-center text-xs font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-vnn-dark sm:flex-none"
      >
        Ajude já
      </a>
    </div>
  );
}

function GoogleNews() {
  return (
    <section className="my-7 border border-rule p-4 text-center">
      <p className="text-sm font-semibold leading-snug text-ink">
        Siga a {SITE_CONFIG.nome} no Google Notícias e receba as principais atualizações
      </p>
      <a
        href="https://news.google.com/search?q=campanha%20comunitaria%20Nepal"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 text-xs font-bold uppercase text-ink"
      >
        Seguir no Google
        <ArrowUpRight size={14} />
      </a>
    </section>
  );
}

function Topicos() {
  const tags = [
    "Nepal",
    "Flávio Bolsonaro",
    "Solidariedade",
    "Ajuda humanitária",
    "Eleições 2026",
  ];
  return (
    <section className="my-7">
      <TituloSecao>Tópicos</TituloSecao>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <a
            key={t}
            href="#materia"
            className="rounded-md border border-rule px-3 py-1.5 text-[13px] font-semibold text-muted-foreground"
          >
            {t}
          </a>
        ))}
      </div>
    </section>
  );
}

function MaisLidasBox() {
  return (
    <section className="my-7 border border-rule">
      <h2 className="border-b border-rule px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink">
        Mais lidas em Política
      </h2>
      <ul className="divide-y divide-rule">
        {MAIS_LIDAS.slice(0, 3).map((m) => (
          <li key={m.t}>
            <a
              href={VAKINHA_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-3 p-3"
            >
              <p className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-ink">
                {m.t}
              </p>
              <img
                src={m.img}
                alt=""
                loading="lazy"
                width={200}
                height={140}
                className="h-14 w-20 shrink-0 object-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function PesquisasRelacionadas() {
  const buscas = [
    "Campanha de doação Nepal",
    "Como ajudar famílias no Nepal",
    "Pontos de coleta de agasalhos",
    "Flávio Bolsonaro ajuda humanitária",
  ];
  return (
    <section className="my-7">
      <h2 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
        Pesquisas relacionadas
      </h2>
      <ul className="mt-3 space-y-2">
        {buscas.map((b) => (
          <li key={b}>
            <a
              href="#materia"
              className="flex items-center justify-between gap-2 rounded-full border border-rule px-4 py-2.5 text-[13px] font-medium text-ink"
            >
              <span className="min-w-0 truncate">{b}</span>
              <Search size={14} className="shrink-0 text-muted-foreground" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DestaqueFoto() {
  return (
    <a
      href={VAKINHA_URL}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="my-7 block"
    >
      <img
        src={nepalDestruicao}
        alt="Equipe resgata uma moradora durante uma enchente no Nepal"
        loading="lazy"
        width={1200}
        height={800}
        className="h-auto w-full"
      />
      <span className="mt-2 block text-[11px] font-bold uppercase text-vnn">
        Mundo
      </span>
      <p className="mt-1 text-[15px] font-bold leading-snug text-ink">
        Um corredor de ajuda tenta vencer as estradas bloqueadas e a chegada do
        inverno
      </p>
    </a>
  );
}

function WebStories({ titulo }: { titulo: string }) {
  const itens = [
    {
      t: "Mesmo em meio ao caos, moradores organizam cozinhas comunitárias",
      img: nepalAjuda,
    },
    {
      t: "Kits de inverno: o que realmente faz diferença nas montanhas",
      img: nepalDestruicao,
    },
  ];
  return (
    <section className="my-7">
      <TituloSecao>{titulo}</TituloSecao>
      <ul className="mt-3 divide-y divide-rule border-y border-rule">
        {itens.map((i) => (
          <li key={i.t}>
            <a
              href={VAKINHA_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex items-center gap-3 py-3"
            >
              <img
                src={i.img}
                alt=""
                loading="lazy"
                width={200}
                height={140}
                className="h-16 w-24 shrink-0 object-cover"
              />
              <p className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-ink">
                {i.t}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BannerPatrocinado() {
  return (
    <section className="my-7 bg-vnn-dark px-4 py-6 text-center text-white">
      <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">
        Apoio à campanha
      </p>
      <h2 className="mt-2 text-2xl font-extrabold leading-tight">
        Mutirão do Inverno
      </h2>
      <p className="mt-2 text-sm leading-snug text-white/85">
        Informações sobre a mobilização de inverno e as formas de apoio.
      </p>
      <a
        href={VAKINHA_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="mt-4 inline-block bg-vnn px-5 py-2.5 text-xs font-bold uppercase"
      >
        Saiba mais
      </a>
    </section>
  );
}

/* ---------------- Página ---------------- */


function Materia() {
  return (
    <div className="min-h-screen bg-background font-sans text-ink">
      <AgeGate />
      <Header />
      <BlogBanner />

      <main id="materia" className="mx-auto w-full max-w-screen-sm overflow-hidden px-3 sm:px-4">
        <h1 className="mt-5 break-words text-[clamp(26px,8vw,30px)] font-bold leading-[1.08]">
          Flávio Bolsonaro mobiliza mutirão para arrecadar doações para famílias
          afetadas pela tragédia no Nepal
        </h1>
        <p className="mt-3 text-[15px] leading-snug text-ink/80">
          Arrecadação prevê cobertores, comida e remédio antes da virada do
          inverno no Himalaia
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          03/09/26 às 12:34 | Atualizado 03/09/26 às 12:41
        </p>

        <figure className="mt-4">
          <div className="relative">
            <img
              src={nepalResgate}
              alt="Equipe resgata uma moradora durante uma enchente no Nepal"
              width={1200}
              height={800}
              className="h-auto w-full"
            />
            <span className="absolute right-0 top-0 grid h-8 w-8 place-items-center bg-vnn text-white">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Vila no vale do Himalaia após as chuvas • Imagem de apoio
          </figcaption>
        </figure>

        <div className="mt-4 flex items-center gap-3">
          <p className="min-w-0 text-xs leading-snug">
            <span className="font-bold">Redação {SITE_CONFIG.sigla}</span>
            <br />
            <span className="text-muted-foreground">
              Do Rio de Janeiro e de Brasília
            </span>
          </p>
        </div>

        <div className="mt-4">
          <Compartilhar />
        </div>

        <article className="mt-5 space-y-4 text-[17px] leading-[1.7]">
          <p className="font-semibold">
            Famílias afetadas pela tragédia no Nepal enfrentam perdas, falta de
            abrigo e a chegada do inverno. O mutirão apoiado por Flávio Bolsonaro
            busca reunir doações para cobertores, água, alimentos e itens de
            higiene, com acompanhamento público da arrecadação.
          </p>
          <p>
            Nas vilas mais altas, o que restou das casas de tijolo cru cabe em
            uma sacola. Famílias dormem em galpões comunitários, dividem um fogão
            a lenha e esperam por estradas que ainda levarão semanas para
            reabrir. As equipes locais falam em duas urgências que não podem
            esperar: agasalho e água potável.
          </p>
          <p>
            “Não dá para ignorar famílias que perderam o básico para viver”,
            afirmou Flávio Bolsonaro ao apresentar a mobilização. A arrecadação
            será convertida em cobertores térmicos, kits
            de higiene, lonas e alimento não perecível, comprados de fornecedores
            da própria região para não paralisar o comércio local.
          </p>

          <CardVideo />

          <h2 className="pt-1 text-xl font-bold leading-tight">
            O que já foi anunciado
          </h2>
          <p>
            O plano divulgado prevê três frentes: envio imediato de carga
            humanitária, um fundo de reconstrução de moradias simples e uma
            parceria com hospitais de campanha para atender crianças e idosos
            expostos ao frio. Os pontos de coleta físicos ficariam a cargo de
            prefeituras parceiras.{" "}
            <a
              href={VAKINHA_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="font-semibold text-vnn underline underline-offset-2"
            >
              A vaquinha da campanha está aberta a doações
            </a>
            .
          </p>

          <Vakinha />

          <p>
            A prestação de contas anunciada é semanal e pública:
            nota fiscal de cada compra, lista de itens embarcados e registro de
            entrega nas comunidades. É esse tipo de rastro que separa uma
            campanha séria de uma promessa vazia.
          </p>

          <blockquote className="border-l-4 border-vnn bg-muted px-4 py-3 text-base italic leading-relaxed">
            “A ajuda que chega rápido vale por três que chegam depois do
            inverno.” — coordenadora de logística
          </blockquote>

          <p>
            Organizações que atuam no país reforçam que doações em dinheiro
            rendem mais do que doações de objetos, porque permitem comprar perto
            do destino e cortar o custo do frete internacional. A expectativa
            registrada no material da campanha é atender 4 mil famílias em uma
            primeira etapa.
          </p>
        </article>

        <AoVivo />
        <MaisLidas />
      </main>

      <Footer />
      <BotaoVakinhaFlutuante />
      <VoltarAoTopo />
    </div>
  );
}
