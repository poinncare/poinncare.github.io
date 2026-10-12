#!/bin/sh
# Download Echo from its private repository using GitHub CLI authentication.
# Usage: sh installer.sh v1.0.0
set -eu
TAG=${1:-v1.0.0}
case "$TAG" in
    v[0-9]*.[0-9]*.[0-9]*) ;;
    *) echo "Укажите тег релиза, например v1.0.0" >&2; exit 1 ;;
esac
command -v gh >/dev/null 2>&1 || { echo "Установите GitHub CLI и выполните gh auth login" >&2; exit 1; }
case "$(uname -m)" in
    x86_64) ARCH=amd64 ;;
    aarch64|arm64) ARCH=arm64 ;;
    *) echo "Архитектура не поддерживается" >&2; exit 1 ;;
esac
if command -v apt >/dev/null 2>&1; then
    PATTERN="*_${ARCH}.deb"
elif command -v dnf >/dev/null 2>&1; then
    case "$ARCH" in amd64) RPM_ARCH=x86_64 ;; arm64) RPM_ARCH=aarch64 ;; esac
    PATTERN="*.${RPM_ARCH}.rpm"
else
    echo "Скачайте подходящий пакет: gh release download $TAG -R poinncare/Echo" >&2
    exit 1
fi
DOWNLOAD_DIR=$(mktemp -d)
trap 'rm -rf "$DOWNLOAD_DIR"' EXIT HUP INT TERM
gh release download "$TAG" -R poinncare/Echo --pattern "$PATTERN" --dir "$DOWNLOAD_DIR"
if command -v apt >/dev/null 2>&1; then
    sudo apt install "$DOWNLOAD_DIR"/*.deb
else
    sudo dnf install "$DOWNLOAD_DIR"/*.rpm
fi
