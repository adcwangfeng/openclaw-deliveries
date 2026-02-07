// 根组件 - 组合所有场景

import React from 'react';
import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AbsoluteFill } from 'remotion';

const scenes = [
  { id: 'TitleScene', duration: 90 },
  { id: 'WhatIsOpenClaw', duration: 120 },
  { id: 'MultiChannel', duration: 120 },
  { id: 'WangFengAssistant', duration: 120 },
  { id: 'EndingScene', duration: 90 },
];

export const OpenClawVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // 计算当前场景
  let currentFrame = 0;
  let currentSceneIndex = 0;

  for (let i = 0; i < scenes.length; i++) {
    if (frame < currentFrame + scenes[i].duration) {
      currentSceneIndex = i;
      break;
    }
    currentFrame += scenes[i].duration;
  }

  const sceneStartFrame = scenes.slice(0, currentSceneIndex).reduce((acc, s) => acc + s.duration, 0);
  const localFrame = frame - sceneStartFrame;

  // 场景过渡效果
  const transitionProgress = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // 渲染当前场景
  const SceneComponent = getSceneComponent(scenes[currentSceneIndex].id);

  return (
    <AbsoluteFill style={{
      transition: `opacity ${transitionProgress * 0.1}s ease-in-out`,
    }}>
      {SceneComponent && <SceneComponent />}
    </AbsoluteFill>
  );
};

// 场景组件映射
function getSceneComponent(sceneId: string) {
  switch (sceneId) {
    case 'TitleScene':
      return require('./TitleScene').TitleScene;
    case 'WhatIsOpenClaw':
      return require('./WhatIsOpenClaw').WhatIsOpenClaw;
    case 'MultiChannel':
      return require('./MultiChannel').MultiChannel;
    case 'WangFengAssistant':
      return require('./WangFengAssistant').WangFengAssistant;
    case 'EndingScene':
      return require('./EndingScene').EndingScene;
    default:
      return null;
  }
}

// 场景列表（用于入口点）
export const sceneList = scenes;

export default OpenClawVideo;
