#!/bin/bash

# Install base packages
DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y build-essential git

# Install database server and create a database
MARIADB_PASSWORD=`openssl rand -base64 12`
apt-get install -y libmariadb-dev mariadb-server
mysqladmin create datalanddb
mysqladmin -u root password $MARIADB_PASSWORD
mysqladmin flush-privileges

# Setup Nodesource repository and install Node.js 16.x
KEYRING=/usr/share/keyrings/nodesource.gpg
VERSION=node_16.x
DISTRO="$(lsb_release -s -c)"
wget --quiet -O - https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | sudo tee "$KEYRING" >/dev/null
echo "deb [signed-by=$KEYRING] https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee /etc/apt/sources.list.d/nodesource.list
echo "deb-src [signed-by=$KEYRING] https://deb.nodesource.com/$VERSION $DISTRO main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list
apt-get update
apt-get -y install nodejs


# Install and setup backend
cd /srv
git clone https://github.com/learning-with-data/dataland-backend.git
cd dataland-backend
npm install
cat <<EOT > .env
DATALAND_BACKEND_HOST=localhost
DATALAND_BACKEND_PORT=3030
DATALAND_BACKEND_SECRET=`openssl rand -base64 12`
DATALAND_BACKEND_DB_URI=mysql://root:$MARIADB_PASSWORD@localhost:3306/datalanddb
DATALAND_BACKEND_INVITATION_CODE=chang3m3
EOT

# Install NPM dependencies
cd /vagrant
su vagrant -c "npm install" 

# Copy the systemd files, enable and start them
cd
cp /tmp/provisioning/dataland-backend.service /etc/systemd/system
cp /tmp/provisioning/dataland-workshop-frontend.service /etc/systemd/system
systemctl daemon-reload
systemctl enable dataland-backend
systemctl enable dataland-workshop-frontend
systemctl start dataland-backend
systemctl start dataland-workshop-frontend

# Seed the database
cd /srv/dataland-backend
npm run db:seed:all
