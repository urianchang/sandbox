load("@io_bazel_rules_go//go:def.bzl", "go_library", "go_test")

go_library(
    name = "duration",
    srcs = ["duration.go"],
    importpath = "github.com/urianchang/sandbox/humanize/pkg/duration",
    visibility = ["//visibility:public"],
)

go_test(
    name = "unit-tests",
    size = "small",
    srcs = ["duration_test.go"],
    embed = [":duration"],
)
