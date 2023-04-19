workspace(
    name = "sandbox",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("//rules:proto.bzl", "proto_repo_hook")

proto_repo_hook(name = "com_google_protobuf")

# https://github.com/bazelbuild/bazel-skylib/releases/tag/1.0.3
http_archive(
    name = "bazel_skylib",
    sha256 = "1c531376ac7e5a180e0237938a2536de0c54d93f5c278634818e0efc952dd56c",
    urls = [
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
    ],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

# buildifier is written in Go and hence needs rules_go to be built.
# See https://github.com/bazelbuild/rules_go for the up to date setup instructions.
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "69de5c704a05ff37862f7e0f5534d4f479418afc21806c887db544a316f3cb6b",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_go/releases/download/v0.27.0/rules_go-v0.27.0.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.27.0/rules_go-v0.27.0.tar.gz",
    ],
)

load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

go_rules_dependencies()

# We need Go version 1.16+ because we use //go:embed
go_register_toolchains(version = "1.17.5")

http_archive(
    name = "bazel_gazelle",
    sha256 = "62ca106be173579c0a167deb23358fdfe71ffa1e4cfdddf5582af26520f1c66f",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-gazelle/releases/download/v0.23.0/bazel-gazelle-v0.23.0.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.23.0/bazel-gazelle-v0.23.0.tar.gz",
    ],
)

load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

# bazel run //:gazelle-sync
load("//:go_repositories.bzl", "vinyl_go_repositories")

# gazelle:repository_macro go_repositories.bzl%vinyl_go_repositories
vinyl_go_repositories()

gazelle_dependencies()

http_archive(
    name = "com_github_bazelbuild_buildtools",
    sha256 = "315dad13406928011b467ca7f2748a59ae817477f9129e1edaae75deb73e9b78",
    strip_prefix = "buildtools-3.4.0",
    url = "https://github.com/bazelbuild/buildtools/archive/3.4.0.tar.gz",
)
