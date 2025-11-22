FROM node:25-slim AS build

WORKDIR /app

COPY app .

RUN set -eux; \
  npm install

RUN set -eux; \
  useradd -m appuser

RUN set -eux; \
  ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime; \
  echo "Asia/Tokyo" > /etc/timezone; \
  dpkg-reconfigure -f noninteractive tzdata; \
  apt-get update && apt-get install -y; \
  apt-get autoremove -y; \
  apt-get clean; \
  rm -rf /var/lib/apt/lists/*

COPY docker-entrypoint.sh /usr/local/bin/
RUN ln -s usr/local/bin/docker-entrypoint.sh /entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]
