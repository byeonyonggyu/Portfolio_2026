# Real-time VFX Portfolio

React + TypeScript + Vite, Tailwind CSS, React Router로 만든 정적 포트폴리오입니다. 서버나 데이터베이스 없이 콘텐츠 파일만 편집합니다. 기존 `Asset/_OON0566.JPG`는 수정하지 않았으며 개인정보 및 대용량 원본의 실수 업로드를 막기 위해 `Asset/`은 Git에서 제외합니다.

## 실행

Node.js 22.12 이상(또는 20.19 이상), pnpm을 사용합니다.

```sh
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm preview
```

개발 주소는 터미널에 표시됩니다. `dist/`가 배포 결과물입니다. npm 사용 시 `npm install`, `npm run dev`, `npm run build`도 가능합니다. 패키지 관리자를 변경할 때 기존 잠금 파일을 정리하고 하나만 유지하세요.

## VS Code의 Go Live 사용

Go Live는 TypeScript/TSX 변환을 하지 않으므로 프로젝트 루트의 원본 HTML을 그대로 제공하면 앱이 실행되지 않습니다. 이 프로젝트의 VS Code 설정은 서버 루트를 빌드 결과물인 `.preview-live/`로 지정하고, 상세 URL 새로고침을 위해 `index.html`로 fallback하도록 설정합니다.

1. VS Code에서 `E:/Portfolio` 폴더 자체를 엽니다.
2. 최초 또는 소스 수정 후 `pnpm build:live`를 실행합니다. 현재 작업에서는 이 빌드 파일을 생성해 두었습니다.
3. 이미 Go Live가 실행 중이면 상태 표시줄의 포트를 눌러 중지한 뒤 **Go Live**를 다시 누릅니다. 기존 탭도 새로고침하세요.
4. 계속 편집할 때는 **Ctrl+Shift+B**로 **Go Live: 변경 사항 자동 빌드** 작업을 실행해 둡니다. 또는 `pnpm watch:live`를 실행합니다. 데이터/코드/CSS 변경 시 다시 빌드되고 Live Server가 새로고침합니다.

개발 중에는 `pnpm dev`가 즉시 반영과 오류 안내를 제공하므로 권장합니다. Go Live는 정적 빌드 확인용으로 지원합니다. `.preview-live/`는 생성물이므로 Git에 넣지 않으며 새 환경에서는 먼저 빌드해야 합니다. Vercel 배포는 기존 `pnpm build` 및 `dist` 설정을 그대로 사용합니다.

## 페이지와 데이터 모델

| 경로 | 역할 |
| --- | --- |
| `/` | 프로필, 활동 요약 14개, 대표 작품 영상 4개, 역량, 소개와 연락처 |
| `/works` | 엔진과 이펙트 유형을 동시에 적용하는 작품 필터 |
| `/works/:slug` | 영상, 기간, 도구, 역할, 기획, 과정, 비교, 문제 해결, 성능, 크레딧 |
| `/timeline` | 최신순 활동, 연도와 분류 필터 (여러 해 활동은 겹치는 연도에 포함) |
| 그 외 | 404 안내 (정적 SPA 특성상 HTTP 응답 코드는 200) |

- `src/types.ts`: Profile, Project, Activity, Media 타입.
- `src/data/profile.ts`: 이름, 소개, 도구, 역량, 이메일, 이력서, 소셜 링크, 쇼릴.
- `src/data/projects.ts`: 작품 전체. `featured: true`는 메인에 최대 5개 노출. `slug`는 중복 없이 영문/숫자/하이픈 사용.
- `src/data/activities.ts`: 프로젝트, 교육, 스터디. 메인에는 최신 활동을 최대 3개 노출합니다. `featured: true`는 주요 활동으로 표시합니다. `projectSlug`는 작품 slug와 일치시킵니다.
- 날짜는 `YYYY-MM` 또는 `YYYY-MM-DD` 형식. `endDate`/`dates.end` 생략 시 진행 중으로 표시합니다.
- 선택 항목은 빈 문자열 대신 생략하거나 빈 배열로 두어도 됩니다. 이메일/이력서/소셜 주소가 비면 버튼을 숨깁니다. 상세의 기획 의도, 비교, 문제 해결, 성능, 크레딧도 값이 있을 때만 노출합니다.
- 샘플 안내를 해제하려면 실제 콘텐츠를 입력한 후 `sample: false`로 바꾸세요. 홈/목록/타임라인의 샘플 안내는 해당 데이터에 샘플 항목이 하나라도 있을 때만 표시됩니다.

## 이미지와 영상 교체

웹 최적화 이미지(WebP/AVIF 권장)를 `public/images/`에 두고 `thumbnail: '/images/my-effect.webp'`처럼 지정합니다. 이미지가 없으면 교체 위치를 보여주는 도식이 표시됩니다. 16:10 썸네일, 16:9 영상 포스터를 권장합니다. 이미지에는 크기 및 지연 로딩이 지정되어 있습니다. 기존 사진은 개인 확인 없이 자동으로 공개하지 않습니다.

```ts
// profile.ts 안의 showreel, 또는 projects.ts 안의 video
showreel: {
  kind: 'youtube', // 'vimeo' | 'file'
  src: 'https://www.youtube.com/watch?v=실제11자리ID',
  poster: '/images/showreel.webp',
  label: '이름 — VFX Showreel',
},
```

YouTube 일반/watch, youtu.be, shorts/embed 주소 및 Vimeo 숫자 영상 주소를 지원합니다. 공개/임베드 허용 여부는 영상 서비스에서 확인하세요. 외부 iframe은 클릭 이후에만 생성됩니다. 파일 영상은 웹용 URL과 `kind: 'file'`을 지정하세요. 한 페이지에는 플레이어가 하나만 있으며, 목록에서는 재생하지 않습니다. 이력서는 `public/resume.pdf`에 저장한 뒤 `resume: '/resume.pdf'`로 설정합니다.

대용량 원본 영상, 엔진 프로젝트, 비공개 에셋은 저장소에 넣지 마세요. 완성 영상은 외부 영상 서비스/CDN을 사용하세요. 유효한 미디어 주소를 입력한 뒤 실제 재생/모바일 동작을 확인해야 합니다. 현재 실제 영상은 제공되지 않았습니다.

## GitHub 저장

GitHub에서 빈 저장소를 만든 후 프로젝트 폴더에서 실행합니다. 원본 에셋이나 개인정보가 포함되지 않았는지 먼저 확인하세요.

```sh
git init
git add .
git commit -m "Build real-time VFX portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

`node_modules`, `dist`, 원본 `Asset`, 환경 변수는 제외됩니다. 이 작업에서는 원격 저장소 생성이나 업로드를 수행하지 않습니다.

## Vercel 배포와 개인 도메인

1. Vercel에 로그인하고 **Add New → Project**에서 GitHub 저장소를 가져옵니다.
2. Framework는 **Vite**, Build Command는 `pnpm build`, Output Directory는 `dist`로 설정합니다. 환경 변수는 필요 없습니다.
3. Deploy 후 `/works/arcane-impact`를 새 탭에서 직접 열고 새로고침합니다. `vercel.json`의 rewrite가 SPA 라우팅을 지원합니다. 존재하지 않는 경로는 앱의 404 화면을 표시합니다.
4. 이후 GitHub 기본 브랜치에 push하면 자동 배포됩니다.
5. 개인 도메인은 Vercel 프로젝트 **Settings → Domains**에서 추가합니다. 도메인 업체의 DNS에 Vercel 화면이 안내하는 레코드를 등록하고 소유 확인과 HTTPS 발급을 기다립니다. 루트 및 www 중 기본 도메인을 선택하세요. 도메인은 코드 변경 없이 연결할 수 있습니다.

배포 화면과 DNS 값은 변경될 수 있으므로 배포 시 실제 대시보드 안내를 따르세요. 현재 Vercel 계정 연결/배포는 수행하지 않았습니다.

## 공개 전 교체 체크리스트

- [ ] `[이름]`, `[한 줄 소개]`, 소개 문장, 실제 사용 도구와 역량
- [ ] 이메일, ArtStation, GitHub, 이력서 (미입력 항목은 숨김)
- [ ] 대표 작품 영상 4개 실제 재생과 에셋 공개 권한 확인 (쇼릴은 사용하지 않음)
- [ ] 작품 4개: 실제 제목, 제작 기간, 담당 범위 상세, 기획/과정/비교/문제/성능/에셋 크레딧 추가 (미확인 정보는 숨김)
- [ ] 모든 썸네일, 브레이크다운, 초안/최종 이미지
- [ ] 본인 제공 활동 이력 14개의 날짜·내용 확인 및 필요한 관련 작품 연결
- [ ] `sample` 플래그 및 샘플 안내 문구, 홈페이지 영문 슬로건 등 개인화
- [ ] 에셋 출처, 공개 권한, 라이선스, 개인 정보 검토
- [ ] `index.html`의 설명, 필요 시 공유용 OG 이미지와 도메인 메타 태그
- [ ] 모바일/태블릿/데스크톱, 키보드 Tab/Enter, 모션 감소, 실제 영상, 링크, 404 확인

확인되지 않은 경력, 수상, 숙련도, 성능 수치는 포함하지 않았습니다. 작품의 예시 날짜와 도구는 샘플이며, 활동 이력 14개는 본인이 제공한 내용입니다.

### 활동 날짜 입력

고등학교 졸업처럼 시작일이 제공되지 않은 이력은 `startDate`를 생략하고 `endDate`만 입력합니다. 이 경우 `~ 종료일`로 표시하며 해당 종료 연도 필터에 포함됩니다. 종료일이 없는 활동은 진행 중으로 표시합니다. 학력·교내활동·수상·행사 분류도 지원합니다.

## 실제 작품 영상과 제작 도구

쇼릴 섹션은 제거했습니다. `src/data/projects.ts`의 Portfolio 01–04는 `Asset/01_Portfolio.mp4`부터 `04_Portfolio.mp4`까지의 실제 영상입니다. `public/videos/`에는 브라우저용 H.264 MP4 사본만 넣었습니다. 원본 Asset 폴더는 보존하고 Git에서 제외합니다. 웹 영상 사본은 총 약 58MB로 GitHub/Vercel 정적 배포에 포함할 수 있습니다. 클릭 전에는 영상 다운로드를 시작하지 않습니다.

썸네일은 각각 5.00초, 11.33초, 6.42초, 0.55초 장면에서 추출하여 `public/images/portfolio-01.webp`부터 저장했습니다. 제목은 제공된 파일 번호를 유지했습니다. 제작 기간과 미제공 과정/출처를 임의로 만들지 않았습니다.

제작 엔진 및 방식: Unity / Particle System. 사용 도구: Unity, Photoshop, 3ds Max, After Effects. 로고 매핑은 `src/data/tools.ts`, 원본 SVG와 출처/라이선스는 `public/tools/`에서 관리합니다.

메인의 활동 요약은 `CompactActivities`, 전체 활동 페이지는 기존 `ActivityList`를 사용해 UI를 독립적으로 유지합니다.

01번 영상은 교체된 1080p/30fps 원본의 비디오·오디오 스트림을 재압축 없이 복사하고 faststart만 적용했습니다. 영상과 썸네일 URL에 파일 해시 버전값을 사용하여 이전 파일 캐시를 방지합니다. 활동에는 꿈장학(2019.03.02–2022.02.28), 대학희망장학(2022.02.28–진행 중) 장학생 이력을 추가했습니다.

## GitHub Pages 배포 (Portfolio_2026)

현재 저장소의 공개 주소는 https://byeonyonggyu.github.io/Portfolio_2026/ 입니다. GitHub Pages는 Vite 원본 TSX를 변환하지 않으므로 main 브랜치 루트를 그대로 공개하면 흰 화면이 발생합니다.

1. 변경 파일을 commit/push합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 변경합니다. Deploy from a branch를 사용하지 마세요.
3. **Actions → Deploy portfolio to GitHub Pages**의 실행 결과를 확인합니다. 필요하면 **Run workflow**를 눌러 main에서 실행합니다.
4. 성공 후 공개 주소를 강력 새로고침(Ctrl+Shift+R)합니다. 이후 main push마다 자동 빌드/배포됩니다.

워크플로는 Node 24, pnpm 11.25.0 및 잠금 파일로 의존성을 설치하고 `pnpm build:pages`로 `.pages-build/`를 생성합니다. Vite base 및 BrowserRouter basename은 `/Portfolio_2026/`로 설정되며, 이미지·영상·로고도 이 경로를 따릅니다. 작품 목록, 타임라인, 각 작품 상세에 실제 index.html을 생성해 직접 접근/새로고침을 지원합니다. 알 수 없는 경로에는 404.html에서 앱의 404 화면을 표시합니다.

로컬 `pnpm dev`, Go Live 빌드 및 Vercel 빌드는 `/` 경로를 유지합니다. 향후 저장소 이름을 바꾸거나 GitHub Pages에 개인 도메인을 연결하면 `vite.config.ts`의 github-pages base도 그 주소에 맞게 변경하세요. 개인 도메인 루트에서는 `/`입니다.

## 프로젝트·수상 섹션과 언어 전환

메인의 프로젝트 카드는 `src/data/activities.ts`에서 `category: 프로젝트`인 항목을, 수상 카드는 `category: 수상`인 항목을 최신순으로 자동 표시합니다. 기존 행사 3건은 프로젝트로 분류했습니다. 카드의 상세 이력 링크는 해당 분류가 선택된 타임라인을 엽니다. 이미지/링크가 제공되지 않은 프로젝트는 내용을 임의로 만들지 않고 텍스트 카드로 표시합니다.

상단의 한국어 / English 버튼은 모든 페이지에 적용되며 현재 경로와 필터를 유지합니다. 언어는 localStorage의 `portfolio-language`에 저장됩니다. 브라우저 저장소가 제한된 경우에도 전환 자체는 동작합니다. HTML lang과 문서 제목도 함께 변경됩니다.

UI 번역은 `src/i18n.tsx`, 활동·작품·프로필의 영어 콘텐츠는 `src/data/english.ts`에서 관리합니다. 활동은 id, 작품은 id를 기준으로 원본에 번역을 덮어씌우므로 날짜, 미디어, 연결 주소는 공유합니다. 기관/교육/상 이름은 한국어 원문을 설명하는 영어 번역이며 공식 영문 명칭 확인 시 수정할 수 있습니다. 새 활동/작품을 추가할 때 영어 번역도 함께 작성하세요.

## PROGRESS 프로젝트 상세

`/projects/progress-at-play-2026`에서 임계점의 거실 프로젝트를 소개합니다. 메인 프로젝트 카드 및 전체 활동의 PROGRESS 항목에서 연결됩니다. 게임 소개, 담당 작업, 문제 해결 3건, 사용 기술 및 제작 방식, 배운 점으로 내용을 축약했습니다. 녹화·홍보 자료 제작 과정은 제외했습니다.

콘텐츠와 한국어/영어 번역은 `src/data/gameProjects.ts`, 화면은 `src/GameProjectPage.tsx`에서 관리합니다. 원본 이미지는 `Asset/Projects/PROGRESS/`에 보존하고 웹용 이미지와 작은 썸네일은 `public/images/progress/`에 저장했습니다. 이미지 5장의 원본은 약 5.7MB, 웹용 본문/썸네일 합계는 약 1.1MB입니다.

갤러리는 썸네일 클릭, 좌우 방향키, Home/End, 이전/다음 버튼을 지원합니다. 큰 이미지에서 확대 보기를 열고 닫기 버튼 또는 Esc로 닫을 수 있습니다. 제공되지 않은 다운로드 파일·출시일·리뷰·평가는 표시하지 않습니다. 게임의 AI 개발 보조와 생성형 이미지/음원 활용은 사용 기술에 명시했습니다. GitHub Pages 빌드 시 프로젝트 상세 경로에도 index.html을 생성합니다.

## Portfolio 02 셰이더·텍스처 브레이크다운

02번 상세(`/works/portfolio-02`)에 Photoshop 텍스처 2종과 Amplify Shader Editor 그래프 2종을 추가했습니다. 원본은 `Asset/SelectedWork/02_Portfolio/`, 공개용 이미지는 `public/images/portfolio-02/`에 보존했습니다. 무손실 WebP 변환으로 원본 픽셀과 투명도를 유지하며, 그래프는 확대 창에서 원본 크기로 스크롤해 확인할 수 있습니다.

텍스트는 `src/data/projects.ts`의 02번, 영문은 `src/data/english.ts`의 02번에서 수정합니다. `breakdown.kind`가 `texture`면 형태 비교용 카드, `shader`면 넓은 그래프 레이아웃을 사용합니다. 각 단계의 `notes`는 설명 목록입니다. 이미지 확대 UI는 `src/WorkBreakdown.tsx`에서 관리합니다. 그래프에서 확인되는 UV/Panner·노이즈·마스크·Vertex Color·Fresnel·Vertex Offset 구성을 설명했으며 미측정 성능 수치는 추가하지 않았습니다.

## 01·03·04 제작 자료 및 시퀀스 연출

01번은 텍스처 3종/셰이더 4종, 03번은 텍스처 3종/셰이더 3종, 04번은 텍스처 3종/셰이더 2종을 추가했습니다. 원본은 `Asset/SelectedWork/작품번호_Portfolio/`, 무손실 공개 이미지는 `public/images/portfolio-작품번호/`에 있습니다. 이미지의 실제 width/height를 데이터에 저장해 레이아웃 비율을 유지합니다.

네 작품 모두 `production` 데이터로 Timeline 기반 애니메이션/이펙트 시퀀스, 카메라 무빙, 카메라 색상 조절로 구현한 임팩트 프레임을 표시합니다. 사용자가 확인한 구현 경험을 기술했으며 특정 후처리 패키지·Volume·Cinemachine·API는 확인되지 않아 명시하지 않았습니다. 메인 주요 역량도 동일한 실제 경험으로 교체했습니다. 한국어는 `projects.ts`/`profile.ts`, 영어는 `english.ts`에서 관리합니다.

## AI:VERSE 페스티벌 — AI 인법 배틀

`/projects/aiverse-festival`에 AI 인법 배틀 상세를 추가했습니다. 원본 이미지 8장은 `Asset/Projects/AIVERSE_Festival/`, 본문용/썸네일 WebP는 `public/images/aiverse/`에 있습니다. 한영 소개, 담당 작업, 문제 해결, 기술, 배운 점은 `src/data/aiverseProject.ts`에서 관리하며 `gameProjects.ts`에 연결됩니다.

진행 상태는 진행 중으로 표시하고 기존 종료일은 제거했습니다. .exe 배포파일 제작, 페스티벌 발표와 부스 운영 예정 상태를 구분해 기재했습니다. 담당 작업에는 Unity–MCP 연결 제작 환경, Amplify Shader Editor 셰이더 제작, Particle System 공격 이펙트 제작을 포함했습니다. 프로젝트별 context 필드로 AI 페스티벌에 PROGRESS의 GAME 부문 참가 문구가 잘못 표시되지 않도록 했습니다. 썸네일이 5장을 넘으면 좌우 스크롤 목록을 사용합니다.

## 박물관 협업 — 박물관의 황혼: 여월의 밤

`/projects/bucheon-museum-game`에 카드 기반 턴제 RPG 프로젝트 상세를 추가했습니다. 메인에는 부천시립박물관 협업 턴제 RPG 제작 카드와 짧은 설명을 표시하고, 타임라인에서도 상세 페이지로 연결됩니다.

한국어/영어 본문은 `src/data/museumProject.ts`, 연결은 `src/data/gameProjects.ts`에서 관리합니다. 원본 스크린샷 8장은 `Asset/Projects/Bucheon_CityMuseum/`, 웹용 이미지/썸네일은 `public/images/museum/`에 있습니다. 소개 3개 항목, 담당 작업 6개 항목, 문제 해결 4건과 기술·배운 점으로 제공 내용을 정리했습니다. 미제공 다운로드·출시일·성과 수치는 추가하지 않았습니다.


### U&I 발표 및 수상 사진
- U&I 소개·담당 작업: `src/data/uiProject.ts` (한글 기획안 기반, 제안 기능과 실제 제작 구분).
- 발표 사진은 새로 제공한 02를 대표 이미지로 사용하며 01·02 사진을 추가 자르기 없이 표시합니다. 캐릭터 제작 아래에 01 발표 참여, 02 발표 진행 기록을 배치했습니다.
- 수상 사진: `src/data/activities.ts`의 `awardImage`, 배포 이미지: `public/images/awards/`.
- U&I 제작 도구는 사용자 확인 내용을 반영했습니다: Maya 캐릭터 제작, Photoshop 텍스처 직접 드로잉.


### TeamManyStar 및 이미지 확대
- TeamManyStar 소개·담당 작업·완성 장면·셰이더 브레이크다운: `src/data/teamManyStarProject.ts`.
- TeamManyStar와 U&I는 `layout: 'case-study'`로 큰 갤러리, 프로젝트 정보, 담당 작업, 제작 과정을 함께 표시합니다.
- 첫 이미지: `initialImage`, 카드의 대표 사진: `screenshots[0]`.
- 수상 사진은 클릭/Enter로 확대하고 닫기 버튼·Esc·배경 클릭으로 닫을 수 있습니다.
