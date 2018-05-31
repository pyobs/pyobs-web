#!/bin/bash
ng build -c joomla --output-path=joomla --base-href=/pytel/ $@

# clean up
rm ../pytel-joomla/com_pytel/site/js/*
rm ../pytel-joomla/com_pytel/site/css/*

# copy
cp joomla/*.js ../pytel-joomla/com_pytel/site/js/
cp joomla/*.css ../pytel-joomla/com_pytel/site/css/
