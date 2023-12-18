# La version de node 
FROM node:17-alpine

WORKDIR /src

COPY package.json .
COPY package-lock.json .

# Installe les dépendances (They're cached since i copied them beforehand)
RUN npm ci 

# Copie les fichiers à /src
COPY . .


# Donne au container le port 500
EXPOSE 5000

# Lance le serveur
CMD [ "npm","start"]
