// Função utilitária pra gerar link de WhatsApp
// Arquivo separado pra que client components possam usar sem importar 'fs' (de cms.ts)

export function whatsappLink(
  message?: string,
  whatsappNumber?: string,
): string {
  const num = whatsappNumber || "5527999539293";
  const base = `https://wa.me/${num}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
