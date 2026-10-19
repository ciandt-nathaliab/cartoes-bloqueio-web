#!/bin/bash

# Verificar se existe o diretório browser e copiar dele se existir
if [ -d "/opt/app-root/src/browser" ]; then
    cp -r /opt/app-root/src/browser/* /volume/opt/app-root/src/
else
    cp -r /opt/app-root/src/{.,}* /volume/opt/app-root/src/
fi

find '/volume/opt/app-root/src' -name '*.js' -exec sed -i -e 's,API_URL_CARTOES,'"$API_URL_CARTOES"',g' {} \;
find '/volume/opt/app-root/src' -name '*.js' -exec sed -i -e 's,API_URL_BASE_APIM,'"$API_URL_BASE_APIM"',g' {} \;
find '/volume/opt/app-root/src' -name '*.js' -exec sed -i -e 's,IDM_LOADER,'"$IDM_LOADER"',g' {} \;

nginx -g "daemon off;"
