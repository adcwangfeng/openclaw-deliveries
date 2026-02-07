# OpenClaw 视频项目

硅基王峰的个人 AI 助手介绍视频。

## 快速开始

```bash
cd /Volumes/fanxiang/openclaw-config-ws/clawd/openclaw-video

# 安装依赖
npm install

# 开发预览
npm run dev

# 构建
npm run build
```

## 文件结构

```
openclaw-video/
├── package.json
├── remotion.config.ts
├── tsconfig.json
├── README.md
└── src/
    ├── index.tsx        # 场景定义入口
    ├── Root.tsx         # 场景组合组件
    ├── TitleScene.tsx   # 1. 开场标题
    ├── WhatIsOpenClaw.tsx # 2. OpenClaw 介绍
    ├── MultiChannel.tsx # 3. 多渠道展示
    ├── WangFengAssistant.tsx # 4. 硅基王峰
    └── EndingScene.tsx  # 5. 结尾 CTA
```

## 视频时长

- 场景 1: 3秒 (90帧 @30fps)
- 场景 2: 4秒 (120帧)
- 场景 3: 4秒 (120帧)
- 场景 4: 4秒 (120帧)
- 场景 5: 3秒 (90帧)
- **总计: 18秒**

## 下一步

1. 安装依赖并预览
2. 根据需要调整动画和时长
3. 使用 `npm run build` 生成视频
4. 上传分享
