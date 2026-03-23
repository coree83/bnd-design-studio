import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        {/* 배경 이미지는 나중에 본인의 멋진 AI 생성 이미지로 교체하세요 */}
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Studio Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] mb-6 block font-medium opacity-70"
        >
          AI Design Studio
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10vw] md:text-[7vw] leading-[1.1] font-bold tracking-tighter uppercase mb-8"
        >
          상상을 현실로 <br />
          <span className="italic font-serif font-light lowercase text-[12vw] md:text-[8vw]">Visual</span> <br />
          Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-sm md:text-lg font-light tracking-widest opacity-60 uppercase"
        >
          AI 기술로 설계하는 무한한 디자인 스페이스
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-24 bg-gradient-to-b from-white to-transparent opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
}