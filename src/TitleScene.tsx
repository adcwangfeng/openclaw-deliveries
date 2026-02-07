// OpenClaw 介绍视频
// 场景 1: 开场 - 标题展示

import { useCallback } from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { AbsoluteFill, Img, staticFile } from 'remotion';

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标题动画
  const titleScale = spring({
    fps,
    frame: frame - 10,
    config: { mass: 1, stiffness: 150, damping: 15 },
  });

  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1]);

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* 背景装饰 */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(94, 114, 228, 0.1) 0%, transparent 50%)',
      }} />

      {/* 主标题 */}
      <h1 style={{
        fontSize: 80,
        fontWeight: 'bold',
        color: '#ffffff',
        textShadow: '0 0 30px rgba(94, 114, 228, 0.5)',
        transform: `scale(${titleScale})`,
        margin: 0,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        OpenClaw
      </h1>

      {/* 副标题 */}
      <h2 style={{
        fontSize: 36,
        color: '#a0aec0',
        marginTop: 20,
        opacity: subtitleOpacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        你的 AI Agent 网关
      </h2>

      {/* 装饰性元素 */}
      <div style={{
        position: 'absolute',
        bottom: 50,
        fontSize: 18,
        color: '#718096',
      }}>
        硅基王峰 · 个人 AI 助手
      </div>
    </AbsoluteFill>
  );
};
