#!/bin/bash
cd /home/kavia/workspace/code-generation/summarizeit-59659-7042b200/summarizeit_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

