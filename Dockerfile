# Use nginx alpine as base image for lightweight production deployment
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy application files
COPY index.html .
COPY styles.css .
COPY script.js .

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create a non-root user for security (optional)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 