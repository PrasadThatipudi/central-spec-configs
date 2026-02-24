curl -L https://github.com/PrasadThatipudi/central-spec-configs/archive/refs/heads/main.zip -o main.zip
unzip -o main.zip
rm main.zip

mv -f central-spec-configs-main/.github .
mv -f central-spec-configs-main/.specify .