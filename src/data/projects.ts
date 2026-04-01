export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[]; // ← 배열 형태이므로 아래 데이터도 모두 [ ]를 써야 합니다.
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "브랜드 디자인 시스템",
    category: "Brand Identity / Strategy",
    description: "브랜드의 본질을 담은 로고부터 컬러 시스템, 슬로건까지 일관된 시각 언어로 강력한 정체성을 구축합니다.",
    images: ["/Brand-01.jpg", "/Brand-02.jpg", "/Brand-03.jpg", "/Brand-04.jpg"], // [ ] 추가
    year: "2026"
  },
  {
    id: 2,
    title: "프리미엄 편집 디자인",
    category: "Editorial / Print Media",
    description: "브로슈어, 카탈로그, 매거진 등 종이의 질감과 타이포그래피의 조화를 통해 독보적인 브랜드 경험을 전달합니다.",
    images: ["/Editorial-01.jpg", "/Baner-01.jpg", "/Editorial-02.jpg", "/Editorial-03.jpg", "/Editorial-04.jpg", "/Editorial-05.jpg", "/Editorial-06.jpg"], // 쉼표(,) 누락 수정 완료
    year: "2026"
  },
  {
    id: 3,
    title: "웹 & 앱 디지털 경험",
    category: "UX/UI / Digital Platform",
    description: "사용자 중심의 직관적인 UI 설계와 감각적인 UX를 통해 브랜드의 디지털 경쟁력을 극대화합니다.",
    images: ["https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop"], // [ ] 추가
    year: "2026"
  },
  {
    id: 4, 
    title: "Product & Package Design / AI Visualization",
    category: "AI 기반 프리미엄 패키지 디자인",
    description: "생성형 AI 기술을 패키지 디자인 프로세스에 도입하여, 아이디어 스케치부터 최종 고해상도 3D 목업까지 신속하게 구현합니다. 상상 속의 컨셉을 정교한 비주얼로 구체화하여 소비자에게 강력한 브랜드 메시지를 전달하는 패키지 경험을 창출합니다.",
    images: ["/Package-01.jpg", "/Package-02.jpg", "/Package-03.jpg"], 
    year: "2026"
  },
  {
    id: 5,
    title: "건축 & 인테리어 투시도",
    category: "Space Design / Rendering",
    description: "공간의 철학이 담긴 인테리어 시안과 건축 투시도를 제작하여, 완성될 공간의 가치를 미리 시각화합니다.",
    images: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"], // [ ] 추가
    year: "2026"
  },
  {
    id: 6,
    title: "교회 브랜딩 & 미디어",
    category: "Church Ministry Design",
    description: "교회의 영성과 비전을 현대적인 감각으로 재해석하여, 예배 배너부터 주보, 미디어 사역 전반의 디자인을 총괄합니다.",
    images: ["https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2000&auto=format&fit=crop"], // [ ] 추가
    year: "2026"
  }
];