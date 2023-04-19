#!/usr/bin/env bash

# A pre-commit hook to reformat Go files.
# When we know Go is installed on each dev environment, we can switch to using more Go pre-commit hooks like:
#   * https://github.com/dnephin/pre-commit-golang
#   * https://github.com/TekWizely/pre-commit-golang
go_files=$@

# In case Go isn't installed, we'll skip for now.
if ! command -v go &> /dev/null
then
    exit 0
fi

unformatted_files=$(gofmt -l $go_files)
[ -z "$unformatted_files" ] && exit 0

echo "Reformatting the following staged Go files:"
for file in $unformatted_files; do
  go fmt $file
done
exit 1
