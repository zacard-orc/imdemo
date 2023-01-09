FROM node:14.19.3

WORKDIR /app
COPY . /app

RUN npm config set registry "https://registry.npm.taobao.org/"
RUN npm install

EXPOSE 5173

CMD npm run dev30
