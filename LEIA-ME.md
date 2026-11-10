# Ministério Musical — Beta 1.0

Aplicativo PWA em HTML, CSS e JavaScript puro, sem frameworks e sem build.

## Como executar

1. Publique o conteúdo desta pasta na raiz de um repositório GitHub público.
2. No repositório, abra **Settings → Pages → Deploy from a branch**, selecione `main` e `/ (root)`.
3. Acesse o endereço GitHub Pages indicado pelo GitHub. O HTTPS é necessário para instalar o PWA.
4. Para testes locais, abra a pasta no VS Code e use um servidor estático (por exemplo, a extensão Live Server). Abrir `index.html` diretamente por `file://` não executa corretamente os módulos JavaScript.

## O que funciona nesta versão

- Biblioteca e pesquisa de canções.
- Cadastro e edição manual de título, artista, URL do YouTube, tom, estilo e letra autorizada.
- Player incorporado do YouTube.
- Seções de música e blocos de acordes: adicionar, editar, remover, arrastar para reordenar (mouse ou toque) e transpor.
- Paleta de acordes, inclusive acordes personalizados.
- Orientações iniciais para violão, guitarra, baixo, bateria, teclado e trompete.
- Links de vídeos complementares por instrumento.
- Repertórios locais, exportação e importação de backup JSON.
- Manifesto e service worker para PWA (recursos locais em cache; vídeos exigem internet).

## Limitações importantes

- **Ainda não existe sincronização entre celulares**. As alterações são salvas no `localStorage` do navegador/dispositivo.
- **Não há geração automática de letra ou cifra a partir do YouTube**. Isso requer fontes licenciadas e/ou análise de áudio autorizada.
- As dicas instrumentais são sugestões genéricas iniciais, não análise automática da música.
- Não inserir letras protegidas sem permissão para compartilhamento público.
- O cache PWA não torna vídeos do YouTube disponíveis offline.
- A instalação do PWA varia por navegador; o ícone SVG pode exigir PNGs para compatibilidade máxima em alguns dispositivos.
- A interface usa CSS próprio para não depender de CDN, build ou framework. Tailwind poderá ser considerado posteriormente.

## Firebase (preparado, não ativado)

O arquivo `js/firebase.js` reserva a configuração do Firebase. A conexão de leitura pode ser implementada depois, e as operações de escrita devem passar por regras de autorização/validação. **Não publique regras `allow write: if true`**, nem credenciais administrativas no navegador. A chave de configuração web do Firebase não é uma senha, mas também não concede autorização por si só.

A sincronização compartilhada exigirá uma etapa adicional de implementação e configuração de segurança. O GitHub Pages é hospedagem estática e não recebe escritas de visitantes.

## Backup

Use **Exportar backup** na Biblioteca e guarde o JSON no computador ou Google Drive. O GitHub versiona o código, mas não faz backup automático das músicas guardadas localmente.
