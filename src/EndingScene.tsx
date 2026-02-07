// 场景 5: 结尾 - CTA

import { useCallback } from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { AbsoluteFill } from 'remotion';

export const EndingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 动画
  const titleOpacity = interpolate(frame, [10, 30], [0, 1]);
  const ctaOpacity = interpolate(frame, [40, 60], [0, 1]);

  const socials = [
    { name: 'GitHub', url: 'https://github.com/openclaw/openclaw', icon: '🐙' },
    { name: '文档', url: 'https://docs.openclaw.ai', icon: '📚' },
    { name: 'Discord', url: 'https://discord.com/invite/clawd', icon: '💬' },
  ];

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* 标题 */}
      <h1 style={{
        fontSize: 56,
        color: '#ffffff',
        marginBottom: 30,
        opacity: titleOpacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        开始你的 AI 助手之旅
      </h1>

      {/* 副标题 */}
      <p style={{
        fontSize: 24,
        color: '#a0aec0',
        marginBottom: 60,
        opacity: titleOpacity,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        maxWidth: 600,
      }}>
        安装 OpenClaw，拥有属于你自己的 AI Agent 网关
      </p>

      {/* CTA 按钮 */}
      <div style={{
        display: 'flex',
        gap: 20,
        opacity: ctaOpacity,
      }}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 30,
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
            }}
          >
            <span style={{ fontSize: 24 }}>{social.icon}</span>
            <span style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 'bold',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}>
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* 底部 */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        color: '#718096',
        fontSize: 16,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        OpenClaw · MIT License · Open Source
      </div>
    </AbsoluteFill>
  );
};
