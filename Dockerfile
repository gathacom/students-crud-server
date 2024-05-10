FROM node:16

RUN mkdir -p /usr/src/app

# Create app directory
WORKDIR /usr/src/app


COPY package.json /usr/src/app/

RUN npm install


# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]