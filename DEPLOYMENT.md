# Deployment Guide

This guide covers various deployment options for the Vibe Coder Rules Generator application.

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ and npm
- Docker and Docker Compose (for containerized deployment)
- Git

### Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SnowWhiteDad/prompt-rules.git
   cd prompt-rules
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open <http://localhost:3000> in your browser

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and start the application:**

   ```bash
   docker-compose up -d
   ```

2. **Access the application:**

   Open <http://localhost:3000> in your browser

3. **View logs:**

   ```bash
   docker-compose logs -f
   ```

4. **Stop the application:**

   ```bash
   docker-compose down
   ```

### Using Docker directly

1. **Build the image:**

   ```bash
   docker build -t vibe-coder-rules-generator .
   ```

2. **Run the container:**

   ```bash
   docker run -d -p 3000:80 --name vibe-coder-app vibe-coder-rules-generator
   ```

3. **Access the application:**

   Open <http://localhost:3000> in your browser

4. **Stop and remove the container:**

   ```bash
   docker stop vibe-coder-app
   docker rm vibe-coder-app
   ```

## ☁️ Cloud Deployment

### GitHub Pages

The application is automatically deployed to GitHub Pages via GitHub Actions when you push to the main branch.

**Access the live application:**

<https://snowwhitedad.github.io/prompt-rules/>

### Netlify

1. **Connect your repository to Netlify**
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.`
   - Node version: 18

### Vercel

1. **Install Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Deploy:**

   ```bash
   vercel
   ```

### AWS S3 + CloudFront

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Upload to S3:**

   ```bash
   aws s3 sync . s3://your-bucket-name --exclude "node_modules/*" --exclude ".git/*"
   ```

3. **Configure CloudFront for HTTPS and caching**

### Google Cloud Platform

1. **Deploy to Cloud Run:**

   ```bash
   gcloud run deploy vibe-coder-app \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

## 🔧 Environment Configuration

### Environment Variables

The application can be configured using environment variables:

```bash
# Production environment
NODE_ENV=production

# Custom port (for development)
PORT=3000
```

### Nginx Configuration

The application includes a production-ready nginx configuration with:

- Security headers
- Gzip compression
- Static file caching
- Health check endpoint
- Error handling

## 📊 Monitoring and Logging

### Health Checks

The application includes a health check endpoint:

- URL: `/health`
- Method: GET
- Response: `healthy` (text/plain)

### Logs

When using Docker, logs are available via:

```bash
# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f vibe-coder-app
```

### Metrics

The application exposes basic metrics:

- Request count
- Response times
- Error rates

## 🔒 Security Considerations

### Security Headers

The application includes the following security headers:

- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: no-referrer-when-downgrade
- Content-Security-Policy: default-src 'self'
- Strict-Transport-Security: max-age=31536000

### HTTPS

For production deployments, always use HTTPS:

- Configure SSL certificates
- Redirect HTTP to HTTPS
- Use secure cookies

## 🚨 Troubleshooting

### Common Issues

1. **Port already in use:**

   ```bash
   # Find process using port 3000
   lsof -i :3000
   
   # Kill the process
   kill -9 <PID>
   ```

2. **Docker build fails:**

   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker-compose build --no-cache
   ```

3. **Application not accessible:**

   ```bash
   # Check if container is running
   docker ps
   
   # Check container logs
   docker logs <container-id>
   ```

### Performance Optimization

1. **Enable gzip compression** (already configured in nginx)
2. **Use CDN** for static assets
3. **Implement caching** strategies
4. **Monitor resource usage**

## 📈 Scaling

### Horizontal Scaling

For high-traffic deployments:

1. **Load Balancer:**
   - Use AWS ALB, Google Cloud Load Balancer, or nginx
   - Configure health checks
   - Enable SSL termination

2. **Multiple Instances:**

   ```bash
   # Scale with Docker Compose
   docker-compose up -d --scale vibe-coder-app=3
   ```

3. **Auto-scaling:**
   - Configure auto-scaling policies
   - Set up monitoring and alerts
   - Use container orchestration (Kubernetes, ECS)

## 🔄 Updates and Maintenance

### Updating the Application

1. **Pull latest changes:**

   ```bash
   git pull origin main
   ```

2. **Rebuild and restart:**

   ```bash
   docker-compose down
   docker-compose up -d --build
   ```

### Backup Strategy

1. **Configuration files**
2. **Log files**
3. **Custom rules and settings**

## 📞 Support

For issues and questions:

- Create an issue on GitHub
- Check the troubleshooting section
- Review the application logs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
