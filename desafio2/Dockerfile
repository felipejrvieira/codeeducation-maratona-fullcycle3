FROM golang:1.14.4

RUN wget https://github.com/gobuffalo/buffalo/releases/download/v0.16.10/buffalo_0.16.10_Linux_x86_64.tar.gz
RUN tar -xvzf buffalo_0.16.10_Linux_x86_64.tar.gz
RUN mv buffalo /usr/local/bin/buffalo

RUN apt install curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y npm

RUN git config --global user.email "felipejrvieira@gmail.com"
RUN git config --global user.name "Felipe Vieira"

EXPOSE 3000