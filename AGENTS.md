# Vela Capixaba — Site Institucional

> Site institucional da escola de vela Vela Capixaba (Vitória/ES).
> Stack: Next.js 14 + Tailwind CSS 3 + Decap CMS. 100% free (Vercel Hobby).

## Status atual (06/09/2026)

✅ **Site rodando localmente** em `http://localhost:3003` (dev server ativo)
✅ **Build de produção OK** (13 páginas estáticas, ~101kB First Load JS)
✅ **Estrutura completa**: Home, Sobre, Cursos (4), Galeria, Contato
✅ **Painel admin** em `/admin/index.html` (Decap CMS — backend GitHub precisa OAuth)
✅ **Conteúdo do Curso Iniciante** completo (do PDF)

## Stack & versões

- **Next.js**: 14.2.35 (App Router)
- **React**: 18
- **Tailwind CSS**: 3.4.19 (v4 tem incompatibilidade com binário nativo no Windows)
- **Node**: 24.17.0 (mínimo recomendado: 18.18+)
- **Decap CMS**: ^3.0.0 (carregado via CDN em `/admin/index.html`)
- **Backend CMS**: GitHub (precisa configurar OAuth app)

## Estrutura de pastas

```
web/
├── public/
│   ├── admin/
│   │   ├── index.html      # Decap CMS UI
│   │   └── config.yml      # Collections do CMS
│   └── images/             # Logo + fotos (renomeadas)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout global (Header + Footer + WhatsAppFloat)
│   │   ├── page.tsx        # Home
│   │   ├── globals.css     # Paleta + fontes
│   │   ├── sobre/page.tsx
│   │   ├── cursos/
│   │   │   ├── page.tsx
│   │   │   ├── iniciante/page.tsx   # Carro-chefe
│   │   │   ├── avancado/page.tsx
│   │   │   ├── regatas/page.tsx
│   │   │   └── passeios/page.tsx
│   │   ├── galeria/page.tsx
│   │   └── contato/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   └── lib/
│       └── data.ts         # Dados estáticos (DEPOIS migra pro Decap CMS)
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
└── package.json
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

## Como rodar local

```bash
cd "C:\Users\Matheus\Documents\Matheus Docs\MinimaX\Vela Capixaba\web"
npm install
npm run dev -- -p 3003
```

Abre em `http://localhost:3003`.

> ⚠️ A porta 3003 é a do Vela Capixaba pra não conflitar com Sapataria Martinelli (3002) e Financeiro Unificado (3001).

## Pendente

### Pra colocar no ar (você/Matheus)

- [ ] **Subir o código pro GitHub** (`faccod/vela-capixaba`)
  - Criar repo no GitHub Desktop → "Add existing repository" → apontar pra `web/`
  - Fazer commit + push
- [ ] **Deploy na Vercel** (importar o repo)
  - Vercel detecta Next.js automaticamente
  - Pegar URL temporária tipo `vela-capixaba.vercel.app`
- [ ] **Configurar domínio** `velacapixaba.com.br`
  - Adicionar domínio na Vercel
  - No Registro.br: records A + CNAME direto (NÃO mexer em nameservers)
  - Vercel já fornece os valores exatos

### Pra o cliente editar pelo painel

- [ ] **Configurar GitHub OAuth** pro Decap CMS
  - Criar OAuth app: https://github.com/settings/applications/new
  - Callback URL: `https://api.netlify.com/auth/done` (Decap usa Netlify Identity como proxy OAuth, gratuito)
  - Adicionar Client ID/Secret no Netlify (criar conta free)
  - Atualizar `public/admin/config.yml` com as credenciais
- [ ] **Cliente acessa** `velacapixaba.com.br/admin/index.html` e edita

### Conteúdo que falta do cliente (ver `../cliente-info.md`)

- [ ] Instrutores (nomes, bios, fotos)
- [ ] 3 serviços sem detalhes: Avançado, Regatas, Passeios
- [ ] Próximas turmas com datas reais
- [ ] Depoimentos reais (3-6)
- [ ] FAQ completo
- [ ] Horário de funcionamento detalhado
- [ ] Política de cancelamento
- [ ] Vídeos (MP4 ou link YouTube/IG)

## Notas técnicas

- **Dev server atual**: rodando em background na porta 3003 (PID 29632, log em `dev-server.log`)
- **Tailwind v4 deu pau** no Windows (lightningcss binário incompatível) — fix foi downgrade pra v3
- **Next 16 deu pau** no Windows (SWC binário incompatível) — fix foi downgrade pra Next 14
- **Imagens em /public/images/** — já estão com nomes significativos (hero-barco, galeria-01, etc)
- **WhatsApp correto** (corrigido em 06/09/2026): `(27) 99953-9293` → `wa.me/5527999539293` (55+27+999539293)
- **Mensagem padrão do WhatsApp** (configurada no `data.ts`):
  > "Oi, Marlon! Vim pelo site da Vela Capixaba e tô interessado na turma de [NOME] do dia [DATA]. Pode me passar mais detalhes? Valeu!"

## Próximos passos sugeridos

1. Matheus cria repo no GitHub via GitHub Desktop
2. Push do código
3. Importa na Vercel
4. Me chama pra ajudar a configurar o domínio e o OAuth do Decap
5. Site no ar 🎉
