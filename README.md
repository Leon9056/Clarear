# Clarear Estética Automotiva

Site institucional responsivo para a Clarear, com estética premium, minimalista e foco em contato via WhatsApp.

## Stack
- React + Vite
- CSS responsivo sem framework visual
- Lucide React para ícones
- Deploy estático na Vercel

## Rodar localmente
1. Instale Node.js LTS.
2. Extraia o projeto e abra a pasta no terminal.
3. Execute `npm install`.
4. Execute `npm run dev`.
5. Abra o endereço local exibido pelo Vite.

## Configurar WhatsApp
Abra `src/main.jsx` e edite a constante `WHATSAPP_NUMBER`.
Use somente números, incluindo 55 + DDD + número. Exemplo ilustrativo: `5535999999999`.
Até configurar o número, o botão abre o WhatsApp com a mensagem pronta, mas sem direcionar para uma empresa específica.

## Trocar o logotipo
O cabeçalho contém um logotipo tipográfico provisório em CSS. Quando recebermos o logotipo oficial, coloque o arquivo em `public/` (por exemplo `public/logo-clarear.svg`) e substitua o bloco `.brand` em `src/main.jsx` por uma imagem.

## Trocar as imagens
As imagens externas atuais são provisórias. Substitua os URLs em `src/main.jsx` e `src/styles.css` pelas fotos reais da Clarear quando forem enviadas. Para produção, prefira guardar as imagens otimizadas na pasta `public/images/`.

## Publicar na Vercel
1. Crie um repositório no GitHub e envie os arquivos deste projeto.
2. Entre na Vercel e escolha **Add New → Project**.
3. Importe o repositório do GitHub.
4. A Vercel detecta Vite automaticamente. Build command: `npm run build`; output directory: `dist`.
5. Clique em Deploy. Cada push na branch principal poderá publicar atualizações automaticamente.

## Próximas etapas
- Inserir logotipo oficial e paleta definitiva da marca.
- Confirmar serviços, localização e horários.
- Configurar número de WhatsApp real.
- Trocar imagens provisórias por fotos reais autorizadas.
- Revisar textos e metadados antes da publicação definitiva.
