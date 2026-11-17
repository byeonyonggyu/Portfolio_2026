import type { Project } from '../types';

export const projects: Project[] = [
  {
    "id": "01",
    "slug": "portfolio-01",
    "title": "Portfolio 01",
    "summary": "붉은 문양과 마법진, 빛기둥이 이어지는 스킬 이펙트.",
    "engine": "Unity",
    "effectType": "스킬",
    "tools": [
      "Unity",
      "Unity Timeline",
      "Amplify Shader Editor",
      "Photoshop",
      "3ds Max",
      "After Effects"
    ],
    "tags": [
      "Particle System",
      "Amplify Shader Editor",
      "Timeline",
      "Impact Frame"
    ],
    "thumbnail": "/images/portfolio-01.webp?v=7251f6fe965e",
    "video": {
      "kind": "file",
      "src": "/videos/01_Portfolio.mp4?v=fcceb04c75df",
      "poster": "/images/portfolio-01.webp?v=7251f6fe965e",
      "label": "Portfolio 01 완성 영상"
    },
    "role": "Unity Particle System으로 이펙트 제작 · Amplify Shader Editor로 셰이더 제작 · Photoshop으로 텍스처 제작 · Unity Timeline으로 애니메이션·카메라 무빙 제어 및 카메라 색상 조절 임팩트 프레임 구현",
    "featured": true,
    "breakdown": [
      {
        "image": "/images/portfolio-01/texture-projectile.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "투사체 텍스처 · FXT_Projectile",
        "description": "밝은 선두부와 뒤로 흐르는 꼬리를 가진 흑백 텍스처입니다. 외곽의 흔들리는 명암으로 에너지가 뭉치고 풀리는 형태를 만들었습니다.",
        "notes": [
          "밝기 대비로 진행 방향과 중심부를 구분",
          "형태와 색상을 분리해 셰이더·파티클에서 색상 제어"
        ]
      },
      {
        "image": "/images/portfolio-01/texture-impact-frame.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "타격 강조 텍스처 · FXT_Star_ImpactFrame",
        "description": "네 방향으로 길게 뻗는 별 형태의 텍스처입니다. 짧은 타격 순간의 시각적 강조에 사용하는 선명한 실루엣을 구성했습니다.",
        "notes": [
          "밝은 중심과 가늘게 뻗는 끝부분의 대비",
          "카메라 색상 조절로 구현한 화면 임팩트 연출과 함께 소개"
        ]
      },
      {
        "image": "/images/portfolio-01/texture-submagic.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "마법진 텍스처 · SubMagic",
        "description": "원형 테두리, 기호와 중앙 문양을 배치한 마법진 텍스처입니다. 여러 겹의 선과 원형 구조로 스킬의 중심 영역을 구성했습니다.",
        "notes": [
          "흑백으로 정리한 원형·문양 레이어",
          "외곽 테두리와 중앙 문양의 밀도 차이로 형태 구분"
        ]
      },
      {
        "image": "/images/portfolio-01/shader-projectile.webp",
        "width": 1915,
        "height": 1007,
        "kind": "shader",
        "title": "투사체 셰이더 · FX_Projectile",
        "description": "노멀 텍스처를 이동시켜 메인 UV를 왜곡하고, 두 색상의 보간으로 투사체의 색 흐름을 구성했습니다. 파티클 색상과 알파를 출력에 연결했습니다.",
        "notes": [
          "Panner → Normal → RG 채널 → Distortion → 메인 UV",
          "UV 기반 Lerp 색상과 메인 텍스처를 조합하고 Vertex Color·Alpha로 제어"
        ]
      },
      {
        "image": "/images/portfolio-01/shader-beam.webp",
        "width": 1912,
        "height": 1006,
        "kind": "shader",
        "title": "빛기둥 셰이더 · FX_Beam",
        "description": "이동하는 노이즈의 발광과 Fresnel 기반 가장자리 발광을 더해 빛기둥을 구성했습니다. 마스크와 불투명도 분기는 발광과 별도로 조절합니다.",
        "notes": [
          "Panner·Power·Intensity로 노이즈 발광 조절",
          "Fresnel 발광을 Add로 합성하고 마스크·Vertex Color Alpha로 불투명도 제어"
        ]
      },
      {
        "image": "/images/portfolio-01/shader-shockwave.webp",
        "width": 1912,
        "height": 1007,
        "kind": "shader",
        "title": "충격파 셰이더 · ShockWave_Alp_15",
        "description": "노이즈의 UV 흐름과 그라데이션 마스크를 조합한 충격파용 셰이더입니다. 발광 강도와 외곽의 소멸을 서로 다른 분기로 제어합니다.",
        "notes": [
          "이동 노이즈 → Power·Intensity → Vertex Color → Emission",
          "노이즈·마스크·Opacity → Saturate → Vertex Alpha → Opacity"
        ]
      },
      {
        "image": "/images/portfolio-01/shader-model.webp",
        "width": 1915,
        "height": 1007,
        "kind": "shader",
        "title": "모델 표면 셰이더 · FX_Model",
        "description": "모델 표면의 기본 색과 발광, Fresnel 테두리를 구성한 그래프입니다. 노이즈와 디졸브 값을 이용한 불투명도 조절을 함께 연결했습니다.",
        "notes": [
          "World Normal·View Direction 입력을 활용한 텍스처 샘플링",
          "Fresnel 색상과 발광 합성, 노이즈 기반 디졸브·Opacity 제어"
        ]
      }
    ],
    "credits": [
      {
        "label": "제작 자료: 작품별 텍스처 및 Amplify Shader Editor 그래프"
      },
      {
        "label": "시퀀스·카메라 연출: Unity Timeline / 임팩트 프레임: 카메라 색상 조절"
      }
    ],
    "production": [
      {
        "title": "Timeline 기반 시퀀스 제어",
        "description": "Unity Timeline으로 캐릭터 애니메이션과 이펙트의 재생 타이밍을 배치하고 조정했습니다. 동작의 준비, 발동, 타격, 잔상이 하나의 연출 흐름으로 이어지도록 구현했습니다."
      },
      {
        "title": "카메라 무빙 구현",
        "description": "카메라 무빙도 Timeline에서 제어했습니다. 캐릭터의 동작과 이펙트 전개에 맞춰 카메라 움직임의 시점을 조정해 완성 영상의 시퀀스를 구성했습니다."
      },
      {
        "title": "색상 조절 기반 임팩트 프레임",
        "description": "타격 순간 카메라의 색상을 조절해 화면의 명암과 색 대비를 전환하는 임팩트 프레임을 구현했습니다. 애니메이션·카메라 무빙·이펙트 타이밍과 맞물려 타격 지점을 강조하도록 연출했습니다."
      }
    ],
    "intent": "마법진, 투사체, 빛기둥과 충격파를 조합한 스킬 이펙트입니다. 형태 텍스처와 발광·왜곡·디졸브 셰이더를 구분하고, Timeline에서 애니메이션과 카메라 움직임을 함께 제어해 스킬의 전개와 타격 순간을 구성했습니다."
  },
  {
    "id": "02",
    "slug": "portfolio-02",
    "title": "Portfolio 02",
    "summary": "금빛 투사체와 회전형 에너지를 구현한 Unity Particle System 스킬 이펙트.",
    "engine": "Unity",
    "effectType": "스킬",
    "tools": [
      "Unity",
      "Unity Timeline",
      "Amplify Shader Editor",
      "Photoshop",
      "3ds Max",
      "After Effects"
    ],
    "tags": [
      "Particle System",
      "Amplify Shader Editor",
      "Timeline",
      "Impact Frame"
    ],
    "thumbnail": "/images/portfolio-02.webp",
    "video": {
      "kind": "file",
      "src": "/videos/02_Portfolio.mp4",
      "poster": "/images/portfolio-02.webp",
      "label": "Portfolio 02 완성 영상"
    },
    "role": "Unity Particle System으로 이펙트 제작 · Amplify Shader Editor로 셰이더 제작 · Photoshop으로 텍스처 제작 · Unity Timeline으로 애니메이션·카메라 무빙 제어 및 카메라 색상 조절 임팩트 프레임 구현",
    "featured": true,
    "breakdown": [
      {
        "title": "형태 텍스처 · Drity",
        "kind": "texture",
        "image": "/images/portfolio-02/texture-drity.webp",
        "description": "Photoshop에서 제작한 흑백 형태 텍스처입니다. 위로 갈라지는 날카로운 실루엣과 아래로 흐려지는 명암을 사용해 에너지의 방향성을 표현했습니다.",
        "notes": [
          "흑백 명암으로 형태를 정의하고, 색상은 머티리얼과 파티클에서 별도로 제어",
          "가장자리의 선명한 갈라짐과 부드러운 그라데이션을 대비"
        ]
      },
      {
        "title": "투사체 텍스처 · FXT_Projectile 1",
        "kind": "texture",
        "image": "/images/portfolio-02/texture-projectile.webp",
        "description": "Photoshop에서 제작한 투사체용 텍스처입니다. 밝고 조밀한 앞부분과 뒤로 퍼지는 꼬리를 대비시켜 발사체의 진행 방향을 읽을 수 있게 구성했습니다.",
        "notes": [
          "밝은 중심부와 여러 겹으로 갈라지는 꼬리 형태",
          "외곽으로 갈수록 흐려지는 명암으로 형태의 끝을 부드럽게 처리"
        ]
      },
      {
        "title": "임팩트 셰이더 · FX_Punch",
        "kind": "shader",
        "image": "/images/portfolio-02/amplify-punch.webp",
        "description": "Amplify Shader Editor로 구성한 임팩트용 그래프입니다. 텍스처의 형태에 UV 흐름과 왜곡을 더하고, 발광과 불투명도를 각각 조절하는 구조입니다.",
        "notes": [
          "Texture Coordinates → Panner → 노멀 텍스처 RG 채널 → Distortion 값으로 메인 UV 왜곡",
          "이동하는 노이즈와 메인 텍스처를 조합하고 Power·Intensity로 발광 형태 조절",
          "Vertex Color를 발광과 불투명도에 연결하고, 노이즈·마스크·Saturate·Power로 소멸 표현 구성",
          "Unlit · Transparent · Alpha Blend · Cull Off 설정"
        ]
      },
      {
        "title": "회전형 셰이더 · FX_Tonado",
        "kind": "shader",
        "image": "/images/portfolio-02/amplify-tornado.webp",
        "description": "UV 이동을 이용해 노이즈의 흐름을 만들고, 노이즈 값으로 두 색상을 보간한 회전형 에너지 셰이더입니다. 가장자리의 불투명도와 버텍스 변형을 함께 제어합니다.",
        "notes": [
          "UV의 축별 연산과 Panner로 노이즈 텍스처의 흐름 구성",
          "Noise → Lerp(Color A / B) → Vertex Color → Emission 연결",
          "Fresnel → One Minus와 노이즈를 조합해 불투명도 마스크를 만들고 Power·Saturate로 조절",
          "Vertex Normal과 강도 값을 Local Vertex Offset에 연결해 버텍스 변형 구성"
        ]
      }
    ],
    "credits": [
      {
        "label": "Photoshop 텍스처(Drity, FXT_Projectile 1): 직접 제작"
      },
      {
        "label": "셰이더 제작 도구: Amplify Shader Editor"
      }
    ],
    "intent": "금빛 투사체의 진행 방향과 회전형 에너지의 흐름이 드러나는 스킬 이펙트입니다. Photoshop에서 제작한 흑백 형태 텍스처를 바탕으로, 셰이더의 UV 이동·왜곡과 파티클의 색·투명도 제어를 조합해 형태와 움직임을 구성했습니다.",
    "production": [
      {
        "title": "Timeline 기반 시퀀스 제어",
        "description": "Unity Timeline으로 캐릭터 애니메이션과 이펙트의 재생 타이밍을 배치하고 조정했습니다. 동작의 준비, 발동, 타격, 잔상이 하나의 연출 흐름으로 이어지도록 구현했습니다."
      },
      {
        "title": "카메라 무빙 구현",
        "description": "카메라 무빙도 Timeline에서 제어했습니다. 캐릭터의 동작과 이펙트 전개에 맞춰 카메라 움직임의 시점을 조정해 완성 영상의 시퀀스를 구성했습니다."
      },
      {
        "title": "색상 조절 기반 임팩트 프레임",
        "description": "타격 순간 카메라의 색상을 조절해 화면의 명암과 색 대비를 전환하는 임팩트 프레임을 구현했습니다. 애니메이션·카메라 무빙·이펙트 타이밍과 맞물려 타격 지점을 강조하도록 연출했습니다."
      }
    ]
  },
  {
    "id": "03",
    "slug": "portfolio-03",
    "title": "Portfolio 03",
    "summary": "초록색 검기와 에너지 방출을 표현한 전투 이펙트.",
    "engine": "Unity",
    "effectType": "전투",
    "tools": [
      "Unity",
      "Unity Timeline",
      "Amplify Shader Editor",
      "Photoshop",
      "3ds Max",
      "After Effects"
    ],
    "tags": [
      "Particle System",
      "Amplify Shader Editor",
      "Timeline",
      "Impact Frame"
    ],
    "thumbnail": "/images/portfolio-03.webp",
    "video": {
      "kind": "file",
      "src": "/videos/03_Portfolio.mp4",
      "poster": "/images/portfolio-03.webp",
      "label": "Portfolio 03 완성 영상"
    },
    "role": "Unity Particle System으로 이펙트 제작 · Amplify Shader Editor로 셰이더 제작 · Photoshop으로 텍스처 제작 · Unity Timeline으로 애니메이션·카메라 무빙 제어 및 카메라 색상 조절 임팩트 프레임 구현",
    "featured": true,
    "breakdown": [
      {
        "image": "/images/portfolio-03/texture-crack.webp",
        "width": 1024,
        "height": 1024,
        "kind": "texture",
        "title": "균열 텍스처 · FXT_Crack_WLs",
        "description": "중심에서 바깥으로 뻗는 흑백 균열 형태입니다. 굵은 중심부와 가늘게 갈라지는 외곽을 대비시켜 타격이 퍼져 나가는 모양을 구성했습니다.",
        "notes": [
          "방사형 균열과 중심부의 밝기 대비",
          "균열 셰이더의 메인 형태로 연결"
        ]
      },
      {
        "image": "/images/portfolio-03/texture-shockwave.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "충격파 텍스처 · FXT_ShockWave_Wind",
        "description": "가로 방향으로 이어지는 가는 바람 결을 가진 텍스처입니다. 중앙의 밝은 흐름과 위아래로 갈라지는 선으로 에너지의 결을 표현했습니다.",
        "notes": [
          "가로 흐름을 유지하는 밝은 중심 띠",
          "가늘게 분리된 외곽으로 바람·충격파의 질감 표현"
        ]
      },
      {
        "image": "/images/portfolio-03/texture-slash.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "검기 텍스처 · FXT_Slash_07",
        "description": "밝은 덩어리와 길게 갈라지는 꼬리를 조합한 검기 형태입니다. 뾰족한 앞부분과 부드럽게 흐려지는 외곽으로 진행 방향을 표현했습니다.",
        "notes": [
          "큰 형태와 여러 갈래의 꼬리로 실루엣 구성",
          "흑백 명암을 기반으로 파티클·머티리얼에서 색상 조절"
        ]
      },
      {
        "image": "/images/portfolio-03/shader-buff.webp",
        "width": 1912,
        "height": 1005,
        "kind": "shader",
        "title": "에너지 발광 셰이더 · Buff_Add",
        "description": "이동 노이즈와 중심이 밝은 그라데이션을 조합한 발광 셰이더입니다. Particle Additive 블렌딩으로 에너지 레이어를 표현했습니다.",
        "notes": [
          "Panner·Power·Main Intensity·Vertex Color로 발광 제어",
          "노이즈와 그라데이션을 결합하고 Vertex Alpha로 불투명도 제어"
        ]
      },
      {
        "image": "/images/portfolio-03/shader-shockwave.webp",
        "width": 1912,
        "height": 1007,
        "kind": "shader",
        "title": "충격파 셰이더 · ShockWave_offset",
        "description": "노멀 텍스처의 RG 값을 이용해 충격파의 메인 UV를 흔드는 구조입니다. Vertex TexCoord 입력을 UV에 더해 흐름을 제어합니다.",
        "notes": [
          "Panner → 노멀 RG → Distortion → 메인 UV 합성",
          "Main Texture·Intensity·Vertex Color를 Emission에 연결하는 Additive 구성"
        ]
      },
      {
        "image": "/images/portfolio-03/shader-crack.webp",
        "width": 1912,
        "height": 1007,
        "kind": "shader",
        "title": "균열 셰이더 · FX_Crack",
        "description": "균열 텍스처에 시선 방향 기반 Parallax Offset을 적용한 그래프입니다. 노이즈와 Step 연산을 이용해 균열의 드러남과 소멸을 조절합니다.",
        "notes": [
          "View Direction → Parallax Offset → UV에 오프셋 추가",
          "균열 텍스처·발광색을 결합하고 노이즈·Dissolve·Step을 Opacity에 연결"
        ]
      }
    ],
    "credits": [
      {
        "label": "제작 자료: 작품별 텍스처 및 Amplify Shader Editor 그래프"
      },
      {
        "label": "시퀀스·카메라 연출: Unity Timeline / 임팩트 프레임: 카메라 색상 조절"
      }
    ],
    "production": [
      {
        "title": "Timeline 기반 시퀀스 제어",
        "description": "Unity Timeline으로 캐릭터 애니메이션과 이펙트의 재생 타이밍을 배치하고 조정했습니다. 동작의 준비, 발동, 타격, 잔상이 하나의 연출 흐름으로 이어지도록 구현했습니다."
      },
      {
        "title": "카메라 무빙 구현",
        "description": "카메라 무빙도 Timeline에서 제어했습니다. 캐릭터의 동작과 이펙트 전개에 맞춰 카메라 움직임의 시점을 조정해 완성 영상의 시퀀스를 구성했습니다."
      },
      {
        "title": "색상 조절 기반 임팩트 프레임",
        "description": "타격 순간 카메라의 색상을 조절해 화면의 명암과 색 대비를 전환하는 임팩트 프레임을 구현했습니다. 애니메이션·카메라 무빙·이펙트 타이밍과 맞물려 타격 지점을 강조하도록 연출했습니다."
      }
    ],
    "intent": "초록색 검기와 에너지 방출에 균열·충격파 레이어를 더한 전투 이펙트입니다. 진행 방향을 가진 형태와 방사형 균열을 대비시키고, Timeline의 동작·카메라 제어와 색상 조절 기반 임팩트 프레임으로 타격 시점을 강조했습니다."
  },
  {
    "id": "04",
    "slug": "portfolio-04",
    "title": "Portfolio 04",
    "summary": "붉은 궤적과 타격 장면을 표현한 근접 공격 이펙트.",
    "engine": "Unity",
    "effectType": "전투",
    "tools": [
      "Unity",
      "Unity Timeline",
      "Amplify Shader Editor",
      "Photoshop",
      "3ds Max",
      "After Effects"
    ],
    "tags": [
      "Particle System",
      "Amplify Shader Editor",
      "Timeline",
      "Impact Frame"
    ],
    "thumbnail": "/images/portfolio-04.webp",
    "video": {
      "kind": "file",
      "src": "/videos/04_Portfolio.mp4",
      "poster": "/images/portfolio-04.webp",
      "label": "Portfolio 04 완성 영상"
    },
    "role": "Unity Particle System으로 이펙트 제작 · Amplify Shader Editor로 셰이더 제작 · Photoshop으로 텍스처 제작 · Unity Timeline으로 애니메이션·카메라 무빙 제어 및 카메라 색상 조절 임팩트 프레임 구현",
    "featured": true,
    "breakdown": [
      {
        "image": "/images/portfolio-04/texture-line-pattern.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "선 패턴 텍스처 · FX_Line_Pattern_Tex",
        "description": "여러 방향으로 교차하는 선과 분절된 명암으로 구성한 텍스처입니다. 넓은 검기 형태 위에 더할 수 있는 가는 패턴 디테일을 제작했습니다.",
        "notes": [
          "직선과 끊어지는 밝기 변화로 날카로운 패턴 구성",
          "셰이더에서 형태 텍스처와 패턴 레이어를 분리해 조절"
        ]
      },
      {
        "image": "/images/portfolio-04/texture-light-slash.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "빛 검기 텍스처 · FXT_Light_Slash_01",
        "description": "밝은 검기 덩어리와 여러 방향으로 갈라지는 끝부분을 만든 텍스처입니다. 넓은 면과 가는 꼬리를 대비시켜 공격 궤적의 형태를 구성했습니다.",
        "notes": [
          "중심부의 큰 덩어리와 갈라지는 꼬리의 대비",
          "흐려지는 가장자리로 형태가 자연스럽게 사라지는 인상 구성"
        ]
      },
      {
        "image": "/images/portfolio-04/texture-slash-edge.webp",
        "width": 512,
        "height": 512,
        "kind": "texture",
        "title": "검기 마스크 · FXT_Slash_Edge",
        "description": "중앙과 상하 가장자리의 밝기가 다른 마스크 텍스처입니다. 검기 면의 불투명도를 구간별로 조절하는 용도로 구성했습니다.",
        "notes": [
          "UV 방향에 따른 그라데이션 형태",
          "메인 검기와 별도의 마스크를 곱해 외곽을 조절"
        ]
      },
      {
        "image": "/images/portfolio-04/shader-fire-slash.webp",
        "width": 1912,
        "height": 1005,
        "kind": "shader",
        "title": "화염 검기 셰이더 · FX_Fire_Slash",
        "description": "메인 형태에 노멀 기반 UV 왜곡을 적용하고, 두 색상을 보간한 화염 검기 셰이더입니다. 이동 노이즈와 디졸브 분기를 이용해 투명도를 조절합니다.",
        "notes": [
          "Panner·노멀 RG·Distortion으로 메인 UV 왜곡",
          "Color Lerp·Intensity·Vertex Color를 Emission에 연결",
          "이동 노이즈·Dissolve·Saturate·Vertex Alpha를 이용한 Opacity 제어"
        ]
      },
      {
        "image": "/images/portfolio-04/shader-slash.webp",
        "width": 1916,
        "height": 1006,
        "kind": "shader",
        "title": "검기 레이어 셰이더 · FX_Slash_Alp",
        "description": "선 패턴과 메인 검기 텍스처를 각각 조절해 합성한 그래프입니다. 별도의 가장자리 마스크와 이동 노이즈를 이용해 불투명도를 구성했습니다.",
        "notes": [
          "선 패턴 → Power·Intensity와 메인 색상 Lerp를 Add로 합성",
          "메인 텍스처·마스크·노이즈를 분리하고 Vertex TexCoord·Vertex Alpha로 제어"
        ]
      }
    ],
    "credits": [
      {
        "label": "제작 자료: 작품별 텍스처 및 Amplify Shader Editor 그래프"
      },
      {
        "label": "시퀀스·카메라 연출: Unity Timeline / 임팩트 프레임: 카메라 색상 조절"
      }
    ],
    "production": [
      {
        "title": "Timeline 기반 시퀀스 제어",
        "description": "Unity Timeline으로 캐릭터 애니메이션과 이펙트의 재생 타이밍을 배치하고 조정했습니다. 동작의 준비, 발동, 타격, 잔상이 하나의 연출 흐름으로 이어지도록 구현했습니다."
      },
      {
        "title": "카메라 무빙 구현",
        "description": "카메라 무빙도 Timeline에서 제어했습니다. 캐릭터의 동작과 이펙트 전개에 맞춰 카메라 움직임의 시점을 조정해 완성 영상의 시퀀스를 구성했습니다."
      },
      {
        "title": "색상 조절 기반 임팩트 프레임",
        "description": "타격 순간 카메라의 색상을 조절해 화면의 명암과 색 대비를 전환하는 임팩트 프레임을 구현했습니다. 애니메이션·카메라 무빙·이펙트 타이밍과 맞물려 타격 지점을 강조하도록 연출했습니다."
      }
    ],
    "intent": "붉은 화염 검기와 겹쳐지는 궤적으로 근접 공격의 흐름을 표현한 작업입니다. 큰 검기 면, 선 패턴과 가장자리 마스크를 구분해 제작하고, Timeline 기반 시퀀스와 카메라 색상 조절 임팩트 프레임으로 타격감을 구성했습니다."
  }
];
