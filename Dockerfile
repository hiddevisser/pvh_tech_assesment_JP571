FROM ianwalter/puppeteer:latest
WORKDIR /pvh
COPY . /pvh
VOLUME ./reporting /allure-results

RUN npm install
RUN apt-get update -y
RUN apt-get install -y google-chrome-stable

CMD npm run test