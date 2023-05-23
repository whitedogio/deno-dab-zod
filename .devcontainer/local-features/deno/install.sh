#!/bin/ash
#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

set -e

apk update
apk add --no-cache \
    --upgrade \
    curl

echo "Installing deno"
curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=/usr/local sh
