import type { GameProject } from '../types';

// Source: Asset/Projects/U&I_Festival/의 LIFE-AI 기획 문서와 제작 이미지.
// 문서에 제안된 체험·건강 분석·기기 연동은 실제 구현 실적으로 기재하지 않습니다.
export const uiProject: GameProject = {
  slug: 'ui-festival-2023', activityId: 'ui-festival-2023', event: '2023 제2회 U&I Festival', kind: 'presentation', layout: 'case-study', initialImage: 0,
  context: { ko: 'AI를 활용한 문화콘텐츠 아이디어 경연대회 · 발표', en: 'AI cultural content idea competition · Presentation' },
  screenshots: [
    { src: '/images/ui-festival/photo-02.webp', thumbnail: '/images/ui-festival/photo-02-thumb.webp', caption: { ko: 'U&I 페스티벌 — AI 문화콘텐츠 아이디어 발표 (02)', en: 'U&I Festival — AI cultural content presentation (02)' } },
    { src: '/images/ui-festival/photo-01.webp', thumbnail: '/images/ui-festival/photo-01-thumb.webp', caption: { ko: 'U&I 페스티벌 — 참가 및 발표 현장 (01)', en: 'U&I Festival — participation and presentation (01)' } },
    { src: '/images/ui-festival/character.webp', thumbnail: '/images/ui-festival/character-thumb.webp', caption: { ko: 'LIFai — 개인 맞춤형 AI 헬스 컨설턴트 캐릭터', en: 'LIFai — a personalized AI health consultant character' } },
  ],
  breakdown: {
    ko: [
      { title: '라이파이 캐릭터 제작 · Maya / Photoshop', image: '/images/ui-festival/character.webp', width: 1280, height: 720, description: 'Maya로 라이파이 3D 캐릭터를 제작하고, Photoshop에서 텍스처를 직접 그렸습니다. 개인 맞춤형 AI 헬스 컨설턴트의 콘셉트를 캐릭터의 형태와 색상으로 시각화했습니다.' },
      { title: '발표 참여 · 01', image: '/images/ui-festival/photo-01.webp', width: 3024, height: 2713, description: '2023 제2회 U&I 페스티벌 AI 문화콘텐츠 아이디어 경연대회에 참가했습니다. 공동 기획한 LIFE-AI, LIFai의 콘셉트와 제작 캐릭터를 발표 자료로 정리했습니다.' },
      { title: '발표 진행 · 02', image: '/images/ui-festival/photo-02.webp', width: 1125, height: 647, description: '경연대회 현장에서 기획 배경과 개인화 AI 캐릭터의 활용 아이디어를 직접 발표했습니다. 캐릭터 제작 결과와 서비스 이용 흐름을 연결해 제안 내용을 전달했습니다.' },
    ],
    en: [
      { title: 'LIFai character · Maya / Photoshop', image: '/images/ui-festival/character.webp', width: 1280, height: 720, description: 'Created the 3D LIFai character in Maya and hand-painted its textures in Photoshop, expressing the personalized AI health consultant concept through shape and color.' },
      { title: 'Presentation participation · 01', image: '/images/ui-festival/photo-01.webp', width: 3024, height: 2713, description: 'Participated in the AI cultural content idea competition at the 2023 2nd U&I Festival, organizing the shared LIFE-AI, LIFai concept and character into presentation materials.' },
      { title: 'Presenting the concept · 02', image: '/images/ui-festival/photo-02.webp', width: 1125, height: 647, description: 'Presented the concept background and applications of a personalized AI character, connecting the character artwork with the proposed service experience.' },
    ],
  },
  copy: {
    ko: {
      title: '건강한 삶을 위한 LIFE-AI, LIFai', tagline: '나의 성향에 맞춰 다가오는 AI 헬스 컨설턴트.',
      summary: '성격 유형에 따라 말투와 조언 방식이 달라지는 AI 헬스 컨설턴트 ‘라이파이’를 기획했습니다. 캐릭터를 제작하고 U&I 페스티벌에서 개인화된 AI 문화콘텐츠 아이디어를 발표했습니다.',
      tags: ['AI 캐릭터', '콘텐츠 기획', '개인화', '헬스케어 아이디어', '발표'],
      facts: [{ label: '분야', value: 'AI 문화콘텐츠 아이디어 기획' }, { label: '참가', value: '2023 제2회 U&I 페스티벌' }, { label: '작업', value: '콘셉트 기획 · 캐릭터 제작 · 발표' }, { label: '구분', value: '서비스 아이디어 제안' }],
      about: [
        { title: '나만의 AI 트레이너, 라이파이', description: '운동에 대한 정보 부족과 시각적인 목표에 치우친 운동 습관을 기획의 출발점으로 삼았습니다. MBTI 성격 유형을 캐릭터의 말투와 조언 방식에 연결해, 사용자가 친근하게 느낄 수 있는 AI 헬스 컨설턴트를 제안했습니다.' },
        { title: '캐릭터에서 체험 흐름까지', description: '성격 유형 검사 → 캐릭터 생성 → 건강 키워드 선택 → 스크린·운동기구 체험 → 결과 확인과 스마트폰 연동으로 이어지는 이용 흐름을 기획했습니다. 운동·건강 관리와 기기 연동은 서비스 확장 아이디어이며, 구현 완료 기능을 의미하지 않습니다.' },
      ],
      responsibilities: ['공동 기획 문서를 바탕으로 개인화 AI 캐릭터의 콘셉트와 헬스케어 활용 방향 정리', 'Maya로 라이파이 3D 캐릭터 제작, Photoshop에서 텍스처를 직접 그려 캐릭터 외형 완성', '성격 검사·캐릭터 생성·운동 체험·결과 확인으로 이어지는 사용자 흐름 기획', 'U&I 페스티벌에서 제작 배경과 문화콘텐츠 아이디어 발표'],
      solutions: [], tools: [{ title: 'Maya', description: '라이파이 3D 캐릭터 제작' }, { title: 'Photoshop', description: '캐릭터 텍스처 직접 드로잉 및 제작' }], takeaway: '',
    },
    en: {
      title: 'LIFE-AI, LIFai — For a Healthier Life', tagline: 'An AI health consultant shaped around your personality.',
      summary: 'A personalized AI health consultant concept with different tones and advice styles based on personality types. I created the character and presented the cultural content idea at the U&I Festival.',
      tags: ['AI character', 'Content planning', 'Personalization', 'Healthcare concept', 'Presentation'],
      facts: [{ label: 'Field', value: 'AI cultural content concept' }, { label: 'Event', value: '2023 2nd U&I Festival' }, { label: 'Contribution', value: 'Concept · Character creation · Presentation' }, { label: 'Scope', value: 'Proposed service concept' }],
      about: [
        { title: 'A personal AI trainer, LIFai', description: 'The concept responds to limited exercise information and appearance-focused fitness habits. Personality types inform a character’s tone and advice style, proposing a more approachable AI health consultant.' },
        { title: 'From character to experience flow', description: 'The proposed flow connects a personality test, character generation, health keywords, a screen-and-equipment experience, results, and smartphone integration. Health management and device integration are proposed directions, rather than completed features.' },
      ],
      responsibilities: ['Developed the personalized AI character concept and healthcare direction through the shared proposal.', 'Created the 3D LIFai character in Maya and hand-painted its textures in Photoshop.', 'Planned the flow from personality testing and character generation to exercise and results.', 'Presented the production background and cultural content concept at the U&I Festival.'],
      solutions: [], tools: [{ title: 'Maya', description: '3D LIFai character creation' }, { title: 'Photoshop', description: 'Hand-painted character textures' }], takeaway: '',
    },
  },
};
