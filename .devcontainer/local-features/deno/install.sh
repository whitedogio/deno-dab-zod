set -e

apk update
apk add --no-cache \
    --upgrade \
    curl

echo "Installing deno"
curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=/usr/local sh
