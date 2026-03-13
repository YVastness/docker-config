#!/usr/bin/env bash

# -------------------------
# 更新 Docker Compose 并清理镜像
# -------------------------

set -e # 遇到错误立即退出

echo "📦 拉取最新镜像..."
docker compose pull

echo "🔄 重建并启动容器..."
docker compose up -d --remove-orphans

echo "🧹 清理未使用的镜像、容器和网络..."
# 只清理未被容器使用的镜像
docker image prune -f

# 如果你想更彻底清理 ≫ 用下面这一行替代上面那一行：
# docker system prune -af

echo "✅ 更新完成！"
