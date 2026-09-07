# Vela Capixaba — Site Institucional

> Site institucional da escola de vela Vela Capixaba (Vitória/ES).
> Stack: Next.js 14 + Tailwind CSS 3 + Decap CMS. 100% free (Vercel Hobby).

## Status atual (07/09/2026)

✅ **Site no ar em produção**
- Domínio customizado: `https://velacapixaba.com.br/` (DNS propagou!)
- URL Vercel técnica: `https://web-tau-rust-14.vercel.app/`
- URL Vercel alias: `https://vela-capixaba.vercel.app/`
- 15 páginas estáticas geradas, 87.2kB First Load JS (excelente performance)

✅ **GitHub**: `github.com/faccod/vela-capixaba` (público, ~70 arquivos sincronizados)

✅ **Vercel projeto**: `vela-capixaba` (org `faccod-1408s-projects`, ID `prj_n0M1EL7Myhw1L0zc7kSEU2TqUNdU`)

✅ **Decap CMS / Painel Admin (07/09/2026)**:
- URL: `https://velacapixaba.com.br/admin/index.html`
- 7 collections: settings, home, turmas, depoimentos, faq, instrutores, galeria
- 15 arquivos de conteúdo populados (settings, hero, 1 turma-exemplo, 3 depoimentos Google, 8 FAQ)
- Site lê via `src/lib/cms.ts` com fallback hardcoded
- Marlon convidado como **editor** em 07/09/2026 (aguarda confirmação de email)

✅ **Netlify** (projeto `vela-capixaba`):
- Identity + Git Gateway ativos (token GitHub vinculado automaticamente)
- Owner: faccod@gmail.com

✅ **Conteúdo completo**:
- 6 serviços (Iniciante, Avançado, Regatas, Passeios, Aluguel, Consultoria)
- Curso Iniciante (carro-chefe) com página dedicada + tabela de preços completa
- 3 depoimentos reais do Google (5.0★)
- Badge "5.0 ★★★★★" no hero da home e na página de contato
- 8 perguntas no FAQ
- Galeria com 10 fotos
- Google Maps embed na página de contato

✅ **Atualizações do cliente aplicadas em 06/09/2026**:
- Texto de entrada novo: "Escola de Vela na Praia da Guarderia, em Vitória/ES..."
- Foto da capa mais visível (opacidade 70% vs 50%)
- "Mais que uma escola. O seu lugar no mar" (Quem somos)
- Logo maior no header (h-16 no desktop)
- Horário: Segunda a Domingo, a partir das 08:00
- Badge de avaliações: só "5.0 ★★★★★" (sem número de reviews)

✅ **Atualizações do cliente aplicadas em 06/09/2026**:
- Texto de entrada novo: "Escola de Vela na Praia da Guarderia, em Vitória/ES..."
- Foto da capa mais visível (opacidade 70% vs 50%)
- "Mais que uma escola. O seu lugar no mar" (Quem somos)
- Logo maior no header (h-16 no desktop)
- Horário: Segunda a Domingo, a partir das 08:00
- Badge de avaliações: só "5.0 ★★★★★" (sem número de reviews)

## Stack & versões

- **Next.js**: 14.2.35 (App Router) — Next 16 e Tailwind 4 dão pau de binário nativo no Windows
- **React**: 18
- **Tailwind CSS**: 3.4.19
- **Node**: 24.17.0
- **TypeScript**: 5
- **Decap CMS**: ^3.0.0 (carregado via CDN em `/admin/index.html`)
- **Backend CMS**: GitHub via Netlify Identity + Git Gateway (sem OAuth App customizado — Netlify usa o token do owner automaticamente)
- **Autenticação CMS**: Netlify Identity (free, OAuth proxy)

## Estrutura de pastas

```
web/
├── public/
│   ├── admin/
│   │   ├── index.html      # Decap CMS UI
│   │   └── config.yml      # Collections do CMS
│   └── images/             # 12 fotos + 2 logos
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout global (Header + Footer + WhatsAppFloat)
│   │   ├── page.tsx        # Home
│   │   ├── globals.css     # Paleta + fontes
│   │   ├── sobre/page.tsx
│   │   ├── cursos/
│   │   │   ├── page.tsx
│   │   │   ├── iniciante/page.tsx    # Carro-chefe
│   │   │   ├── avancado/page.tsx
│   │   │   ├── regatas/page.tsx
│   │   │   ├── passeios/page.tsx
│   │   │   ├── aluguel/page.tsx
│   │   │   └── consultoria/page.tsx
│   │   ├── galeria/page.tsx
│   │   └── contato/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   └── lib/
│       ├── data.ts         # Dados estáticos (fallback)
│       ├── cms.ts          # Loader CMS (lê JSON de /content com fallback pro data.ts)
│       └── whatsapp.ts     # WhatsApp utils (separado p/ não importar fs em client)
├── content/                # Editável pelo Decap CMS via /admin
│   ├── settings/site.json
│   ├── home/hero.json
│   ├── turmas/
│   ├── depoimentos/
│   ├── faq/
│   ├── instrutores/        # (vazio, Marlon cadastra)
│   └── galeria/            # (vazio, Marlon cadastra)
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── package.json
├── push-changes.ps1        # Script PowerShell (não usar, deu erro)
└── DEPLOY.md               # Guia de deploy passo a passo
```

## Paleta oficial (extraída do logo em 06/09/2026)

- **Azul marinho** `#01416c` (texto "VELA" do logo)
- **Dourado** `#ffc000` (sol amarelo do logo)
- **Branco** `#ffffff` (vela do logo)
- **Areia** `#f5f1e8` (fundo de seções)
- Tons de apoio: azul `#0a5a8f`, azul-claro `#1e7bb8`, dourado-claro `#ffd84d`, dourado-escuro `#e6a800`

## Fontes

- **Display (títulos)**: Barlow Condensed (Black, 900)
- **Corpo**: Inter (Regular, 500, 600)

## Identidade do cliente

- **Nome fantasia**: Vela Capixaba
- **Razão social**: Centro Náutico Capixaba
- **CNPJ**: 42.349.408/0001-13
- **WhatsApp**: (27) 99953-9293 (`wa.me/5527999539293`)
- **E-mail**: marloniatismo@gmail.com (temporário, vai criar @velacapixaba.com.br)
- **Instagram**: @velacapixaba
- **Endereço**: Centro Náutico Capixaba, Av. Américo Buaiz, 1811, Enseada do Suá, Vitória-ES, 29050-463
- **Atendimento**: Marlon (dono)
- **Horário**: Segunda a Domingo, a partir das 08:00
- **Credenciamentos**: World Sailing + FECAI
- **Google Business**: 5.0★ (escola de iatismo em Vitória, ES)

## Como rodar local

```bash
cd "C:\Users\Matheus\Documents\Matheus Docs\MinimaX\Vela Capixaba\web"
npm install
npm run dev -- -p 3003
```

Abre em `http://localhost:3003`. Dev server atual roda em PID 29632 com log em `dev-server.log`.

> ⚠️ A porta 3003 é a do Vela Capixaba pra não conflitar com Sapataria Martinelli (3002) e Financeiro Unificado (3001).

## ⚠️ PENDENTE CRÍTICO: DNS não propagou

**Sintoma**: Os 2 records DNS (A + CNAME) estão salvos no painel do Registro.br (visível na UI), mas o servidor autoritativo `a.auto.dns.br` / `b.auto.dns.br` não está respondendo com eles. SOA serial atualizou (de `2026249930` pra `2026250000`), confirmando que a UI registrou a mudança, mas a publicação no servidor DNS falhou silenciosamente.

**Workarounds** (testar em ordem):
1. **Deletar e re-adicionar** os 2 records (forçar re-sync)
2. **Abrir chamado no suporte do Registro.br** (https://registro.br/ajuda) — mencionar:
   - "Adicionei 2 records na zona DNS avançada. A UI mostra os records salvos, o serial do SOA atualizou, mas os servidores `a.auto.dns.br` / `b.auto.dns.br` não estão respondendo com os records."
3. Esperar 24h (alguns casos resolvem sozinhos, mas improvável)

**Valores DNS esperados** (capturados via Vercel API em 06/09/2026):
```
Tipo     Host    Valor
A        @       76.76.21.21
CNAME    www     cname.vercel-dns.com
```

## Pendente do cliente (ver `../cliente-info.md`) — Marlon edita via /admin

- [ ] Instrutores (nomes, bios, fotos individuais)
- [ ] 5 serviços sem detalhes: Avançado, Regatas, Passeios, Aluguel, Consultoria (a gente atualiza no `data.ts` se mudar copy)
- [ ] Próximas turmas (datas, vagas, instrutor)
- [ ] Depoimentos — adicionar mais 3-6 (já tem 3 do Google)
- [ ] FAQ — adicionar mais (já tem 8)
- [ ] Galeria — adicionar fotos
- [ ] Vídeos (MP4 ou link YouTube/IG) — prometidos pelo Matheus
- [ ] E-mail institucional @velacapixaba.com.br (cliente vai criar)

## 🔧 Decisão 07/09/2026: Desistir do Decap CMS, fazer painel admin CUSTOM

**Por que paramos com Decap CMS + Netlify Identity:**
- Email de signup confirmation NÃO chega no Gmail do Marlon (mas welcome chega)
- Tentamos com `marloniatismo@gmail.com` e `marlonos1@hotmail.com` — Hotmail funcionou, mas depois deu erro "t" no login (provavelmente rate limit ou token expirado)
- API admin do Netlify Identity mudou e não tem endpoint estável pra forçar confirmação
- Gmail filtro específico em template de signup do GoTrue

**Plano de ataque pra próxima sessão: Painel admin custom in-house**

Stack:
- **Banco**: Vercel KV (free tier, 256 MB) — NoSQL simples key-value
- **Auth**: senha mestra única (env var `ADMIN_PASSWORD`)
- **API routes** (Next.js): GET/POST em `/api/cms/[collection]`
- **UI**: página `/admin` no site (NÃO `/admin/index.html` do Decap)
- **Upload de fotos**: Vercel Blob (free tier) ou salvar como base64

Collections editáveis:
- ⚙️ Settings (WhatsApp, endereço, horário, etc)
- 🏠 Home (hero, sobre, serviços)
- 📅 Turmas (cards)
- ⭐ Depoimentos (com upload de foto)
- ❓ FAQ
- 👥 Equipe / Instrutores
- 📸 Galeria

**Tarefas (estimativa: 2-3h):**
1. [ ] Setup Vercel KV (10 min)
2. [ ] API routes GET/POST (30-40 min)
3. [ ] Página `/admin` com formulários (1h)
4. [ ] Migração do site pra ler do KV (com fallback `data.ts`) (20-30 min)
5. [ ] Upload de fotos via Vercel Blob (20 min)
6. [ ] Testes + deploy (20 min)

**Antes de começar, Matheus precisa definir:**
- Senha mestra do admin (ex: `vela2026` ou uma aleatória)
- Se o Marlon também vai ter acesso ou só o Matheus

**Depois de pronto:**
- Marlon acessa `velacapixaba.com.br/admin`, digita a senha, edita à vontade
- Site atualiza em ~5s (sem rebuild, Vercel KV é read-on-request)

## Limpeza a fazer antes de começar

- [ ] Deletar `web/public/admin/` (config.yml + index.html do Decap)
- [ ] Deletar `web/content/` (arquivos JSON que não vão ser usados)
- [ ] Deletar `web/src/lib/cms.ts` e `web/src/lib/whatsapp.ts` (vão virar inúteis)
- [ ] Deletar projeto Netlify (não vamos mais usar)
- [ ] Confirmar se o site volta a usar 100% `data.ts` enquanto o painel custom não tá pronto

## Notas da sessão 07/09/2026

- Netlify Identity: 1 usuário convidado (`marlonos1@hotmail.com`), deletar na próxima sessão
- Bug Gmail com Netlify Identity signup confirmation: ver memória do agent
- Token GitHub OAuth `gho_HeUodk...` foi exposto em arquivos antigos — rotacionar em github.com/settings/tokens
- Scripts com token em `_archive/` (mover pra fora do repo)

## URLs e credenciais

- **Produção**: https://velacapixaba.com.br/ (aguardando DNS)
- **Vercel alias técnica**: https://web-tau-rust-14.vercel.app/ (funcionando)
- **GitHub repo**: https://github.com/faccod/vela-capixaba
- **Vercel dashboard**: https://vercel.com/faccod-1408s-projects/vela-capixaba
- **Registro.br**: titular é Marlon Oliveira da Silva (CPF 139.298.507-29)
- **Token Vercel** (em uso): armazenado em `setx` na sessão Mavis (não persistido)
- **Token GitHub**: armazenado em variável de ambiente `GITHUB_TOKEN` durante uso (não commitado). Ver `references/github-deploy.md` na agent memory.

## Próximos passos (quando retomar)

1. ✅ ~~Resolver DNS do Registro.br~~ (propagou em 07/09/2026)
2. ✅ ~~Configurar OAuth do Decap CMS~~ (Git Gateway via Netlify Identity, sem OAuth App customizado)
3. ✅ ~~Convidar Marlon como editor~~ (07/09/2026, aguarda confirmação de email)
4. Quando Marlon confirmar email: testar login em `velacapixaba.com.br/admin/index.html`
5. Aguardar cliente enviar: instrutores, detalhes dos 5 serviços secundários, próximas turmas, mais depoimentos, FAQ, vídeos
6. Configurar e-mail institucional @velacapixaba.com.br
