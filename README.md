# OpenClaw 介绍视频

基于 Remotion 构建的 OpenClaw 介绍视频项目。

## 视频内容

**场景 1: 开场** (3秒)
- OpenClaw 标题动画
- 副标题："你的 AI Agent 网关"

**场景 2: 什么是 OpenClaw** (4秒)
- 三大特性卡片：
  - 🏠 自托管
  - 🌐 多渠道集成
  - 🤖 AI Agent 原生

**场景 3: 多渠道集成** (4秒)
- WhatsApp、Telegram、Discord、iMessage、飞书
- 从任何地方与 AI 助手对话

**场景 4: 硅基王峰** (4秒)
- 个人 AI 助手介绍
- 多模型支持（Qwen + MiniMax）
- 飞书 + WhatsApp + Telegram
- 记忆系统
- 子代理（PPT 大师 + 写作助手）

**场景 5: 结尾** (3秒)
- CTA：GitHub、文档、Discord 链接
- 开源信息

## 安装

```bash
cd openclaw-video

# 安装依赖
npm install

# 开发预览
npm run dev

# 构建视频
npm run build
```

## 项目结构

```
openclaw-video/
├── package.json
├── remotion.config.ts
├── tsconfig.json
└── src/
    ├── index.tsx          # 场景定义
    ├── Root.tsx           # 根组件
    ├── TitleScene.tsx     # 开场场景
    ├── WhatIsOpenClaw.tsx # OpenClaw 介绍
    ├── MultiChannel.tsx   # 多渠道展示
    ├── WangFengAssistant.tsx # 硅基王峰介绍
    └── EndingScene.tsx    # 结尾场景
```

## 技术栈

- **Remotion** - React 视频框架
- **TypeScript** - 类型安全
- **React 18** - UI 组件
- **CSS-in-JS** - 样式（内联样式）

## 自定义

### 修改颜色

在各个场景文件中修改 `background` 属性：

```typescript
style={{
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
}}
```

### 修改时长

在 `index.tsx` 中调整 `durationInFrames`：

```typescript
<Composition
  id="SceneName"
  component={SceneComponent}
  durationInFrames={120}  // 改为你的帧数
  fps={30}
  width={1920}
  height={1080}
/>
```

### 添加新场景

1. 在 `src/` 目录创建新场景文件
2. 在 `index.tsx` 中添加 Composition
3. 更新 `Root.tsx` 中的 `scenes` 数组

## 渲染

### 本地预览

```bash
npm run dev
```

访问 http://localhost:3000 查看预览。

### 构建 MP4

```bash
npm run build
```

生成的视频保存在 `out/` 目录。

## 使用 AI 生成配乐（可选）

可以使用以下工具为视频添加背景音乐：

- **Suno AI** - 生成背景音乐
- **Udio** - AI 音乐生成
- **ElevenLabs** - 语音旁白

## 发布

1. 构建视频：`npm run build`
2. 导出 `out/video.mp4`
3. 上传到 YouTube、B 站等平台
4. 更新社交媒体链接

## 贡献

欢迎提交 PR 或 Issue！

## 许可证

MIT License - 参考 OpenClaw 主项目
