// Loader dos arquivos JSON do Decap CMS
// Esses arquivos ficam em /content/ e são editados pelo painel /admin
// Quando o cliente edita, o Decap comita no GitHub → Vercel rebuilda → site atualiza

import { promises as fs } from "fs";
import path from "path";
import {
  CURSO_INICIANTE,
  DEPOIMENTOS as DEPOIMENTOS_FALLBACK,
  FAQ as FAQ_FALLBACK,
  PROXIMAS_TURMAS as PROXIMAS_TURMAS_FALLBACK,
  SERVICOS,
  SITE as SITE_FALLBACK,
} from "./data";

const CONTENT_DIR = path.join(process.cwd(), "content");

async function readJson<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch (err) {
    // Arquivo não existe ou tá com erro de parse → usa fallback hardcoded
    return fallback;
  }
}

async function readJsonDir<T>(dir: string): Promise<T[]> {
  try {
    const fullDir = path.join(CONTENT_DIR, dir);
    const files = await fs.readdir(fullDir);
    const jsonFiles = files.filter((f) => f.endsWith(".json"));
    const items = await Promise.all(
      jsonFiles.map(async (f) => {
        const content = await fs.readFile(path.join(fullDir, f), "utf-8");
        return JSON.parse(content) as T;
      }),
    );
    return items;
  } catch {
    return [];
  }
}

export type SiteSettings = typeof SITE_FALLBACK;
export type Turma = (typeof PROXIMAS_TURMAS_FALLBACK)[number] & {
  ativa?: boolean;
  whatsappMsg?: string;
};
export type Depoimento = (typeof DEPOIMENTOS_FALLBACK)[number] & {
  avaliacao?: number;
  fonte?: string;
  ativo?: boolean;
};
export type FaqItem = (typeof FAQ_FALLBACK)[number] & {
  ativa?: boolean;
  ordem?: number;
};
export type Instrutor = {
  nome: string;
  cargo?: string;
  foto?: string;
  bio?: string;
  certificacoes?: string[];
  ordem?: number;
  ativo?: boolean;
};
export type GaleriaItem = {
  titulo: string;
  imagem: string;
  categoria?: string;
  ordem?: number;
  ativa?: boolean;
};
export type HomeContent = {
  badge1?: string;
  badge2?: string;
  headline?: string;
  subtitulo?: string;
  destaque?: string;
  cta1?: string;
  cta2?: string;
  sobreTitulo?: string;
  sobreSubtitulo?: string;
  sobreTexto?: string;
  servicosTitulo?: string;
  servicosSubtitulo?: string;
};

// ====== Site Settings (settings globais) ======
export async function getSettings(): Promise<SiteSettings> {
  return readJson(
    path.join(CONTENT_DIR, "settings", "site.json"),
    SITE_FALLBACK,
  );
}

// ====== Home content (textos da hero e seções) ======
export async function getHomeContent(): Promise<HomeContent | null> {
  try {
    const content = await fs.readFile(
      path.join(CONTENT_DIR, "home", "hero.json"),
      "utf-8",
    );
    return JSON.parse(content) as HomeContent;
  } catch {
    return null;
  }
}

// ====== Turmas ======
export async function getTurmas(): Promise<Turma[]> {
  const fromCms = await readJsonDir<Turma>("turmas");
  const ativas = fromCms.filter((t) => t.ativa !== false);
  if (ativas.length > 0) return ativas;
  return PROXIMAS_TURMAS_FALLBACK;
}

// ====== Depoimentos ======
export async function getDepoimentos(): Promise<Depoimento[]> {
  const fromCms = await readJsonDir<Depoimento>("depoimentos");
  const ativos = fromCms.filter((d) => d.ativo !== false);
  if (ativos.length > 0) return ativos;
  return DEPOIMENTOS_FALLBACK;
}

// ====== FAQ ======
export async function getFaq(): Promise<FaqItem[]> {
  const fromCms = await readJsonDir<FaqItem>("faq");
  const ativas = fromCms.filter((f) => f.ativa !== false);
  if (ativas.length > 0) {
    // ordena por ordem, depois mantém ordem de criação
    return ativas.sort(
      (a, b) => (a.ordem ?? 99) - (b.ordem ?? 99),
    );
  }
  return FAQ_FALLBACK;
}

// ====== Instrutores ======
export async function getInstrutores(): Promise<Instrutor[]> {
  const fromCms = await readJsonDir<Instrutor>("instrutores");
  const ativos = fromCms.filter((i) => i.ativo !== false);
  if (ativos.length > 0) {
    return ativos.sort((a, b) => (a.ordem ?? 99) - (b.ordem ?? 99));
  }
  return [];
}

// ====== Galeria ======
export async function getGaleria(): Promise<GaleriaItem[]> {
  const fromCms = await readJsonDir<GaleriaItem>("galeria");
  const ativas = fromCms.filter((g) => g.ativa !== false);
  if (ativas.length > 0) {
    return ativas.sort((a, b) => (a.ordem ?? 99) - (b.ordem ?? 99));
  }
  return [];
}

export { SERVICOS, CURSO_INICIANTE };
