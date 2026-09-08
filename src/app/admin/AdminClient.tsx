"use client";

import { useState } from "react";

type Data = {
  settings: any;
  turmas: any[];
  depoimentos: any[];
  faq: any[];
  instrutores: any[];
  galeria: any[];
  home: any;
};

const TABS = [
  { id: "settings", label: "⚙️ Config" },
  { id: "home", label: "🏠 Home" },
  { id: "turmas", label: "📅 Turmas" },
  { id: "depoimentos", label: "⭐ Depoimentos" },
  { id: "faq", label: "❓ FAQ" },
  { id: "instrutores", label: "👥 Equipe" },
  { id: "galeria", label: "📸 Galeria" },
];

export default function AdminClient({ initialData }: { initialData: Data }) {
  const [tab, setTab] = useState("settings");
  const [data, setData] = useState<Data>(initialData);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  async function save(collection: string) {
    setSaving(true);
    setMsg("");
    try {
      const body = (data as any)[collection];
      const res = await fetch(`/api/cms/${collection}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setMsg(`✅ ${collection} salvo! Site atualiza em ~5s.`);
      } else {
        const j = await res.json().catch(() => ({}));
        setMsg(`❌ Erro: ${j.error || res.statusText}`);
      }
    } catch (e) {
      setMsg(`❌ Erro de rede: ${(e as Error).message}`);
    }
    setSaving(false);
  }

  function updateField(collection: string, field: string, value: any) {
    setData((d) => ({ ...d, [collection]: { ...(d as any)[collection], [field]: value } }));
  }

  function updateArrayItem(collection: string, idx: number, field: string, value: any) {
    setData((d) => {
      const arr = [...(d as any)[collection]];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...d, [collection]: arr };
    });
  }

  function addArrayItem(collection: string, template: any) {
    setData((d) => ({ ...d, [collection]: [...(d as any)[collection], { id: Date.now(), ...template }] }));
  }

  function removeArrayItem(collection: string, idx: number) {
    setData((d) => {
      const arr = [...(d as any)[collection]];
      arr.splice(idx, 1);
      return { ...d, [collection]: arr };
    });
  }

  return (
    <div className="min-h-screen bg-cinza-claro pb-24">
      <header className="bg-azul-marinho text-white sticky top-0 z-10 shadow">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-2">
          <h1 className="text-lg sm:text-xl font-black">Vela Capixaba · Admin</h1>
          <div className="flex items-center gap-2">
            <a
              href="/tutorial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-dourado/20 hover:bg-dourado/30 text-dourado border border-dourado/40 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5"
              title="Como usar o painel"
            >
              <span>❓</span>
              <span className="hidden sm:inline">Como usar</span>
            </a>
            <form action="/api/admin/logout" method="POST">
              <button className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg">
                Sair
              </button>
            </form>
          </div>
        </div>
        <nav className="bg-azul-marinho border-t border-white/10">
          <div className="max-w-3xl mx-auto px-2 py-2 flex gap-1 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => { setTab(t.id); setMsg(""); }}
                className={`whitespace-nowrap px-3 py-2 rounded-lg text-sm font-bold transition ${
                  tab === t.id ? "bg-dourado text-azul-marinho" : "text-white/80 hover:bg-white/10"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {msg && (
        <div className="max-w-3xl mx-auto px-4 mt-4">
          <div className="bg-white border border-cinza-200 rounded-lg p-3 text-sm font-medium">
            {msg}
          </div>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {tab === "settings" && (
          <SettingsForm
            settings={data.settings}
            onChange={(field, value) => updateField("settings", field, value)}
            onSave={() => save("settings")}
            saving={saving}
          />
        )}
        {tab === "home" && (
          <HomeForm
            home={data.home}
            onChange={(field, value) => updateField("home", field, value)}
            onSave={() => save("home")}
            saving={saving}
          />
        )}
        {tab === "turmas" && (
          <ArrayForm
            title="Próximas Turmas"
            collection="turmas"
            items={data.turmas}
            fields={[
              { name: "tipo", label: "Tipo", type: "text" },
              { name: "data", label: "Data (texto)", type: "text" },
              { name: "horario", label: "Horário", type: "text" },
              { name: "vagas", label: "Vagas", type: "number" },
              { name: "local", label: "Local", type: "text" },
              { name: "instrutor", label: "Instrutor", type: "text" },
              { name: "whatsappMsg", label: "Mensagem WhatsApp (opcional)", type: "textarea" },
              { name: "ativa", label: "Ativa?", type: "checkbox" },
            ]}
            template={{ tipo: "Curso Iniciante", data: "", horario: "9h às 13h", vagas: 6, local: "Praia da Guarderia", instrutor: "Marlon", ativa: true }}
            onUpdateItem={updateArrayItem}
            onAddItem={addArrayItem}
            onRemoveItem={removeArrayItem}
            onSave={() => save("turmas")}
            saving={saving}
          />
        )}
        {tab === "depoimentos" && (
          <ArrayForm
            title="Depoimentos"
            collection="depoimentos"
            items={data.depoimentos}
            fields={[
              { name: "nome", label: "Nome (ou inicial)", type: "text" },
              { name: "cidade", label: "Cidade", type: "text", defaultValue: "Vitória/ES" },
              { name: "texto", label: "Texto", type: "textarea" },
              { name: "foto", label: "URL da foto (opcional)", type: "text" },
              { name: "avaliacao", label: "Nota (1-5)", type: "number", defaultValue: 5 },
              { name: "fonte", label: "Fonte", type: "text", defaultValue: "Google" },
              { name: "ativo", label: "Ativo?", type: "checkbox" },
            ]}
            template={{ nome: "", cidade: "Vitória/ES", texto: "", foto: "", avaliacao: 5, fonte: "Google", ativo: true }}
            onUpdateItem={updateArrayItem}
            onAddItem={addArrayItem}
            onRemoveItem={removeArrayItem}
            onSave={() => save("depoimentos")}
            saving={saving}
          />
        )}
        {tab === "faq" && (
          <ArrayForm
            title="FAQ"
            collection="faq"
            items={data.faq}
            fields={[
              { name: "pergunta", label: "Pergunta", type: "text" },
              { name: "resposta", label: "Resposta", type: "textarea" },
              { name: "ordem", label: "Ordem (1 = primeiro)", type: "number", defaultValue: 99 },
              { name: "ativa", label: "Ativa?", type: "checkbox" },
            ]}
            template={{ pergunta: "", resposta: "", ordem: 99, ativa: true }}
            onUpdateItem={updateArrayItem}
            onAddItem={addArrayItem}
            onRemoveItem={removeArrayItem}
            onSave={() => save("faq")}
            saving={saving}
          />
        )}
        {tab === "instrutores" && (
          <ArrayForm
            title="Instrutores"
            collection="instrutores"
            items={data.instrutores}
            fields={[
              { name: "nome", label: "Nome", type: "text" },
              { name: "cargo", label: "Cargo", type: "text" },
              { name: "foto", label: "URL da foto", type: "text" },
              { name: "bio", label: "Bio", type: "textarea" },
              { name: "ordem", label: "Ordem", type: "number", defaultValue: 99 },
              { name: "ativo", label: "Ativo?", type: "checkbox" },
            ]}
            template={{ nome: "", cargo: "", foto: "", bio: "", ordem: 99, ativo: true }}
            onUpdateItem={updateArrayItem}
            onAddItem={addArrayItem}
            onRemoveItem={removeArrayItem}
            onSave={() => save("instrutores")}
            saving={saving}
          />
        )}
        {tab === "galeria" && (
          <ArrayForm
            title="Galeria"
            collection="galeria"
            items={data.galeria}
            fields={[
              { name: "titulo", label: "Título / legenda", type: "text" },
              { name: "imagem", label: "URL da imagem", type: "text" },
              { name: "categoria", label: "Categoria (aula/passeio/regata/equipe/barco/outros)", type: "text", defaultValue: "aula" },
              { name: "ordem", label: "Ordem", type: "number", defaultValue: 99 },
              { name: "ativa", label: "Ativa?", type: "checkbox" },
            ]}
            template={{ titulo: "", imagem: "", categoria: "aula", ordem: 99, ativa: true }}
            onUpdateItem={updateArrayItem}
            onAddItem={addArrayItem}
            onRemoveItem={removeArrayItem}
            onSave={() => save("galeria")}
            saving={saving}
          />
        )}
      </main>
    </div>
  );
}

// ====== Componentes de formulario ======

type FieldOnChange = (field: string, value: any) => void;

function SettingsForm({ settings, onChange, onSave, saving }: { settings: any; onChange: FieldOnChange; onSave: () => void; saving: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
      <h2 className="font-black text-lg text-azul-marinho">Configurações do site</h2>
      <Field label="Nome do site" type="text" value={settings.siteName || ""} onChange={(v) => onChange("siteName", v)} />
      <Field label="Slogan (tagline)" type="text" value={settings.tagline || ""} onChange={(v) => onChange("tagline", v)} />
      <Field label="WhatsApp (55 + DDD + número)" type="text" value={settings.whatsapp || ""} onChange={(v) => onChange("whatsapp", v)} />
      <Field label="WhatsApp formatado" type="text" value={settings.whatsappDisplay || ""} onChange={(v) => onChange("whatsappDisplay", v)} />
      <Field label="E-mail" type="text" value={settings.email || ""} onChange={(v) => onChange("email", v)} />
      <Field label="Instagram (URL)" type="text" value={settings.instagram || ""} onChange={(v) => onChange("instagram", v)} />
      <Field label="Instagram handle" type="text" value={settings.instagramHandle || ""} onChange={(v) => onChange("instagramHandle", v)} />
      <Field label="Endereço" type="textarea" value={settings.address || ""} onChange={(v) => onChange("address", v)} />
      <Field label="Horário" type="text" value={settings.horario || ""} onChange={(v) => onChange("horario", v)} />
      <Field label="CNPJ" type="text" value={settings.cnpj || ""} onChange={(v) => onChange("cnpj", v)} />
      <Field label="Razão social" type="text" value={settings.razaoSocial || ""} onChange={(v) => onChange("razaoSocial", v)} />
      <Field label="Google Maps embed URL" type="textarea" value={settings.googleMapsUrl || ""} onChange={(v) => onChange("googleMapsUrl", v)} />
      <SaveButton onSave={onSave} saving={saving} />
    </div>
  );
}

function HomeForm({ home, onChange, onSave, saving }: { home: any; onChange: FieldOnChange; onSave: () => void; saving: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
      <h2 className="font-black text-lg text-azul-marinho">Página Inicial (hero)</h2>
      <Field label="Badge 1" type="text" value={home.badge1 || ""} onChange={(v) => onChange("badge1", v)} />
      <Field label="Badge 2" type="text" value={home.badge2 || ""} onChange={(v) => onChange("badge2", v)} />
      <Field label="Headline" type="textarea" value={home.headline || ""} onChange={(v) => onChange("headline", v)} />
      <Field label="Subtítulo" type="textarea" value={home.subtitulo || ""} onChange={(v) => onChange("subtitulo", v)} />
      <Field label="Destaque (em dourado)" type="text" value={home.destaque || ""} onChange={(v) => onChange("destaque", v)} />
      <Field label="CTA principal" type="text" value={home.cta1 || ""} onChange={(v) => onChange("cta1", v)} />
      <Field label="CTA secundário" type="text" value={home.cta2 || ""} onChange={(v) => onChange("cta2", v)} />
      <Field label="Título da seção Sobre" type="text" value={home.sobreTitulo || ""} onChange={(v) => onChange("sobreTitulo", v)} />
      <Field label="Subtítulo da seção Sobre" type="textarea" value={home.sobreSubtitulo || ""} onChange={(v) => onChange("sobreSubtitulo", v)} />
      <Field label="Texto da seção Sobre" type="textarea" value={home.sobreTexto || ""} onChange={(v) => onChange("sobreTexto", v)} />
      <Field label="Título da seção Serviços" type="text" value={home.servicosTitulo || ""} onChange={(v) => onChange("servicosTitulo", v)} />
      <Field label="Subtítulo da seção Serviços" type="textarea" value={home.servicosSubtitulo || ""} onChange={(v) => onChange("servicosSubtitulo", v)} />
      <SaveButton onSave={onSave} saving={saving} />
    </div>
  );
}

function Field({ label, type, value, onChange }: { label: string; type: "text" | "textarea" | "number" | "checkbox"; value: any; onChange: (v: any) => void }) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-cinza-700 mb-1 block">{label}</span>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-cinza-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-azul-marinho"
        />
      ) : type === "checkbox" ? (
        <input
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 rounded"
        />
      ) : (
        <input
          type={type}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-cinza-300 px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-azul-marinho"
        />
      )}
    </label>
  );
}

function SaveButton({ onSave, saving }: { onSave: () => void; saving: boolean }) {
  return (
    <button
      onClick={onSave}
      disabled={saving}
      className="w-full mt-4 bg-dourado text-azul-marinho font-black py-3 rounded-xl text-base hover:brightness-95 active:scale-95 transition disabled:opacity-50"
    >
      {saving ? "Salvando..." : "💾 Salvar"}
    </button>
  );
}

type FieldDef = { name: string; label: string; type: "text" | "textarea" | "number" | "checkbox"; defaultValue?: any };
type ArrayFormProps = {
  title: string;
  collection: string;
  items: any[];
  fields: FieldDef[];
  template: any;
  onUpdateItem: (collection: string, idx: number, field: string, value: any) => void;
  onAddItem: (collection: string, template: any) => void;
  onRemoveItem: (collection: string, idx: number) => void;
  onSave: () => void;
  saving: boolean;
};

function ArrayForm({ title, collection, items, fields, template, onUpdateItem, onAddItem, onRemoveItem, onSave, saving }: ArrayFormProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-black text-lg text-azul-marinho">{title}</h2>
        <button
          onClick={() => onAddItem(collection, template)}
          className="bg-azul-marinho text-white text-sm font-bold px-3 py-1.5 rounded-lg hover:brightness-110"
        >
          + Adicionar
        </button>
      </div>

      {items.length === 0 && (
        <div className="bg-white rounded-2xl p-6 text-center text-cinza-500 text-sm">
          Nenhum item. Clique em "Adicionar" pra começar.
        </div>
      )}

      {items.map((item: any, idx: number) => (
        <div key={item.id || idx} className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-cinza-500 uppercase">Item #{idx + 1}</span>
            <button
              onClick={() => onRemoveItem(collection, idx)}
              className="text-red-600 text-sm font-bold hover:underline"
            >
              Remover
            </button>
          </div>
          {fields.map((f: FieldDef) => (
            <Field
              key={f.name}
              label={f.label}
              type={f.type}
              value={f.type === "number" ? (item[f.name] ?? "") : (item[f.name] ?? "")}
              onChange={(v: any) => onUpdateItem(collection, idx, f.name, f.type === "number" ? Number(v) : v)}
            />
          ))}
        </div>
      ))}

      {items.length > 0 && <SaveButton onSave={onSave} saving={saving} />}
    </div>
  );
}
