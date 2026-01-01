#!/bin/bash

echo " Generating Allure report (clean mode)..."

npx allure generate ./allure-results -o ./allure-report --clean

if [ $? -ne 0 ]; then
  echo " Failed to generate Allure report"
  exit 1
fi

echo " Opening Allure report..."
npx allure open ./allure-report
