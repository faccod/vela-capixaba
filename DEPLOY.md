# 🚀 Guia de Deploy — Vela Capixaba

Passo a passo mastigado pra colocar o site no ar.

---

## ETAPA 1 — Subir o código pro GitHub (via GitHub Desktop)

- [ ] Abre o **GitHub Desktop**
- [ ] Clica em **"Add an existing local repository"** (ou `File → Add Local Repository`)
- [ ] Em "Local path" clica em **"Choose..."** e navega até:
      ```
      C:\Users\Matheus\Documents\Matheus Docs\MinimaX\Vela Capixaba\web
      ```
- [ ] Clica em **"Add Repository"**
- [ ] No campo de mensagem de commit (canto inferior esquerdo) escreve:
      ```
      feat: site institucional Vela Capixaba V1
      ```
- [ ] Clica em **"Commit to main"**
- [ ] Clica em **"Publish repository"** (canto superior direito)
- [ ] Em "Name" deixa como `vela-capixaba` (ou o nome que quiser)
- [ ] **DESmarca** "Keep this code private" (tem que ser público pra Vercel free acessar)
- [ ] Clica em **"Publish Repository"**
- [ ] Aguarda o upload concluir (uns segundos)

✅ **Pronto! Código tá no GitHub em `github.com/faccod/vela-capixaba`**

---

## ETAPA 2 — Deploy na Vercel (via web)

- [ ] Acessa [vercel.com](https://vercel.com) e faz login (com GitHub)
- [ ] Clica em **"Add New → Project"**
- [ ] Procura `vela-capixaba` na lista e clica em **"Import"**
- [ ] Em "Framework Preset" deixa **Next.js** (já detecta automático)
- [ ] Em "Root Directory" deixa **./** (padrão)
- [ ] **NÃO** marca "Override" em nada
- [ ] Clica em **"Deploy"**
- [ ] Espera o build terminar (uns 1-2 min)
- [ ] Vai aparecer um "Congratulations! Your project has been deployed" 🎉

✅ **Site no ar em `https://vela-capixaba.vercel.app`**

---

## ETAPA 3 — Apontar o domínio `velacapixaba.com.br`

### 3.1 Adicionar o domínio na Vercel

✅ **JÁ FEITO em 06/09/2026** (via API)
- Domínio `velacapixaba.com.br` adicionado
- `www.velacapixaba.com.br` adicionado (redireciona pro apex)

### 3.2 Adicionar os records no Registro.br (SEM mexer em nameservers!)

Os valores **exatos** que a Vercel espera (capturados em 06/09/2026):

```
Tipo     Host    Valor
A        @       76.76.21.21
CNAME    www     cname.vercel-dns.com
```

- [ ] Acessa [registro.br](https://registro.br) e faz login
- [ ] Vai em **"Meus Domínios" → `velacapixaba.com.br` → "DNS"**
- [ ] Se aparecer pra escolher entre "DNS avançado" e "Mudança de DNS", clica em **"DNS avançado"** ⚠️ **NUNCA mexer em nameservers**
- [ ] Apaga qualquer record antigo que conflite (tipo A ou CNAME no @ ou www)
- [ ] Adiciona:
      - **Tipo A**, Host `@` (ou deixe vazio), Valor `76.76.21.21`
      - **Tipo CNAME**, Host `www`, Valor `cname.vercel-dns.com`
- [ ] Clica em **"Salvar"**

### 3.3 Aguardar propagação

- [ ] A propagação pode levar de 5 min a 2h (raramente mais)
- [ ] Pra testar, abre uma **aba anônima** e acessa `velacapixaba.com.br`
- [ ] Se aparecer o site, tá no ar 🎉
- [ ] Se não aparecer, espera mais um pouco (não é problema, é só DNS propagando)

✅ **Site no ar em `https://velacapixaba.com.br`**

### 🔗 URLs atuais (06/09/2026)

- **Produção Vercel (técnica)**: `https://web-tau-rust-14.vercel.app/`
- **Produção Vercel (após rename)**: `https://vela-capixaba.vercel.app/` (vai funcionar quando propagar)
- **Domínio customizado**: `https://velacapixaba.com.br/` (depois do DNS)
- **Painel admin**: `https://velacapixaba.com.br/admin/index.html` (depois do DNS)

---

## ETAPA 4 — Painel admin pro cliente editar (OPCIONAL agora)

Só faz se o Marlon já quiser começar a editar pelo painel.

- [ ] Cria conta grátis no [Netlify](https://netlify.com) (vinculado ao GitHub)
- [ ] No Netlify, vai em **"Identity"** → **"Enable Identity"**
- [ ] Em **"Services"** → **"Git Gateway"** → **"Enable Git Gateway"**
- [ ] Vai em **"Identity" → "Invite users"** e convida o Marlon
- [ ] Cria um **GitHub OAuth App** em [github.com/settings/applications/new](https://github.com/settings/applications/new):
      - Homepage URL: `https://velacapixaba.com.br`
      - Callback URL: `https://api.netlify.com/auth/done`
- [ ] Copia o **Client ID** e gera um **Client Secret**
- [ ] No Netlify, em **"Site settings" → "Access & security"** cola as credenciais
- [ ] Edita `public/admin/config.yml` no projeto e adiciona o `base_url` correto
- [ ] Commit + push pro GitHub
- [ ] Vercel redeploya automático

✅ **Cliente edita pelo painel `velacapixaba.com.br/admin`**

---

## ❌ Erros comuns

- **"Domain not configured"**: DNS ainda propagando. Espera.
- **"Invalid Configuration"**: confere se os records no Registro.br estão EXATOS como a Vercel passou.
- **"Build failed"**: volta no painel da Vercel, clica no deploy que falhou e vê o log. Me chama que eu resolvo.
- **Cache do Chrome mostrando erro "DNS_PROBE_FINISHED_NXDOMAIN"**: abre **aba anônima** pra testar.
- **Trocou nameservers no Registro.br e travou**: **NÃO MEXE EM NAMESERVERS** (essa é a regra de ouro). Se travou, volta pra "DNS avançado" e usa records.

---

## 💬 Dúvidas?

Me chama aqui. Vou te ajudar em cada etapa.
