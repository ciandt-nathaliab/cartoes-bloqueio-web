FROM ADICIONAR A IMAGEM BASE AQUI

WORKDIR /

USER root
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /opt/app-root/src

ENV TZ='GMT+3:00'
RUN unlink /etc/localtime && ln -s /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime

ADD package.json /opt/app-root/src/package.json

COPY docker/update-version.sh /

RUN chmod +x /update-version.sh
RUN chown -R 1001 /opt/app-root/src
RUN chown -R 1001 /update-version.sh
RUN chown -R 1001 /etc/nginx
RUN chown -R 1001 /var/log
RUN chown -R 1001 /tmp

USER 1001

CMD ["/bin/bash", "-c", "./update-version.sh"]
