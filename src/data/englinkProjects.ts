import type { GameProject } from '../types';

export const aicfdProject: GameProject = {
  slug: 'englink-aicfd', activityId: 'englink-aicfd', event: '(주)엔글링크', layout: 'case-study', initialImage: 0,
  context: { ko: '프로젝트 · 근로 · AICFD Unity 프로젝트', en: 'Project · Employment · AICFD Unity project' },
  screenshots: [
    { src: '/images/aicfd/01.webp', thumbnail: '/images/aicfd/01-thumb.webp', caption: { ko: 'AICFD — 건물 주변 유속·풍압 시각화와 분석 UI', en: 'AICFD — building wind-speed and pressure visualization and analysis UI' } },
    { src: '/images/aicfd/02.webp', thumbnail: '/images/aicfd/02-thumb.webp', caption: { ko: 'Visual Studio Code — C# 건물 머터리얼 색상 제어 코드', en: 'Visual Studio Code — C# building material color control' } },
  ],
  breakdown: {
    ko: [
      { title: '풍환경 분석 UI 제작·변환', image: '/images/aicfd/01.webp', width: 1105, height: 615, description: '기존 Unity 프로젝트의 구조를 해석하고 분석 결과를 확인하는 UI를 제작·변환했습니다. AICFD는 건물 주변 유속·풍압 확인, 풍환경 자동 보고서 제작과 노드 데이터 CSV 다운로드를 지원하는 프로젝트입니다.' },
      { title: '건물 머터리얼 색상 제어 · C#', image: '/images/aicfd/02.webp', width: 1852, height: 932, description: 'Visual Studio Code에서 C# 스크립트를 작성했습니다. 건물 하위 MeshRenderer를 찾아 머터리얼 색상을 변경하는 코드를 구현하고 Unity 장면의 건물 표현에 적용했습니다.' },
    ],
    en: [
      { title: 'Analysis UI creation and conversion', image: '/images/aicfd/01.webp', width: 1105, height: 615, description: 'Interpreted the existing Unity project and created and converted its analysis UI. AICFD supports building wind-speed and pressure inspection, automated wind-environment reports, and CSV node-data downloads.' },
      { title: 'Building material color control · C#', image: '/images/aicfd/02.webp', width: 1852, height: 932, description: 'Wrote C# scripts in Visual Studio Code to find child MeshRenderers and change their material colors, applying the code to building visualization in Unity.' },
    ],
  },
  copy: {
    ko: {
      title: 'AICFD 모델 제작 작업', tagline: '풍환경 데이터를 읽고 확인할 수 있는 Unity 시각화 프로젝트.',
      summary: '(주)엔글링크 근로 프로젝트로 기존 Unity 파일 해석, 분석 UI 제작·변환과 건물 머터리얼 색상 제어를 담당했습니다. 매주 미팅에서 작업 결과와 기술 이슈를 공유하며 UI와 시각화 기능을 제작·수정했습니다.',
      tags: ['Unity', 'C#', 'Visual Studio Code', '풍환경 시각화', '프로젝트 · 근로'],
      facts: [{ label: '기간', value: '2026.03.02 — 2026.06.22' }, { label: '소속', value: '(주)엔글링크 · 근로' }, { label: '담당', value: 'Unity 파일 해석 · UI 제작·변환 · C# 색상 제어' }, { label: '프로젝트', value: 'AICFD Unity 프로젝트' }],
      about: [
        { title: '건물 주변의 유속과 풍압을 시각화', description: '건물과 컨투어 이미지를 통해 주변 유속·풍압을 확인하는 AICFD 프로젝트입니다. 분석 결과 확인에서 풍환경 자동 보고서 제작, 노드 데이터 CSV 다운로드로 이어지는 작업 흐름을 지원합니다.' },
        { title: '주간 미팅과 Unity 프로젝트 제작', description: '주간 미팅에서 진행 상황과 실행 환경의 병목, 데이터 전달 및 메모리 문제를 공유했습니다. 기존 Unity 프로젝트를 해석하고 UI와 건물 색상 제어를 제작·수정했습니다.' },
      ],
      responsibilities: [
        '기존 AICFD Unity 파일과 C# 스크립트 구조를 해석하고 UI·시각화 작업에 필요한 연결 관계 파악',
        'Unity에서 풍환경 분석 결과를 확인하는 UI 제작·변환 및 화면 구성 수정',
        'Visual Studio Code에서 C# 건물 머터리얼 색상 변경 코드 작성 및 Unity 장면 적용',
        '매주 미팅에서 작업 결과와 이슈를 공유하고 추론·데이터 전달·UI 렌더링의 병목 및 메모리 관리 방향 논의',
        '미팅에서 정리한 작업 방향을 바탕으로 Unity UI와 시각화 기능 제작·수정',
      ],
      solutionsTitle: '주간 미팅 & 기술 검토',
      solutions: [
        { title: '컨투어 생성 시간의 차이와 병목 파악', description: '4월 21일 미팅에서 구버전과 distance mask 생성 버전의 동작 차이를 정리했습니다. 일반 CPU 환경에서 distance mask 생성이 병목으로 작용하는 점을 확인하고, PNG/JPG 포맷별 처리 차이와 경량화 가능성을 후속 검토 항목으로 정리했습니다.' },
        { title: '추론 메모리와 UI 누적 메모리를 나누어 검토', description: 'IPC 적용으로 디스크 I/O가 줄어든 구조에서 모델 파라미터·추론 메모리와 UI의 컨투어 이미지 누적 메모리를 구분했습니다. 단일 lock/freeze 추론, 최신 N개 이미지 유지와 overwrite/release를 메모리 관리 방향으로 논의했습니다.' },
        { title: '갱신 주기와 표시 데이터의 비용 검토', description: '추론 시간에 영향을 받는 모니터링 갱신 주기와 추론·모델·렌더링을 합친 VRAM 사용을 함께 검토했습니다. RGBA→RGB 변경과 BC1/DXT1 압축을 통한 메모리 절감 가능성을 검토하고, 목표 갱신 주기에 맞는 시스템 사양 산정의 필요성을 논의했습니다. 이 내용은 미팅 당시의 검토·예정 사항입니다.' },
      ],
      tools: [{ title: 'Unity', description: '기존 프로젝트 해석, 풍환경 시각화 UI 제작·변환과 장면 구성' }, { title: 'Visual Studio Code · C#', description: '스크립트 해석 및 건물 머터리얼 색상 변경 로직 작성' }, { title: 'VWL · PyTorch · IPC', description: '미팅에서 검토한 추론·데이터 전달·UI 렌더링 구조와 메모리 관리 대상' }],
      takeaway: '화면에 분석 결과를 보여주는 작업과 함께, 추론·데이터 전달·렌더링을 구분해 문제를 파악하는 과정을 경험했습니다. 매주 미팅으로 진행 상황과 기술 이슈를 정리하며 Unity UI와 시각화 작업을 진행했습니다.',
    },
    en: {
      title: 'AICFD Model Production Work', tagline: 'A Unity visualization project for inspecting wind-environment data.',
      summary: 'An employment project at Englink involving interpretation of an existing Unity project, analysis UI creation and conversion, and building material color control. Weekly meetings supported technical review and UI and visualization work.',
      tags: ['Unity', 'C#', 'Visual Studio Code', 'Wind visualization', 'Project · Employment'],
      facts: [{ label: 'Period', value: '2026.03.02 — 2026.06.22' }, { label: 'Organization', value: 'Englink · Employment' }, { label: 'Contribution', value: 'Unity project analysis · UI · C# color control' }, { label: 'Project', value: 'AICFD Unity project' }],
      about: [
        { title: 'Visualizing wind speed and pressure around buildings', description: 'AICFD uses buildings and contour images to inspect wind speed and pressure. Its workflow also supports automated wind-environment reports and CSV node-data downloads.' },
        { title: 'Weekly reviews and Unity production', description: 'Shared progress, execution bottlenecks, data transfer, and memory issues in weekly meetings. Interpreted the existing Unity project and created and revised its UI and building color control.' },
      ],
      responsibilities: ['Interpreted existing Unity files and C# scripts to understand UI and visualization connections.', 'Created and converted wind-analysis UI and revised screen layouts in Unity.', 'Wrote building material color-control scripts in C# using Visual Studio Code and applied them in Unity.', 'Shared progress and issues in weekly meetings and discussed inference, data transfer, rendering, and memory management.', 'Created and revised Unity UI and visualization features based on meeting reviews.'],
      solutionsTitle: 'Weekly meetings & technical review',
      solutions: [
        { title: 'Identify contour-generation bottlenecks', description: 'The April 21 meeting distinguished the older version from the distance-mask-generating version. Identified distance-mask generation as a bottleneck on ordinary CPUs and recorded PNG/JPG comparisons and optimization as follow-up review items.' },
        { title: 'Separate inference and UI memory', description: 'With IPC reducing disk I/O, separated model and inference memory from accumulated UI contour images. Discussed a single inference lock and a latest-N-image policy with overwrite or release as proposed management approaches.' },
        { title: 'Review update intervals and display-data costs', description: 'Reviewed inference-dependent update intervals and VRAM for inference, model parameters, and rendering. RGB conversion and BC1/DXT1 compression remained review items, without presenting estimated savings as measured or completed results.' },
      ],
      tools: [{ title: 'Unity', description: 'Existing project analysis, visualization UI creation and conversion, and scene assembly' }, { title: 'Visual Studio Code · C#', description: 'Script analysis and building material color-control implementation' }, { title: 'VWL · PyTorch · IPC', description: 'Inference, data transfer, rendering, and memory architecture reviewed during meetings' }],
      takeaway: 'Learned to distinguish inference, data transfer, and rendering while presenting analysis results. Weekly reviews connected technical issue tracking with Unity UI and visualization work.',
    },
  },
};

export const nasalSlicerProject: GameProject = {
  slug: 'englink-nasal-slicer', activityId: 'englink-nasal-slicer', event: '(주)엔글링크', layout: 'case-study',
  context: { ko: '프로젝트 · 근로 · 작업 진행 중 / 자료 준비 중', en: 'Project · Employment · Work ongoing / Materials in preparation' },
  screenshots: [],
  copy: {
    ko: {
      title: '의료용 비강 3D Slicer 작업', tagline: '3D Slicer를 활용한 의료용 비강 작업 · 진행 중.',
      summary: '2026년 9월부터 (주)엔글링크 근로 프로젝트로 의료용 비강 관련 3D Slicer 작업을 진행하고 있습니다. 세부 제작 과정과 포트폴리오 자료는 준비 중입니다.',
      tags: ['3D Slicer', '의료용 비강', '프로젝트 · 근로', '진행 중'],
      facts: [{ label: '기간', value: '2026.09.03 — 진행 중' }, { label: '소속', value: '(주)엔글링크 · 근로' }, { label: '도구', value: '3D Slicer' }, { label: '상태', value: '작업 진행 중 · 자료 준비 중' }],
      about: [{ title: '의료용 비강 관련 3D Slicer 작업', description: '3D Slicer를 활용한 작업을 진행하고 있습니다. 현재는 작업 및 자료 준비 단계로, 구체적인 제작 내용과 이미지는 준비 후 추가할 예정입니다.' }],
      responsibilities: ['(주)엔글링크 근로 프로젝트에서 의료용 비강 관련 3D Slicer 작업 진행'], solutions: [], tools: [{ title: '3D Slicer', description: '의료용 비강 관련 작업 · 진행 중' }], takeaway: '',
    },
    en: {
      title: 'Nasal Anatomy Work with 3D Slicer', tagline: 'Medical nasal anatomy work in 3D Slicer · Ongoing.',
      summary: 'An ongoing employment project at Englink since September 2026, working with medical nasal anatomy in 3D Slicer. Production details and portfolio materials are in preparation.',
      tags: ['3D Slicer', 'Nasal anatomy', 'Project · Employment', 'Ongoing'],
      facts: [{ label: 'Period', value: '2026.09.03 — Present' }, { label: 'Organization', value: 'Englink · Employment' }, { label: 'Tool', value: '3D Slicer' }, { label: 'Status', value: 'Work ongoing · Materials in preparation' }],
      about: [{ title: 'Medical nasal anatomy work in 3D Slicer', description: 'Work and portfolio preparation are ongoing. Specific production details and images will be added when ready.' }],
      responsibilities: ['Working on medical nasal anatomy in 3D Slicer as part of an employment project at Englink.'], solutions: [], tools: [{ title: '3D Slicer', description: 'Ongoing medical nasal anatomy work' }], takeaway: '',
    },
  },
};
