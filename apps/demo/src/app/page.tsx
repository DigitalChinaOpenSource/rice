"use client";

import { Chat } from "@rice/react";
import type { ChatProps } from "@rice/react";
import { useState } from "react";

export default function Home() {
  const [chatTitle, setChatTitle] = useState("AI Assistant");
  const [chatVisible, setChatVisible] = useState(true);

  const handleChatClick = () => {
    console.log("Chat clicked!");
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Rice AI Components Demo
        </h1>

        <div className="space-y-8">
          {/* Chat Component Demo */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Chat Component</h2>

            <div className="space-y-4">
              {/* Controls */}
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Chat Title:
                  </label>
                  <input
                    type="text"
                    value={chatTitle}
                    onChange={(e) => setChatTitle(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full max-w-sm"
                  />
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={chatVisible}
                      onChange={(e) => setChatVisible(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm font-medium">Visible</span>
                  </label>
                </div>
              </div>

              {/* Component Demo */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Component Preview:</h3>
                <Chat
                  title={chatTitle}
                  visible={chatVisible}
                  onClick={handleChatClick}
                  className="bg-blue-100 border border-blue-300 rounded p-4 cursor-pointer hover:bg-blue-200 transition-colors"
                />
              </div>

              {/* Usage Example */}
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="text-lg font-medium mb-2">Usage Example:</h3>
                <pre className="text-sm text-gray-700 overflow-x-auto">
                  {`import { Chat } from '@rice/react';

function App() {
  return (
    <Chat
      title="${chatTitle}"
      visible={${chatVisible}}
      onClick={() => console.log('Chat clicked!')}
      className="custom-chat-style"
    />
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* Props Documentation */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Chat Props</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Prop
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Type
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Default
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">title</td>
                    <td className="border border-gray-300 px-4 py-2">string</td>
                    <td className="border border-gray-300 px-4 py-2">
                      &quot;Chat&quot;
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      聊天标题
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      visible
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      boolean
                    </td>
                    <td className="border border-gray-300 px-4 py-2">true</td>
                    <td className="border border-gray-300 px-4 py-2">
                      是否显示
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      className
                    </td>
                    <td className="border border-gray-300 px-4 py-2">string</td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">
                      自定义类名
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">style</td>
                    <td className="border border-gray-300 px-4 py-2">
                      CSSProperties
                    </td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">
                      自定义样式
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      onClick
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      function
                    </td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">
                      点击事件
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
