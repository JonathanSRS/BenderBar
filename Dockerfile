# Usa a versão exata do Node
FROM node:18.18.2

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas o package.json (para cache de dependências)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Porta usada pela sua aplicação (ajuste se necessário)
EXPOSE 3000

# Comando padrão ao iniciar o container
CMD ["npm", "run", "start:prod"]
