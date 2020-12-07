FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Le da permisos al usuario node para escribir en /usr/src/app
# Como comentario, notar que el comando RUN nos permite ejecutar culquier comando bash valido.
RUN chown -R node:users /usr/src/app

# Habilita el usuario node. Por defecto, los containers corren los comandos con el usuario root
USER node

EXPOSE 3000

CMD ["node", "./api/server.js"]
