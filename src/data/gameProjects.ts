import type { GameProject } from '../types';
import { aiverseProject } from './aiverseProject.ts';
import { museumProject } from './museumProject.ts';
import { uiProject } from './uiProject.ts';
import { teamManyStarProject } from './teamManyStarProject.ts';

export const gameProjects: GameProject[] = [{
  slug: 'progress-at-play-2026', activityId: 'progress-at-play-2026', event: 'PROGRESS@PLAY 2026',
  screenshots: [
    { src: '/images/progress/title.webp', thumbnail: '/images/progress/title-thumb.webp', caption: { ko: '침수된 도시와 가족의 생존을 담은 시작 화면', en: 'Title screen: a flooded city and a family trying to survive' } },
    { src: '/images/progress/living-room.webp', thumbnail: '/images/progress/living-room-thumb.webp', caption: { ko: '거실 — 가족 네 명의 상태와 생존 자원을 확인하는 중심 화면', en: 'Living room: family status and survival resources at a glance' } },
    { src: '/images/progress/journal.webp', thumbnail: '/images/progress/journal-thumb.webp', caption: { ko: '일지 — 사회 문제를 바탕으로 한 사건과 선택', en: 'Journal: events and choices shaped by social issues' } },
    { src: '/images/progress/family-status.webp', thumbnail: '/images/progress/family-status-thumb.webp', caption: { ko: '가족 상태 — 건강, 멘탈, 허기, 갈증과 가치관', en: 'Family status: health, morale, hunger, thirst, and values' } },
    { src: '/images/progress/expedition.webp', thumbnail: '/images/progress/expedition-thumb.webp', caption: { ko: '원정 — 가족과 장비를 선택하고 위험을 관리하는 준비 화면', en: 'Expedition: prepare a family member and equipment, and assess the risk' } },
  ],
  copy: {
    ko: {
      title: '임계점의 거실',
      tagline: '문이 닫힌 뒤에도 선택은 계속된다. 네 사람과 30일을 버텨라.',
      summary: '기후 재난으로 침수된 도시, 한 거실에 고립된 가족 네 명의 30일. 제한된 자원을 나누고 사회적 사건에 답하며 생존을 이어가는 내러티브 생존 시뮬레이션입니다.',
      tags: ['내러티브', '생존 시뮬레이션', '자원 관리', '도덕적 선택', '사회 문제'],
      facts: [
        { label: '장르', value: '내러티브 생존 시뮬레이션' },
        { label: '플랫폼', value: 'Windows PC' },
        { label: '플레이', value: '30일 · 사건 선택과 자원 관리' },
        { label: '배포 형태', value: 'Electron · 무설치 portable EXE' },
        { label: '저장', value: '자동 저장 · 백업 복구 · 이어하기' },
      ],
      about: [
        { title: '살아남기 위한 선택, 함께 살아가기 위한 선택', description: '식량과 식수, 약품과 배터리를 어떻게 나눌 것인가. 매일 마주하는 사건에서 당장의 이익과 공동체의 신뢰가 충돌합니다. 선택은 자원뿐 아니라 가족의 건강·멘탈·가치관을 바꾸고, 이기심과 공동체 신뢰는 서로 다른 엔딩으로 이어집니다.' },
        { title: '거실 안의 생존과 거실 밖의 위험', description: '사건 선택 → 배급·치료·대화 → 원정 준비 → 하루 마감으로 이어지는 생존 루프를 설계했습니다. 50개 사건과 100개 선택지에 기후 위기, 노동, 고령층 소외, 주거·의료 불평등을 담았습니다. 원정은 캐릭터 상태와 장비에 따라 귀환과 부상·감염 위험이 달라집니다.' },
      ],
      responsibilities: [
        '사회 문제를 생존 게임으로 전달하는 콘셉트·세계관 기획, 가족의 역할·가치관과 사건·분기·엔딩 시나리오 작성',
        'Visual Studio Code에서 JavaScript로 자원·가족 상태·원정·장비·방문자·구조 신호 및 DAY 18 보상 로직 구현',
        'HTML·CSS로 거실 UI와 상태별 캐릭터 표시 구성, JavaScript로 상황별 BGM·볼륨 설정 연결',
        'LocalStorage로 자동 저장·백업 복구·이어하기 구현, Electron·electron-builder로 portable EXE 빌드',
      ],
      solutions: [
        { title: '수치와 캐릭터 상태를 같은 순간에 전달', description: '배급 부족이 당일 허기·갈증에 반영되도록 수정하고, 상태 수치에 따라 표정과 UI 경고가 즉시 바뀌게 연결했습니다. 플레이어가 선택의 결과를 바로 이해하도록 개선했습니다.' },
        { title: '원정의 진행과 결과를 명확하게 표시', description: '원정 슬롯을 한 명으로 제한해 중복 파견을 막고, 귀환 예정일·성공률·장비·획득 자원·부상 및 감염 결과를 보고 형태로 정리했습니다.' },
        { title: '실행 위치가 바뀌어도 이어지는 저장', description: 'portable EXE의 임시 실행 경로가 바뀌는 문제에 대응해 Electron 사용자 데이터 경로를 고정했습니다. 자동 저장과 백업 복구를 함께 적용했습니다.' },
      ],
      tools: [
        { title: 'HTML · CSS · JavaScript', description: '게임 로직, 화면 구성, 상태 피드백 UI' },
        { title: 'Electron · electron-builder · LocalStorage', description: 'Windows 패키징, 진행 저장 및 복구' },
        { title: 'VS Code · Node.js 테스트 · OpenAI Codex', description: '개발, 규칙·저장 검증, AI 기반 구현·디버깅 보조' },
        { title: '생성형 이미지·음원 도구', description: '캐릭터·배경·상태 이미지 및 BGM 제작에 활용' },
      ],
      takeaway: '기능의 수보다 선택의 결과를 얼마나 명확하게 전달하는지가 중요했습니다. 게임 규칙과 UI 피드백을 함께 개선하고, 웹 기반 게임을 저장·오디오·Windows 배포까지 연결한 경험입니다.',
    },
    en: {
      title: 'The Boiling Living Room',
      tagline: 'The door is closed. The choices are not. Keep four people alive for 30 days.',
      summary: 'A family of four is stranded in one living room as climate disaster floods the city. Survive 30 days by sharing scarce resources and responding to social dilemmas in this narrative survival simulation.',
      tags: ['Narrative', 'Survival simulation', 'Resource management', 'Moral choices', 'Social issues'],
      facts: [
        { label: 'Genre', value: 'Narrative survival simulation' }, { label: 'Platform', value: 'Windows PC' },
        { label: 'Gameplay', value: '30 days · Event choices & resource management' },
        { label: 'Distribution', value: 'Electron · Portable EXE' }, { label: 'Save system', value: 'Autosave · Backup recovery · Continue' },
      ],
      about: [
        { title: 'Choose to survive. Choose to survive together.', description: 'Decide how to share food, water, medicine, and batteries. Daily events place immediate gain in conflict with community trust. Choices affect resources, family health, morale, and values; selfishness and trust lead to different endings.' },
        { title: 'Survival inside. Risk outside.', description: 'The daily loop moves from an event choice to rationing, treatment and conversation, expedition preparation, and ending the day. Fifty events and 100 choices explore climate crisis, labor, elderly isolation, and housing and healthcare inequality. Expedition outcomes and injury or infection risks depend on character status and equipment.' },
      ],
      responsibilities: [
        'Planned how social issues translate into a survival game, writing the world, family roles and values, events, branching choices, and endings.',
        'Implemented resource, family, expedition, equipment, visitor, rescue, and DAY 18 reward logic in JavaScript using Visual Studio Code.',
        'Built the living-room UI and character-state display in HTML/CSS and connected contextual BGM and volume controls in JavaScript.',
        'Implemented autosave and recovery with LocalStorage and packaged a portable EXE with Electron and electron-builder.',
      ],
      solutions: [
        { title: 'Make state changes visible immediately', description: 'Applied ration shortages to hunger and thirst on the same day, and synchronized facial expressions and UI warnings with status values so the consequences of a choice are immediately clear.' },
        { title: 'Make expeditions legible', description: 'Limited expeditions to one family member to prevent duplicate dispatches. Presented return dates, success chances, equipment, resources, injuries, and infections in a report.' },
        { title: 'Preserve saves across portable launches', description: 'Fixed the Electron user-data location to preserve progress when the portable executable uses a different temporary path. Combined autosave with backup recovery.' },
      ],
      tools: [
        { title: 'HTML · CSS · JavaScript', description: 'Game logic, screens, and state feedback UI' },
        { title: 'Electron · electron-builder · LocalStorage', description: 'Windows packaging, progress storage, and recovery' },
        { title: 'VS Code · Node.js tests · OpenAI Codex', description: 'Development, rules and save validation, AI-assisted implementation and debugging' },
        { title: 'Generative image & audio tools', description: 'Used for characters, backgrounds, status images, and BGM' },
      ],
      takeaway: 'Clear consequences matter more than feature count. This project connected game rules with UI feedback and took a web-based game through saving, audio, and Windows packaging.',
    },
  },
}, aiverseProject, museumProject, uiProject, teamManyStarProject];
