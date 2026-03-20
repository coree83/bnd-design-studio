import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference text-white"
    >
      <div className="text-xl font-bold tracking-tighter uppercase">
        BnD Design
      </div>
      
      <div className="hidden md:flex space-x-12 text-xs font-medium uppercase tracking-widest">
        <a href="#work" className="hover:opacity-50 transition-opacity">프로젝트</a>
        <a href="#about" className="hover:opacity-50 transition-opacity">소개</a>
        <a href="#contact" className="hover:opacity-50 transition-opacity">문의하기</a>
      </div>

      <div className="md:hidden">
        <button className="text-xs uppercase tracking-widest font-medium">메뉴</button>
      </div>
    </motion.nav>
  );
}
