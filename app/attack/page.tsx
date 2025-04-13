'use client';

import { useState } from 'react';

export default function AttackPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4">
      {/* 标题和新建按钮 */}
      <div className="flex items-center mb-8">
        <h1 className="text-2xl text-[#28264D] font-bold">对抗攻击生成</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-4 flex items-center justify-center gap-[5px] px-1.5 py-1 bg-gradient-to-r from-[#B224EF] to-[#7579FF] rounded-[32px] text-white hover:opacity-90 transition-opacity"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          新建攻击
        </button>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-2 gap-8">
        {/* 左侧：攻击者原音频 */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-[19px] font-bold text-[#28264D] mb-4">攻击者原音频</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#B224EF] to-[#7579FF] opacity-20 blur-[20px] rounded-lg"></div>
            <div className="relative bg-white rounded-xl p-8 min-h-[200px]">
              {audioUrl ? (
                <div className="flex items-center justify-center">
                  <audio src={audioUrl} controls className="w-full max-w-[600px]" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.9" y="0.9" width="52.2" height="52.2" rx="25.2" stroke="url(#paint0_linear_50_559)" strokeWidth="1.8"/>
                    <path d="M45 33.84C45 30.42 42.48 27.72 39.24 27.18C39.42 26.28 39.6 25.38 39.6 24.3C39.6 18.36 34.74 13.5 28.8 13.5C23.04 13.5 18.36 18 18 23.76H17.46C12.78 23.58 9 27.36 9 32.04C9 36.54 12.6 40.32 17.1 40.5H25.2V32.58H21.96L27 27L32.04 32.58H28.8V40.5H38.7C42.12 40.32 45 37.44 45 33.84Z" fill="url(#paint1_linear_50_559)"/>
                    <defs>
                      <linearGradient id="paint0_linear_50_559" x1="-1.98" y1="54" x2="59.6356" y2="51.4546" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B224EF"/>
                        <stop offset="1" stopColor="#7579FF"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_50_559" x1="7.68" y1="40.5" x2="48.7027" y2="38.2404" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#B224EF"/>
                        <stop offset="1" stopColor="#7579FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-[19px] font-bold text-[#655DE6]">点击上传音频文件</span>
                  <p className="text-[16px] text-[#28264D]">音频文件大小：&lt;10MB</p>
                  <p className="text-[16px] text-[#28264D]">支持的文件格式：WAV、MP3、FLAC</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 右侧：对抗样本攻击信息 */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-[19px] font-bold text-[#28264D] mb-4">对抗样本攻击信息</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-[16px] text-[#28264D]">攻击类型：</span>
              <select className="bg-[#F5F7FF] text-[#655DE6] px-3 py-1 rounded border border-[#655DE6] focus:outline-none focus:ring-2 focus:ring-[#655DE6] focus:ring-opacity-50">
                <option value="type1">类型1</option>
                <option value="type2">类型2</option>
                <option value="type3">类型3</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[16px] text-[#28264D]">攻击强度：</span>
              <input 
                type="range" 
                min="0" 
                max="100" 
                className="w-full h-2 bg-[#F5F7FF] rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[16px] text-[#28264D]">目标说话人：</span>
              <select className="bg-[#F5F7FF] text-[#655DE6] px-3 py-1 rounded border border-[#655DE6] focus:outline-none focus:ring-2 focus:ring-[#655DE6] focus:ring-opacity-50">
                <option value="speaker1">说话人1</option>
                <option value="speaker2">说话人2</option>
                <option value="speaker3">说话人3</option>
              </select>
            </div>
            <button className="w-full h-[60px] bg-gradient-to-r from-[#B224EF] to-[#7579FF] text-white text-[19px] font-bold rounded-[10px] hover:opacity-90 transition-opacity tracking-[0.08em]">
              生成对抗样本
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 