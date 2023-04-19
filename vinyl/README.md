# vinyl
Example API based on: https://go.dev/doc/tutorial/web-service-gin

## Update Go Modules
To update Go modules (3rd party dependencies):

1. Update go.mod (and go.sum) file with go mod tidy
2. Run `bazel run //:gazelle-sync-vinyl` to update go_repositories.bzl file (Bazel definitions for go dependencies)

NOTE: You'll want to update the Bazel BUILD file to include the dependency in the necessary targets.
