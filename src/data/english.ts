import type { Activity, Profile, Project } from '../types';

// English descriptions are translations of the supplied Korean content.
// Organization names below are descriptive translations, not verified official names.
export const activityEnglish: Record<string, Partial<Activity>> = {
  'daesin-high-school': { title: 'Daejeon Daeshin High School — Graduation' },
  'catholic-university': { title: 'The Catholic University of Korea', description: 'Currently enrolled' },
  gadaesarang: { title: 'Gadaesarang, The Catholic University of Korea', role: 'Member', description: 'University development fund promotion club (institutional club)' },
  'samsung-essay-award': { title: 'Samsung Dream Scholarship Foundation Essay Contest', outcomes: ['Encouragement Award'] },
  'ui-festival-2023': { title: '2023 2nd U&I Festival — Participation', description: 'Presented cultural content created using AI' },
  'samsung-character-award': { title: 'Samsung Dream Scholarship Foundation Character Contest', outcomes: ['Encouragement Award'] },
  'sbs-vfx-course': { title: 'SBS Game Academy, Sinchon — VFX Course', outcomes: ['Course completed'] },
  'team-many-star': { title: 'TeamManyStar Indie Game Development Team', role: 'VFX team member' },
  'student-council-baekya': { title: 'Baekya, 34th Student Council, The Catholic University of Korea', role: 'Publicity & Design Department member' },
  'bucheon-museum-game': { title: 'Indie Game in Collaboration with Bucheon City Museum' },
  'progress-at-play-2026': { title: 'PROGRESS@PLAY 2026', description: 'The Boiling Living Room · Participated in the GAME category of the social impact digital art competition' },
  'aiverse-festival': { title: 'AI:VERSE Festival', description: 'Festival participation' },
  'samsung-dream-scholarship': { title: 'Samsung Dream Scholarship Foundation — Dream Scholarship Recipient' },
  'samsung-university-hope-scholarship': { title: 'Samsung Dream Scholarship Foundation — University Hope Scholarship Recipient' },
};
export const projectEnglish: Record<string, Partial<Project>> = {
  '01': { summary: 'A skill effect featuring red symbols, magic circles, and pillars of light.', role: 'VFX creation with the Unity Particle System' },
  '02': { summary: 'A skill effect featuring golden energy and a rotating sphere.', role: 'VFX creation with the Unity Particle System' },
  '03': { summary: 'A combat effect featuring green sword trails and an energy burst.', role: 'VFX creation with the Unity Particle System' },
  '04': { summary: 'A melee attack effect featuring red trails and impact moments.', role: 'VFX creation with the Unity Particle System' },
};
export const profileEnglish: Partial<Profile> = {
  name: '[Name]', introduction: '[One-line introduction]',
  about: 'Add your approach to creating VFX, areas of interest, and approach to collaboration here.',
  skills: [
    { title: 'Effect design', description: 'Sample · Communicating intent through shape, timing, and color. Replace with your actual experience.' },
    { title: 'Real-time production', description: 'Sample · Describe your particle and material production workflow inside the engine.' },
    { title: 'Technical approach', description: 'Sample · Describe how you analyze problems and balance performance with visual expression.' },
  ],
};
