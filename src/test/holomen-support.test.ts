import { describe, expect, it } from 'vitest';
import { MICOMET_TIMELINE, isHolomenSupportStory } from '@/data/timeline';

function story(id: string) {
  const result = MICOMET_TIMELINE.find((item) => item.id === id);
  expect(result, `Missing fixture: ${id}`).toBeDefined();
  return result!;
}

describe('Holomen-only support category', () => {
  it('counts a hololive talent who reacts to miComet', () => {
    expect(story('c2-2025-104').holomenSupport).toBe(true);
    expect(story('c2-2026-091').holomenSupport).toBe(true);
    expect(story('c2-2026-155').holomenSupport).toBe(true);
  });

  it('keeps FubuMiComet and Fubuki in Fubuki’s dedicated bucket', () => {
    expect(story('c2-2025-148').supportCategory).toBe('fubuki');
    expect(story('c2-2025-148').holomenSupport).toBe(true);
    expect(story('c2024-054').supportCategory).toBe('fubuki');
  });

  it('never counts journalists, producers, guests, family members or game NPCs as support', () => {
    for (const id of [
      'news-2022-0420-realsound-suisei-micomet',
      'news-2022-0511-realsound-creators',
      'c2-2025-279',
      'c2-2025-300',
      'c2-2026-128',
      'c2-2026-002',
    ]) {
      expect(story(id).holomenSupport, id).toBe(false);
    }
  });

  it('does not grant Fubuki support to merchandising or passive mentions', () => {
    expect(story('c2-2025-307').supportCategory).toBeUndefined();
    expect(story('c2-2025-308').supportCategory).toBeUndefined();
    expect(story('c2024-057').holomenSupport).toBe(false);
  });

  it('requires the subject to be a different hololive talent and to concern miComet', () => {
    expect(isHolomenSupportStory({ side: 'others', title: 'Miko mentions Fubuki', titleZh: 'Miko提到白上吹雪' })).toBe(false);
    expect(isHolomenSupportStory({ side: 'others', title: 'News on Miko and Suisei', titleZh: 'Real Sound報導miComet' })).toBe(false);
    expect(isHolomenSupportStory({ side: 'others', title: 'Fubuki commentary', titleZh: '白上吹雪談miComet一起玩遊戲' })).toBe(true);
    expect(isHolomenSupportStory({ side: 'others', title: 'Fubuki elsewhere', titleZh: '白上吹雪玩其他遊戲' })).toBe(false);
  });
});
