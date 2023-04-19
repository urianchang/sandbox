#!/usr/bin/env bash
SECONDS=0

echo "=== Running Bazel clean (expunge) ==="
bazel clean --expunge
clean_duration=$(($SECONDS - 0))

echo "=== Running Bazel build (all) ==="
bazel build //...
build_duration=$(($SECONDS - $clean_duration))

echo "=== Running Bazel test (all) ==="
bazel test //... --nocache_test_results
test_duration=$(($SECONDS - $build_duration - $clean_duration))

echo "Clean: $clean_duration second(s)"
echo "Build: $build_duration second(s)"
echo "Test: $test_duration second(s)"
echo "Total: $SECONDS second(s)"
