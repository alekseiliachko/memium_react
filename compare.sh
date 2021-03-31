for f in ./screenshots/*.png; do
  properName=$(echo $f | cut -d / -f3);
  oldPath=$(find ./screenshots/old/ -name $properName)

  diff $f $oldPath
done
