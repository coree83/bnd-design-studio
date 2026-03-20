export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string; // ← 이 줄을 추가합니다!
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI 비주얼 제작",
    category: "광고 / 제품 / 건축",
    description: "고해상도 광고 이미지, 제품 렌더링, 건축 및 인테리어 시안을 AI로 정교하게 제작합니다.",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000&auto=format&fit=crop",
    year: "2024" // ← 연도 추가
  },
  {
    id: 2,
    title: "브랜드 시스템 설계",
    category: "브랜딩 / 전략",
    description: "데이터 기반의 브랜드 컨셉 정의부터 컬러, 타이포그래피, 비주얼 가이드라인을 설계합니다.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 3,
    title: "자동화 디자인 서비스",
    category: "이커머스 / SNS",
    description: "SNS 콘텐츠, 쇼핑몰 상세페이지, 배너 및 포스터를 대량으로 자동 생성하여 업무 효율을 높입니다.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 4,
    title: "프롬프트 설계 서비스",
    category: "B2B / 자동화 시스템",
    description: "기업 전용 맞춤형 AI 프롬프트 제작 및 디자인 자동화 워크플로우를 구축해 드립니다.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 5,
    title: "AI 모션 & 영상 제작",
    category: "비디오 / 애니메이션",
    description: "AI를 활용해 정적인 이미지를 역동적인 광고 영상과 모션 그래픽으로 변환합니다.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 6,
    title: "AI 가상 모델 제작",
    category: "모델링 / 브랜드 아이덴티티",
    description: "브랜드를 대표하는 전용 모델과 캐릭터를 AI로 생성하여 마케팅 효율을 극대화합니다.",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
    year: "2024"
  }
];