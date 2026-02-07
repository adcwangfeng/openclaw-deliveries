// 场景 3: 多渠道集成展示

import { useCallback } from 'react';
import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion';
import { AbsoluteFill } from 'remotion';

export const MultiChannel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const channels = [
    { name: 'WhatsApp', color: '#25D366', icon: '💬' },
    { name: 'Telegram', color: '#0088cc', icon: '✈️' },
    { name: 'Discord', color: '#5865F2', icon: '🎮' },
    { name: 'iMessage', color: '#5AC8FA', icon: '💭' },
    { name: 'Feishu', color: '#00C7BE', icon: '📱' },
  ];

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: 60,
    }}>
      {/* 标题 */}
      <h1 style={{
        fontSize: 56,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 80,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        一个网关，多个渠道
      </h1>

      {/* 渠道图标 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 30,
        flexWrap: 'wrap',
      }}>
        {channels.map((channel, index) => {
          const delay = index * 10;
          const opacity = interpolate(frame, [20 + delay, 40 + delay], [0, 1]);
          const scale = interpolate(frame, [20 + delay, 30 + delay], [0.5, 1], {
            extrapolateRight: 'clamp',
          });

          return (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity,
              transform: `scale(${scale})`,
            }}>
              <div style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: channel.color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`,
                marginBottom: 15,
              }}>
                {channel.icon}
              </div>
              <span style={{
                color: '#ffffff',
                fontSize: 18,
                fontWeight: 'bold',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}>
                {channel.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* 描述 */}
      <p style={{
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#a0aec0',
        fontSize: 24,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        从任何地方给你的 AI 助手发消息
      </p>
    </AbsoluteFill>
  );
};
