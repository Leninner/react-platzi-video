# Problemas solucionados en este proyecto

1. Error al trata de usar Webpack-dev-server.

-   El error lo solucioné cuando borré la caché de node y al actualizarlo a la última versión.

> Soluciones:

sudo npm cache clean -f
sudo npm install -g n
sudo n stable

sudo node -v (>= 16.0.0)
