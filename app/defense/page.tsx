'use client';

import { useState, useRef } from 'react';
import AttackModal from '../components/AttackModal';

export default function DefensePage() {
  const [isDefenseEnabled, setIsDefenseEnabled] = useState(false);
  const [selectedAsv, setSelectedAsv] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const asvOptions = ['ASV1', 'ASV2', 'ASV3', 'ASV4'];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 检查文件类型
      const validTypes = ['audio/wav', 'audio/mp3', 'audio/flac'];
      if (!validTypes.includes(file.type)) {
        alert('请上传WAV、MP3或FLAC格式的音频文件');
        return;
      }

      // 检查文件大小（10MB = 10 * 1024 * 1024 bytes）
      if (file.size > 10 * 1024 * 1024) {
        alert('文件大小不能超过10MB');
        return;
      }

      // 处理符合要求的文件
      console.log('上传的文件:', file);
      // TODO: 处理文件上传逻辑
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 隐藏的文件输入框 */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".wav,.mp3,.flac"
        onChange={handleFileUpload}
      />

      {/* 主要内容区域 */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-8">
          {/* 攻击者音频 */}
          <div className="flex flex-col items-center">
            <h2 className="text-[32px] mb-6">攻击者音频</h2>
            <div className="flex flex-col gap-4 w-full">
              <div 
                className="relative w-[204px] h-[60px] mx-auto cursor-pointer"
                onMouseEnter={() => setHoveredButton('online')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => setIsModalOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B224EF] to-[#7579FF] rounded-lg">
                  <div className={`absolute inset-[3px] ${hoveredButton === 'online' ? 'bg-gradient-to-r from-[#B224EF] to-[#7579FF] opacity-80' : 'bg-white'} rounded-[6px] transition-all duration-200`}>
                    <button className="w-full h-full font-['Microsoft_YaHei'] text-[24px] leading-[32px]">
                      <span className={`${hoveredButton === 'online' ? 'text-white' : 'bg-gradient-to-r from-[#B224EF] to-[#7579FF] bg-clip-text text-transparent'}`}>
                        在线生成
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div 
                className="relative w-[204px] h-[60px] mx-auto cursor-pointer"
                onMouseEnter={() => setHoveredButton('upload')}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#B224EF] to-[#7579FF] rounded-lg">
                  <div className={`absolute inset-[3px] ${hoveredButton === 'upload' ? 'bg-gradient-to-r from-[#B224EF] to-[#7579FF] opacity-80' : 'bg-white'} rounded-[6px] transition-all duration-200`}>
                    <button className="w-full h-full font-['Microsoft_YaHei'] text-[24px] leading-[32px]">
                      <span className={`${hoveredButton === 'upload' ? 'text-white' : 'bg-gradient-to-r from-[#B224EF] to-[#7579FF] bg-clip-text text-transparent'}`}>
                        本地上传
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 防御模块 */}
          <div className="flex flex-col items-center">
            <h2 className="text-[32px] text-[#655DE6] mb-6">防御模块</h2>
            <div className="flex justify-center">
              <div className="relative w-[100px] h-[50px]">
                <div className={`absolute inset-0 rounded-full transition-colors ${isDefenseEnabled ? 'bg-[#655DE6]' : 'bg-[#D9D9D9]'}`}></div>
                <div 
                  className={`absolute top-[2px] left-[2px] w-[46px] h-[46px] bg-white rounded-full shadow-lg transition-transform cursor-pointer ${isDefenseEnabled ? 'translate-x-[50px]' : 'translate-x-0'}`}
                  onClick={() => setIsDefenseEnabled(!isDefenseEnabled)}
                ></div>
              </div>
            </div>
          </div>

          {/* ASV系统 */}
          <div className="flex flex-col items-center">
            <h2 className="text-[32px] mb-6">ASV系统</h2>
            <div className="flex flex-col gap-4 w-full">
              {asvOptions.map((asv, index) => (
                <div 
                  key={asv}
                  className="relative w-[204px] h-[60px] mx-auto cursor-pointer"
                  onClick={() => setSelectedAsv(index)}
                  onMouseEnter={() => setHoveredButton(asv)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B224EF] to-[#7579FF] rounded-lg">
                    <div className={`absolute inset-[3px] ${selectedAsv === index ? 'bg-gradient-to-r from-[#B224EF] to-[#7579FF]' : hoveredButton === asv ? 'bg-gradient-to-r from-[#B224EF] to-[#7579FF] opacity-80' : 'bg-white'} rounded-[6px] transition-all duration-200`}>
                      <button className="w-full h-full font-['Microsoft_YaHei'] text-[24px] leading-[32px] font-bold">
                        <span className={`${selectedAsv === index || hoveredButton === asv ? 'text-white' : 'bg-gradient-to-r from-[#B224EF] to-[#7579FF] bg-clip-text text-transparent'}`}>
                          {asv}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 说话人识别结果 */}
          <div className="flex flex-col items-center">
            <h2 className="text-[32px] mb-6">说话人识别结果</h2>
          </div>
        </div>

        {/* 开始测试按钮 */}
        <div className="mt-8 text-center">
          <button className="w-[636px] h-[60px] bg-gradient-to-r from-[#B224EF] to-[#7579FF] text-white text-[24px] font-bold rounded-[10px] hover:opacity-90 transition-opacity">
            开始测试
          </button>
        </div>
      </div>

      {/* 攻击生成弹窗 */}
      <AttackModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
} 