# La version de node 
FROM node:17-alpine

WORKDIR /src

COPY package.json .
COPY package-lock.json .
# Installe les dépendances (Marche pour la cache)
RUN npm ci 

# Copie les fichiers à /src
COPY . .


# Donne au container le port 500
EXPOSE 5000

# Lance le serveur
CMD [ "npm","start"]
