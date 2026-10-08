import { describe, expect, it } from 'vitest';
import { MICOMET_TIMELINE } from '@/data/timeline';

function getStory(id: string) {
  const result = MICOMET_TIMELINE.find((story) => story.id === id);
  expect(result, `Missing timeline story: ${id}`).toBeDefined();
  return result!;
}

describe('Anemachi belongs to Suisei category', () => {
  it('files an Anemachi-led record under Suisei instead of support', () => {
    const story = getStory('c2-2026-128');
    expect(story.side).toBe('suisei');
    expect(story.anemachiAsSuisei).toBe(true);
    expect(story.holomenSupport).toBe(false);
  });

  it('also credits Suisei when Miko discusses Anemachi without losing Miko attribution', () => {
    const story = getStory('c2-2025-012');
    expect(story.side).toBe('miko');
    expect(story.anemachiAsSuisei).toBe(true);
  });

  it('still credits actual holomen support when Roboco talks about Anemachi', () => {
    const story = getStory('c2-2026-091');
    expect(story.side).toBe('others');
    expect(story.holomenSupport).toBe(true);
    expect(story.anemachiAsSuisei).toBe(true);
  });

  it('does not treat other people as Suisei by default', () => {
    const story = getStory('c2-2025-279');
    expect(story.anemachiAsSuisei).toBe(false);
    expect(story.holomenSupport).toBe(false);
  });
});
