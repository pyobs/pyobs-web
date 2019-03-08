#!/bin/bash
ng build -c joomla --output-path=joomla --base-href=/pyobs/ $@

# clean up
rm ../pyobs-joomla/com_pyobs/site/js/*
rm ../pyobs-joomla/com_pyobs/site/css/*

# copy
cp joomla/*.js ../pyobs-joomla/com_pyobs/site/js/
cp joomla/*.css ../pyobs-joomla/com_pyobs/site/css/
