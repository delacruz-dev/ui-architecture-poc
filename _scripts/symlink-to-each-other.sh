#!/bin/bash

IFS=$'\n' read -d '' -r -a packages <$(dirname $0)/NPM_PACKAGES

for d in "${packages[@]}"; do
  echo "> ($d)";
  cd $d;
  mkdir -p node_modules;
  deps=$(cat ./package.json | echo $(../node_modules/.bin/jase dependencies));
  devdeps=$(cat ./package.json | echo $(../node_modules/.bin/jase devDependencies));
  for d2 in "${packages[@]}"; do
    if `echo ${deps} | grep "@typeform/${d2}" 1>/dev/null 2>&1`; then
      echo "> symlink @typeform/$d2 in node_modules";
      mkdir -p node_modules/@typeform;
      ln -s "../../../"$d2 "node_modules/@typeform/"$d2;
    fi
    if `echo ${devdeps} | grep "@typeform/${d2}" 1>/dev/null 2>&1`; then
      echo "> symlink @typeform/$d2 in node_modules";
      mkdir -p node_modules/@typeform;
      ln -s "../../../"$d2 "node_modules/@typeform/"$d2;
    fi
  done
  ls -la node_modules/@typeform || :;
  echo "";
  cd ..;
done
