FROM node:20-alpine

WORKDIR /app

COPY Backend/package*.json ./Backend/
RUN cd Backend && npm install

COPY Frontend/package*.json ./Frontend/
RUN cd Frontend && npm install

COPY Admin/package*.json ./Admin/
RUN cd Admin && npm install

COPY . .

RUN cd Frontend && npm run build
RUN cd Admin && npm run build

WORKDIR /app/Backend

EXPOSE 8080

CMD ["node","index.js"]