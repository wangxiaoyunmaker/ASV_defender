'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AttackForm() {
  const [hasTarget, setHasTarget] = useState(false);
  const [isAdaptive, setIsAdaptive] = useState(false);
  const [attackType, setAttackType] = useState('L2');
  const [targetSpeaker, setTargetSpeaker] = useState('Speaker_A');
  const [asvModel, setAsvModel] = useState('3D-Speaker');

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-6">
          <div className="flex items-end gap-3">
            <div 
              className="w-6 h-6 border-3 border-[#785DEF] rounded cursor-pointer"
              onClick={() => setHasTarget(!hasTarget)}
              style={{
                backgroundColor: hasTarget ? '#785DEF' : 'transparent'
              }}
            />
            <span className="text-2xl text-[#785DEF]">有攻击目标</span>
          </div>
          <div className="flex items-end gap-3">
            <div 
              className="w-6 h-6 border-3 border-[#785DEF] rounded cursor-pointer"
              onClick={() => setIsAdaptive(!isAdaptive)}
              style={{
                backgroundColor: isAdaptive ? '#785DEF' : 'transparent'
              }}
            />
            <span className="text-2xl text-[#785DEF]">适应性攻击</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <span className="text-2xl tracking-widest text-[#28264D]">攻击类型</span>
          <div className="relative">
            <select
              value={attackType}
              onChange={(e) => setAttackType(e.target.value)}
              className="w-full h-12 px-4 text-2xl text-[#785DEF] bg-[#D9D9D9] border-2 border-[#DADADA] rounded-lg appearance-none cursor-pointer"
            >
              <option value="L2">L2</option>
              <option value="Linf">Linf</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Image src="/images/arrow-down.svg" alt="arrow down" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <span className="text-2xl tracking-widest text-[#28264D]">目标说话人</span>
          <div className="relative">
            <select
              value={targetSpeaker}
              onChange={(e) => setTargetSpeaker(e.target.value)}
              className="w-full h-12 px-4 text-2xl text-[#785DEF] bg-[#D9D9D9] border-2 border-[#DADADA] rounded-lg appearance-none cursor-pointer"
            >
              <option value="Speaker_A">Speaker_A</option>
              <option value="Speaker_B">Speaker_B</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Image src="/images/arrow-down.svg" alt="arrow down" width={24} height={24} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-2xl tracking-widest text-[#28264D]">ASV模型</span>
          <div className="relative">
            <select
              value={asvModel}
              onChange={(e) => setAsvModel(e.target.value)}
              className="w-full h-12 px-4 text-2xl text-[#785DEF] bg-[#D9D9D9] border-2 border-[#DADADA] rounded-lg appearance-none cursor-pointer"
            >
              <option value="3D-Speaker">3D-Speaker</option>
              <option value="ECAPA-TDNN">ECAPA-TDNN</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Image src="/images/arrow-down.svg" alt="arrow down" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>

      <button className="mx-auto block px-[217px] py-4 text-2xl font-bold tracking-wider text-white bg-gradient-to-r from-[#B224EF] to-[#7579FF] rounded-lg">
        攻击音频生成
      </button>
    </div>
  );
} 