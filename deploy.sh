#!/bin/bash
# Extract and deploy to local web server
echo "Starting deployment..."
tar -xzf website.tar.gz
sudo cp index.html styles.css /var/www/html/
echo "Deployment complete!"