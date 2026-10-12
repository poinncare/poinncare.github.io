# Echo Architecture

## Overview

Echo is a desktop transcription app built with **Tauri** (Rust + TypeScript frontend).

## Components

### Desktop App (`desktop/`)

- **Frontend**: TypeScript + React (UI)
- **Backend**: Rust/Tauri (`desktop/src-tauri/`)
- Handles UI, file management, settings, analytics
- Spawns and communicates with the server via local HTTP

### Server (`server/`)

- **Language**: Rust on ggml (`whisper-rs`, `parakeet-rs`, `nemotron-rs`, `vad-rs`, `diarize-rs`)
- **Location**: `server/` in this repository, its own Cargo workspace; crate and binary `echo-server`
- **Purpose**: single local process for audio transcription, model loading, streaming, and diarization, behind an OpenAI-compatible HTTP API
- Bundled as the `echo-server` sidecar with the desktop app
- Diarization is in-process via `diarize-rs`; Echo does not bundle or spawn a separate binary
- **Build**: `server-libs.yml` publishes the prebuilt ggml libraries (`libraries-ggml-<version>-r<revision>`, inputs under `server/libs/`); `server-release.yml` publishes `server-v*` prereleases; `server-test.yml` runs a release across platforms
- **Distribution**: the app downloads the release named by `.server-version` at build time (`setup` task in the root `chorefile`); `chore server-build` stages an in-tree build instead

### FFmpeg Helper

- macOS and Windows builds also bundle `ffmpeg` from the server release archives
- Echo passes its path to the server with `ECHO_SERVER_FFMPEG_PATH`

### Build Flow

1. Echo CI runs `chore setup <target-triple>`
2. It downloads the prebuilt `echo-server` from the `server-v*` release in `.server-version`
3. Binaries placed in `desktop/src-tauri/binaries/`
4. Tauri bundles `echo-server` and, where configured, `ffmpeg` into the final app

## Key Point for Agents

Native runtime compatibility issues for transcription usually come from the server or its linked ggml libraries, not the Echo UI code.

To fix one, change `server/` (a ggml fix goes in `server/libs/patches/` with a revision bump), tag a `server-v*` release, then bump `.server-version` here.
