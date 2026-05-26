# Use a lightweight Nginx image as the base
FROM nginx:alpine

# Copy your source files into the default Nginx public HTML directory
COPY src /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 8080

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]