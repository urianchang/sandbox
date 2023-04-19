BUILD_FILE_CONTENT = """
load("@bazel_skylib//rules:copy_file.bzl", "copy_file")
copy_file(
    name = "protoc",
    src = "//:bin/protoc",
    out = "protoc_bin",
    is_executable = True,
    visibility = ["//visibility:public"],
)
alias(
    name = "protobuf_java",
    actual = "@3rdparty//jvm/com/google/protobuf:protobuf_java",
    visibility = ["//visibility:public"],
)
alias(
    name = "protobuf_java_util",
    actual = "@3rdparty//jvm/com/google/protobuf:protobuf_java_util",
    visibility = ["//visibility:public"],
)
proto_lang_toolchain(
    name = "java_toolchain",
    command_line = "--java_out=$(OUT)",
    runtime = ":protobuf_java",
    visibility = ["//visibility:public"],
)
# Map of all well known protos.
# name => (include path, imports)
WELL_KNOWN_PROTO_MAP = {
    "any": ("include/google/protobuf/any.proto", []),
    "api": (
        "include/google/protobuf/api.proto",
        [
            "source_context",
            "type",
        ],
    ),
    "compiler_plugin": (
        "include/google/protobuf/compiler/plugin.proto",
        ["descriptor"],
    ),
    "descriptor": ("include/google/protobuf/descriptor.proto", []),
    "duration": ("include/google/protobuf/duration.proto", []),
    "empty": ("include/google/protobuf/empty.proto", []),
    "field_mask": ("include/google/protobuf/field_mask.proto", []),
    "source_context": ("include/google/protobuf/source_context.proto", []),
    "struct": ("include/google/protobuf/struct.proto", []),
    "timestamp": ("include/google/protobuf/timestamp.proto", []),
    "type": (
        "include/google/protobuf/type.proto",
        [
            "any",
            "source_context",
        ],
    ),
    "wrappers": ("include/google/protobuf/wrappers.proto", []),
}
[ proto_library(
    name = proto[0] + "_proto",
    srcs = [proto[1][0]],
    strip_import_prefix = "include",
    visibility = ["//visibility:public"],
    deps = [dep + "_proto" for dep in proto[1][1]],
) for proto in WELL_KNOWN_PROTO_MAP.items() ]
"""

def _proto_repo_hook_impl(repository_ctx):
    if repository_ctx.os.name.startswith("mac os"):
        platform = "osx"
    else:
        platform = "linux"

    repository_ctx.download_and_extract(
        url = "https://github.com/protocolbuffers/protobuf/releases/download/v{0}/protoc-{0}-{1}-x86_64.zip".format(
            repository_ctx.attr.version,
            platform,
        ),
        sha256 = repository_ctx.attr.prebuilt_sha[platform],
        output = ".",
    )

    repository_ctx.file(
        "BUILD.bazel",
        content = BUILD_FILE_CONTENT,
    )

proto_repo_hook = repository_rule(
    implementation = _proto_repo_hook_impl,
    local = True,
    attrs = {
        "version": attr.string(default = "3.6.1"),
        "prebuilt_sha": attr.string_dict(default = {
            "osx": "0decc6ce5beed07f8c20361ddeb5ac7666f09cf34572cca530e16814093f9c0c",
            "linux": "6003de742ea3fcf703cfec1cd4a3380fd143081a2eb0e559065563496af27807",
        }),
    },
)
