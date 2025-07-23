import React from "react";

// 定义 Chat 组件的 Props 类型
export interface ChatProps {
  /** 聊天标题 */
  title?: string;
  /** 是否显示 */
  visible?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 点击事件 */
  onClick?: () => void;
}

// Chat 组件
export const Chat: React.FC<ChatProps> = ({
  title = "Chat",
  visible = true,
  className,
  style,
  onClick,
}) => {
  if (!visible) return null;

  return (
    <div className={className} style={style} onClick={onClick}>
      {title}: I am a chat
    </div>
  );
};

// 设置显示名称，便于调试
Chat.displayName = "Chat";
