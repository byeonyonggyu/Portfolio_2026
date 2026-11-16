import type { Profile } from '../types';
export const profile: Profile = {
  name: '[이름]', job: 'Real-time VFX Artist', introduction: '[한 줄 소개]',
  about: '이곳에 작업 철학, 관심 있는 이펙트 분야, 협업 방식을 작성해 주세요.',
  tools: ['Unity', 'Photoshop', '3ds Max', 'After Effects'], email: '', artstation: '', github: '', resume: '',
  skills: [
    { title: 'Effect design', description: '샘플 · 형태, 타이밍, 색으로 의도를 전달하는 이펙트 디자인. 실제 역량으로 교체해 주세요.' },
    { title: 'Real-time production', description: '샘플 · 엔진 안에서의 파티클 및 머티리얼 제작 과정을 소개해 주세요.' },
    { title: 'Technical approach', description: '샘플 · 문제를 분석하고 성능과 표현의 균형을 찾은 경험을 작성해 주세요.' },
  ],
};
