# Use a lightweight Nginx image as the base
FROM nginx:alpine

# Copy your source files into the default Nginx public HTML directory
COPY src /usr/share/nginx/html

# Cloud Run injects the PORT environment variable dynamically.
# We need to swap out Nginx's default port 80 for the dynamically assigned $PORT
# before starting the Nginx server.
CMD sed -i -e 's/80/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'