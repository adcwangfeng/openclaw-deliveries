// 主入口文件

import React from 'react';
import { Composition } from '@remotion/cli/components';
import { TitleScene } from './TitleScene';
import { WhatIsOpenClaw } from './WhatIsOpenClaw';
import { MultiChannel } from './MultiChannel';
import { WangFengAssistant } from './WangFengAssistant';
import { EndingScene } from './EndingScene';

export const Video: React.FC = () => {
  return (
    <>
      {/* 场景 1: 开场 - 3秒 */}
      <Composition
        id="TitleScene"
        component={TitleScene}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 场景 2: 什么是 OpenClaw - 4秒 */}
      <Composition
        id="WhatIsOpenClaw"
        component={WhatIsOpenClaw}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 场景 3: 多渠道集成 - 4秒 */}
      <Composition
        id="MultiChannel"
        component={MultiChannel}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 场景 4: 硅基王峰 - 4秒 */}
      <Composition
        id="WangFengAssistant"
        component={WangFengAssistant}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* 场景 5: 结尾 - 3秒 */}
      <Composition
        id="EndingScene"
        component={EndingScene}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

export default Video;
