#!/bin/bash
docker build -f Dockerfile-dev-hot -t naklario-dev-hot . && (docker rm -f naklario-dev-hot || true) && docker run -itdp 8094:4200 --name naklario-dev-hot -v $(pwd)/naklario:/usr/src/app naklario-dev-hot
