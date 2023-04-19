#!/usr/bin/env bash

# Formats and lints Bazel BUILD files with buildifier from bazelbuild/buildtools.
# NOTE: Although we can invoke buildifier with bazel (e.g. bazel run //:buildifier_format_check),
#       the command will check all files, which isn't desired in a pre-commit hook.
#
bazel_build_files=$@

# If buildifier isn't installed, we'll skip for now.
if ! command -v buildifier &> /dev/null
then
    exit 0
fi

function buildifier_fmt () {
  buildifier --mode=check $bazel_build_files &> /dev/null
  status=$?

  if [ $status -eq 0 ]
  then
    return 0
  elif [ $status -eq 4 ]
  then
    buildifier --mode=fix $bazel_build_files
    echo "Reformatted Bazel BUILD file(s)"
    return 1
  else
    echo "Something went wrong trying to run buildifier"
    return $status
  fi
}

function buildifier_lint () {
  buildifier --lint=warn $bazel_build_files
  status=$?

  if [ $status -eq 0 ]
  then
    return 0
  elif [ $status -eq 4 ]
  then
    buildifier --lint=fix $bazel_build_files
    echo ""
    echo "Fixed linting errors in Bazel BUILD file(s)"
    return 1
  else
    echo ""
    echo "Something went wrong trying to run buildifier"
    return $status
  fi
}

buildifier_fmt || fmt_fail=yes
buildifier_lint || lint_fail=yes

[ -z "${fmt_fail}${lint_fail}" ] || exit 1
exit 0
