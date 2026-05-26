# Use a lightweight Nginx image as the base
FROM nginx:alpine

# Copy your source files into the default Nginx public HTML directory
COPY src /usr/share/nginx/html

# Override default Nginx config with your custom configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Cloud Run injects the PORT environment variable dynamically.
# We need to swap out the hardcoded 8080 port in your nginx.conf for the dynamically assigned $PORT
# before starting the Nginx server.
CMD sed -i -e 's/8080/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'