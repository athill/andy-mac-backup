#!/bin/bash

# generate ssh keys
# Note: interactive
ssh-keygen -t rsa

# add command line for sulime text
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime