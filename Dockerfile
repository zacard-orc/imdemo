FROM nginx
COPY dist/ /usr/share/nginx/html/dist/
COPY scripts/nginx.conf /etc/nginx/nginx.conf
COPY scripts/mime.types /etc/nginx/mime.types
