// 场景 2: OpenClaw 是什么

import { useCallback } from 'react';
import { useCurrentFrame, useVideoConfig, spring, interpolate } from 'remotion';
import { AbsoluteFill } from 'remotion';

export const WhatIsOpenClaw: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 动画
  const card1Opacity = interpolate(frame, [20, 40], [0, 1]);
  const card2Opacity = interpolate(frame, [40, 60], [0, 1]);
  const card3Opacity = interpolate(frame, [60, 80], [0, 1]);

  const cards = [
    {
      icon: '🏠',
      title: '自托管',
      description: '运行在你的机器上，数据完全由你掌控',
    },
    {
      icon: '🌐',
      title: '多渠道集成',
      description: 'WhatsApp、Telegram、Discord、iMessage、飞书',
    },
    {
      icon: '🤖',
      title: 'AI Agent 原生',
      description: '专为 AI 编程助手设计，支持工具调用',
    },
  ];

  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      padding: 60,
    }}>
      {/* 标题 */}
      <h1 style={{
        fontSize: 56,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 60,
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        什么是 OpenClaw？
      </h1>

      {/* 特性卡片 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        flexWrap: 'wrap',
      }}>
        {cards.map((card, index) => {
          const opacity = [card1Opacity, card2Opacity, card3Opacity][index];
          const translateY = interpolate(frame, [30 + index * 20, 50 + index * 20], [50, 0]);

          return (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 20,
              padding: 40,
              width: 280,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              opacity,
              transform: `translateY(${translateY}px)`,
            }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>{card.icon}</div>
              <h3 style={{
                color: '#ffffff',
                fontSize: 28,
                marginBottom: 15,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}>
                {card.title}
              </h3>
              <p style={{
                color: '#a0aec0',
                fontSize: 18,
                lineHeight: 1.6,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}>
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* 底部 CTA */}
      <div style={{
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        textAlign: 'center',
      }}>
        <p style={{
          color: '#718096',
          fontSize: 20,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          开源 · MIT 许可证 · 社区驱动
        </p>
      </div>
    </AbsoluteFill>
  );
};
