import type { GameProject, Project } from '../types';

const images = [
  ['03', '공격 스킬 — 붉은 기둥과 지면 타격 이펙트', 'Attack skill — red pillar and ground impact'],
  ['01', '환경 연출 — 공간의 명암과 라이트 표현', 'Environment — scene lighting and contrast'],
  ['02', '환경 연출 — 지면에 퍼지는 스모그', 'Environment — ground-level smog'],
  ['04', '공격 스킬 — 보라색 검기', 'Attack skill — purple slash'],
  ['05', '공격 스킬 — 에너지 폭발', 'Attack skill — energy burst'],
] as const;
const breakdown: { ko: Project['breakdown']; en: Project['breakdown'] } = {
  ko: [
    { title: '환경광과 라이트', image: '/images/team-many-star/01.webp', width: 1272, height: 700, description: 'Unity에서 환경광과 라이트를 제작했습니다. 배경 공간의 명암과 밝은 광원 표현을 구성해 전투 장면의 분위기를 만들었습니다.' },
    { title: '지면 스모그', image: '/images/team-many-star/02.webp', width: 1267, height: 701, description: '지면을 따라 퍼지는 스모그 효과를 제작했습니다. 밝은 연무가 겹쳐지는 형태로 공간의 깊이와 환경 분위기를 표현했습니다.' },
    { title: '지면 타격 스킬', image: '/images/team-many-star/03.webp', width: 1072, height: 596, description: '붉은 기둥과 지면에서 퍼지는 형태를 결합한 공격 이펙트입니다. 수직으로 뻗는 실루엣과 타격 지점의 빛을 통해 공격 위치를 드러냈습니다.' },
    { title: '검기와 에너지 폭발', image: '/images/team-many-star/04.webp', width: 1072, height: 600, description: '진행 방향이 보이는 보라색 검기와 에너지가 한 지점에 모여 터지는 공격 이펙트를 제작했습니다. 공격별로 궤적과 확산 형태를 구분했습니다.' },
    { title: '나선형 셰이더 · AS_Helix', image: '/images/team-many-star/as_01.webp', width: 1156, height: 630, kind: 'shader', description: 'Amplify Shader Editor에서 제작한 AS_Helix 그래프입니다. 노드 연결과 출력 구성을 원본 크기로 확인할 수 있습니다.' },
    { title: '폭발 셰이더 · AS_Exp', image: '/images/team-many-star/as_02.webp', width: 1902, height: 972, kind: 'shader', description: '에너지 폭발 표현을 위한 셰이더 그래프입니다. 텍스처와 색상·출력으로 이어지는 제작 구성을 정리했습니다.' },
    { title: '대시 셰이더 · AS_Dash', image: '/images/team-many-star/as_03.webp', width: 1907, height: 987, kind: 'shader', description: '대시 표현을 위한 셰이더 그래프입니다. 형태와 색상, 투명도 출력에 연결되는 노드 구성을 확인할 수 있습니다.' },
  ],
  en: [
    { title: 'Ambient light & lighting', image: '/images/team-many-star/01.webp', width: 1272, height: 700, description: 'Created ambient lighting and light effects in Unity, combining scene contrast and bright light sources to establish the battle environment.' },
    { title: 'Ground-level smog', image: '/images/team-many-star/02.webp', width: 1267, height: 701, description: 'Created smog spreading across the ground, using overlapping mist shapes to express environmental depth and atmosphere.' },
    { title: 'Ground-impact skill', image: '/images/team-many-star/03.webp', width: 1072, height: 596, description: 'Combined a red pillar and ground-level spread. The vertical silhouette and bright impact point communicate where the attack lands.' },
    { title: 'Slash & energy burst', image: '/images/team-many-star/04.webp', width: 1072, height: 600, description: 'Created a directional purple slash and a concentrated energy burst, with distinct trails and expansion shapes for each attack.' },
    { title: 'Helix shader · AS_Helix', image: '/images/team-many-star/as_01.webp', width: 1156, height: 630, kind: 'shader', description: 'The AS_Helix graph authored in Amplify Shader Editor. Open the full-size image to inspect its node connections and output.' },
    { title: 'Explosion shader · AS_Exp', image: '/images/team-many-star/as_02.webp', width: 1902, height: 972, kind: 'shader', description: 'An energy-burst shader graph showing the workflow from textures and color to output.' },
    { title: 'Dash shader · AS_Dash', image: '/images/team-many-star/as_03.webp', width: 1907, height: 987, kind: 'shader', description: 'A dash shader graph showing the node structure for shape, color, and transparency output.' },
  ],
};

export const teamManyStarProject: GameProject = {
  slug: 'team-many-star', activityId: 'team-many-star', event: 'TeamManyStar', layout: 'case-study', initialImage: 0,
  context: { ko: '인디게임 제작팀 · 이펙트 팀원 · 진행 중', en: 'Indie game team · VFX team member · Ongoing' },
  screenshots: images.map(([id, ko, en]) => ({ src: `/images/team-many-star/${id}.webp`, thumbnail: `/images/team-many-star/${id}-thumb.webp`, caption: { ko, en } })),
  breakdown,
  copy: {
    ko: {
      title: 'TeamManyStar 인디게임제작팀', tagline: '공간의 분위기부터 공격의 타격감까지, 게임 장면을 위한 실시간 VFX.',
      summary: '이펙트 팀원으로 환경광·라이트·스모그와 공격 스킬 이펙트를 제작했습니다. Unity에서 장면을 구성하고 Amplify Shader Editor로 이펙트용 셰이더를 제작했습니다.',
      tags: ['Unity', '실시간 VFX', '환경 연출', '공격 스킬', 'Amplify Shader Editor'],
      facts: [{ label: '기간', value: '2026.01.04 — 진행 중' }, { label: '소속·역할', value: 'TeamManyStar · 이펙트 팀원' }, { label: '담당 범위', value: '환경광 · 라이트 · 스모그 · 공격 스킬' }, { label: '주요 도구', value: 'Unity · Amplify Shader Editor' }],
      about: [{ title: '전투 공간과 공격 연출 제작', description: '어두운 배경의 환경광과 라이트, 지면에 퍼지는 스모그로 공간의 분위기를 구성했습니다. 공격 장면에서는 붉은 기둥·보라색 검기·에너지 폭발처럼 형태가 다른 이펙트를 제작했습니다.' }],
      responsibilities: ['인디게임 제작팀의 이펙트 팀원으로 환경 연출과 공격 스킬 VFX 제작 담당', 'Unity에서 환경광과 라이트를 제작하고 게임 장면의 명암과 광원 표현 구성', '지면에 퍼지는 스모그 효과 제작 및 환경 장면에 배치', 'Unity에서 지면 타격·검기·에너지 폭발 등 공격 스킬 이펙트 제작', 'Amplify Shader Editor로 AS_Helix·AS_Exp·AS_Dash 셰이더 제작 및 노드 구성'],
      solutions: [], tools: [{ title: 'Unity', description: '환경광·라이트·스모그와 공격 스킬 이펙트 제작 및 장면 구성' }, { title: 'Amplify Shader Editor', description: '이펙트용 셰이더 제작과 노드 그래프 구성' }], takeaway: '',
    },
    en: {
      title: 'TeamManyStar Indie Game Team', tagline: 'Real-time VFX for scene atmosphere and combat impact.',
      summary: 'As a VFX team member, I created ambient light, lighting, smog, and attack effects. I assembled scenes in Unity and authored effect shaders in Amplify Shader Editor.',
      tags: ['Unity', 'Real-time VFX', 'Environment', 'Attack skills', 'Amplify Shader Editor'],
      facts: [{ label: 'Period', value: '2026.01.04 — Present' }, { label: 'Team / role', value: 'TeamManyStar · VFX team member' }, { label: 'Contribution', value: 'Ambient light · Lighting · Smog · Attack skills' }, { label: 'Tools', value: 'Unity · Amplify Shader Editor' }],
      about: [{ title: 'Building the combat environment and attack effects', description: 'Created atmosphere through ambient light, light sources, and ground-level smog. Authored distinct attack shapes, including a red pillar, a purple slash, and an energy burst.' }],
      responsibilities: ['Responsible for environment and attack-skill VFX as a member of the indie game team.', 'Created ambient light and lighting in Unity to shape scene contrast and light-source presentation.', 'Created ground-level smog and placed it in the environment.', 'Created ground-impact, slash, and energy-burst attack effects in Unity.', 'Authored AS_Helix, AS_Exp, and AS_Dash shader graphs in Amplify Shader Editor.'],
      solutions: [], tools: [{ title: 'Unity', description: 'Ambient light, lighting, smog, attack effects, and scene assembly' }, { title: 'Amplify Shader Editor', description: 'Effect shader authoring and node graph construction' }], takeaway: '',
    },
  },
};
