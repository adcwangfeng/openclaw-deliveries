// 场景 4: 硅基王峰 - 个人 AI 助手

import { useCallback } from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { AbsoluteFill } from 'remotion';

export const WangFengAssistant: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 头像动画
  const avatarScale = spring({
    fps,
    frame: frame - 10,
    config: { mass: 1, stiffness: 200, damping: 15 },
  });

  const nameOpacity = interpolate(frame, [30, 50], [0, 1]);
  const featuresOpacity = interpolate(frame, [50, 70], [0, 1]);

  const features = [
    '多模型支持：Qwen + MiniMax',
    '飞书 + WhatsApp + Telegram',
    '记忆系统：长期记忆 + 每日笔记',
    '子代理：PPT 大师 + 写作助手',
  ];

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* 头像 */}
      <div style={{
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 80,
        transform: `scale(${avatarScale})`,
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        marginBottom: 40,
      }}>
        🤖
      </div>

      {/* 名字 */}
      <h1 style={{
        fontSize: 64,
        color: '#ffffff',
        marginBottom: 10,
        opacity: nameOpacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      }}>
        硅基王峰
      </h1>

      <p style={{
        fontSize: 28,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 50,
        opacity: nameOpacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        你的个人 AI 助手
      </p>

      {/* 特性列表 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 15,
        opacity: featuresOpacity,
      }}>
        {features.map((feature, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px 30px',
            borderRadius: 30,
            backdropFilter: 'blur(10px)',
          }}>
            <span style={{
              color: '#ffffff',
              fontSize: 20,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}>
              {feature}
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
