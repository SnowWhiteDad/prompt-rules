#!/bin/bash

# Vibe Coder Rules Generator - Deployment Script
# This script automates the build and deployment process

set -e

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose down --remove-orphans || true

# Build the Docker image
print_status "Building Docker image..."
docker-compose build --no-cache

# Start the application
print_status "Starting the application..."
docker-compose up -d

# Wait for the application to be ready
print_status "Waiting for application to be ready..."
sleep 10

# Check if the application is running
if curl -f http://localhost:3000/health > /dev/null 2>&1; then
    print_success "Application is running successfully!"
    print_success "Access the application at: http://localhost:3000"
else
    print_error "Application failed to start properly."
    print_status "Checking container logs..."
    docker-compose logs
    exit 1
fi

print_success "Deployment completed successfully! 🎉" 