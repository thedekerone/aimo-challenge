FROM node:10
COPY "package*.json" "/usr/"
WORKDIR /usr/
RUN npm install
RUN npm audit fix
COPY "." "/usr/"
CMD [ "npm", "run", "dev" ]
EXPOSE 3000

