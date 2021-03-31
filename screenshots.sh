for f in ./puppeteer/*; do
  node "$f";
  echo $f
done
