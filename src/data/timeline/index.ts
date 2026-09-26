import timelineData from './timeline.json';
import timeline2020CleanData from './timeline-2020-clean.json';
import timeline2021CleanData from './timeline-2021-clean.json';
import timeline2022CleanData from './timeline-2022-clean.json';
import timeline2023CleanData from './timeline-2023-clean.json';
import timeline2024CleanData from './timeline-2024-clean.json';
import timeline2025CleanData from './timeline-2025-compendium';
import timeline2026CleanData from './timeline-2026-compendium';
import enStoriesData from './en-stories.json';

export type SharedCategory = 'gen0' | 'shiraken' | 'oneOnOne' | 'group';

export interface MiCometStory {
  id: string;
  displayId?: string;
  date: string;
  phase: number;
  side: 'miko' | 'suisei' | 'shared' | 'others';
  sharedCategory?: SharedCategory;
  emoji: string;
  title: string;
  titleZh?: string;
  titleEn?: string;
  titleJa?: string;
  ctx: string;
  ctxZh?: string;
  ctxEn?: string;
  ctxJa?: string;
  type: string;
  link?: string;
  source?: string;
}

type Side = MiCometStory['side'];
type EnglishStory = { id: string; title?: string; context?: string };

const enStoryMap = new Map((enStoriesData as EnglishStory[]).map((story) => [story.id, story]));
const DEFAULT_REFERENCE_URL = 'https://docs.google.com/document/d/e/2PACX-1vRcUa0y4lpqboc3v6Q-8qNu5a8v8TX9EkSqbQfjSdUhLcbhANp7XBYfFc2jdZTkzgwMN1P18kNjuP-U/pub';
const HOLOSTATS_MICOMET_URL = 'https://www.holostats.com/collabs/pair/14/21?lang=ja';
const HOINDEX_MICOMET_URL = 'https://holoindex.com/members/sakura-miko?tab=collab&cpartner=hoshimachi-suisei';

function supplementSourceLinks(story: MiCometStory): MiCometStory {
  const rawLinks = (story.link || '').trim();
  const links = rawLinks ? rawLinks.split(/\s+/).filter(Boolean) : [];
  const isSharedStream = story.side === 'shared' && story.type === 'Stream';

  if (!rawLinks) links.push(DEFAULT_REFERENCE_URL);

  if (isSharedStream) {
    if (!links.includes(HOLOSTATS_MICOMET_URL)) links.push(HOLOSTATS_MICOMET_URL);
    if (!links.includes(HOINDEX_MICOMET_URL)) links.push(HOINDEX_MICOMET_URL);
  }

  return {
    ...story,
    link: Array.from(new Set(links)).join(' '),
  };
}

const verified2024DateByYoutubeId: Record<string, string> = {
  pfDd_whXL48: '2024-01-01',
  PvTzU3LZFyE: '2024-01-17',
  bYzxk4HlE7M: '2024-01-26',
  I0x0mZeJWH8: '2024-02-03',
  JxULK1scvlE: '2024-02-03',
  fXpTEp5817E: '2024-02-17',
  rZQPGM2oWBk: '2024-02-24',
  'QkINY-M34JU': '2024-02-26',
  iRr3PxLR_B8: '2024-03-29',
  yqlGgxDIRGo: '2024-03-30',
  nyo03r0hjaE: '2024-03-31',
  QiKlvJDmzVA: '2024-04-03',
  YrRxTtU3ijA: '2024-04-04',
  wXUnG6y0qSI: '2024-04-07',
  ez_WjXG2Iek: '2024-04-10',
  vTfMdLEbkJ8: '2024-05-03',
  WSbfEsK2wXU: '2024-05-07',
  gOVw7AvnV9Y: '2024-05-10',
  'TaqB-2-Gle4': '2024-05-12',
  JX03g7qYhwA: '2024-05-12',
  '5ks8fW-QdP4': '2024-05-12',
  '9RkLxcWnTlw': '2024-05-12',
  aC7tju4YrjU: '2024-05-13',
  '0s_JnZAwtdk': '2024-05-14',
  R8FuzCxTxyg: '2024-05-18',
  'xDe6-HWouEY': '2024-05-20',
  ev6K7VGDXI8: '2024-05-30',
  U6bg2WjSgBw: '2024-05-30',
  n7A8Dr1C8vs: '2024-05-30',
  zOsbVQFhdak: '2024-06-01',
  '74colXYYK48': '2024-06-01',
  LHxfeXqjIVk: '2024-06-03',
  'DwH8XHV-Cp4': '2024-06-16',
  'In3v-Sfl6gw': '2024-06-26',
  BEBtl6Y_o_I: '2024-06-29',
  Px2EaKPU2UE: '2024-07-17',
  '7zNJZgKCgGM': '2024-07-19',
  YxZMo78hymA: '2024-07-19',
  '2aZq792Pe4E': '2024-07-19',
  vpyp7JpBLT8: '2024-07-19',
  YJjqNFS6BVA: '2024-07-20',
  fFG2Vm5KdWU: '2024-07-20',
  'G-cNmtTqeY8': '2024-07-20',
  MRzgtUqUm6w: '2024-07-20',
  Pd0TlgiU2Wk: '2024-07-20',
  '5pkjpx08Qb4': '2024-07-21',
  _cL4KU017b0: '2024-07-22',
  'eTk-43LVL18': '2024-08-10',
  ReUWeJmRwe0: '2024-09-06',
  '1YGYdvLknzE': '2024-09-06',
  faWtfn9hIMY: '2024-09-08',
  q7yldQF_QAU: '2024-09-14',
  '83R5Dj28l6c': '2024-09-15',
  PqIO5NzaNn8: '2024-09-15',
  'rt-qFNFjxj4': '2024-09-18',
  RjNJbjIPmxo: '2024-09-18',
  EhCmOEDUSrI: '2024-09-21',
  MnZb2EQkGTY: '2024-09-21',
  n8qUNUEqpVY: '2024-10-07',
  '001F_HcLxI8': '2024-10-07',
  M5Y5M4gCMFc: '2024-10-07',
  emH24yVZVbc: '2024-10-07',
  kgwYhO_hJMU: '2024-10-09',
  LfmViq96l1Y: '2024-10-13',
  zcHiS_suDuI: '2024-10-13',
  CRPitFxeQWY: '2024-10-18',
  kj3PgkEjzFA: '2024-10-29',
  '9A9ud9mKb1A': '2024-10-31',
  P1SWcUlXrMA: '2024-11-04',
  rdGlAmZEr0Q: '2024-11-04',
  fHXbIplkE0A: '2024-11-04',
  'YYku6Cy-THU': '2024-11-05',
  '1ID2lymFspA': '2024-11-06',
  rZy0Pp8J8iY: '2024-11-07',
  YVcjQ53EkO0: '2024-11-07',
  IGJow6ef1gI: '2024-11-07',
  Q9HmGepNklM: '2024-11-09',
  f3qJz2dhsbQ: '2024-11-10',
  YVPNyMEJ4Uk: '2024-11-10',
  yKl4Wvk8Hxo: '2024-11-11',
  yTUMlxy3KsM: '2024-11-15',
  xzUDqKO7BYM: '2024-12-06',
  pafbNerwoUA: '2024-12-14',
  Ru0e9Bow5Bc: '2024-12-16',
  opbbuEP9zxg: '2024-12-28',
};

function rawText(story: MiCometStory) {
  return `${story.title} ${story.titleZh ?? ''} ${story.ctx} ${story.ctxZh ?? ''} ${story.link ?? ''}`;
}

function youtubeIdsFromText(value?: string) {
  if (!value) return [];
  const ids = new Set<string>();
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{6,})/g,
    /youtube\.com\/watch\?v=([A-Za-z0-9_-]{6,})/g,
    /youtube\.com\/shorts\/([A-Za-z0-9_-]{6,})/g,
  ];
  patterns.forEach((pattern) => {
    let match: RegExpExecArray | null;
    while ((match = pattern.exec(value))) ids.add(match[1]);
  });
  return Array.from(ids);
}

function verifiedDateForStory(story: MiCometStory) {
  const text = `${story.link ?? ''} ${story.ctx ?? ''} ${story.ctxZh ?? ''} ${story.ctxEn ?? ''}`;
  for (const id of youtubeIdsFromText(text)) {
    const date = verified2024DateByYoutubeId[id];
    if (date) return date;
  }
  return story.date;
}

function normalizeMemberNames(value: string) {
  return value
    .replace(/星街彗星|星街すいせい|星町|小水|すいちゃん|スイセイ|彗醬|彗星|\bSuisei\b|\bsuisei\b/gi, '星街')
    .replace(/櫻巫女|さくらみこ|みこち|咪口|美子|米子|巫女|\bMikochi\b/gi, 'Miko')
    .replace(/みこめっと|ミコメット|MiComet/g, 'miComet')
    .replace(/犬山玉姬|犬山たまき|犬山|Inuyama Tamaki|Inuchi|\bTamaki\b/gi, '狗狗親')
    .replace(/白上フブキ|Shirakami Fubuki|\bFubuki\b/g, '白上吹雪')
    .replace(/大空スバル|Oozora Subaru|\bSubaru\b/gi, '大空昴')
    .replace(/大神ミオ|Ookami Mio|\bMio\b/gi, '大神澪')
    .replace(/不知火フレア|Shiranui Flare|\bFlare\b|耀斑/gi, '阿火')
    .replace(/鷹嶺ルイ|Takane Lui|\bLui\b/gi, '鷹嶺琉依')
    .replace(/角巻わため|Tsunomaki Watame|\bWatame\b/gi, '角卷綿芽');
}

function stripEditorialNotes(value: string) {
  return value
    .replace(/User-provided source list:.*$/gi, '')
    .replace(/Sources?:.*$/gi, '')
    .replace(/YouTube[:：]?|YT[:：]?|Twitter[:：]?|X[:：]?/gi, '')
    .replace(/PTT\s*編年史來源[。:：]?/g, '')
    .replace(/PTT chronology source\.?/gi, '')
    .replace(/編年史來源[。:：]?/g, '')
    .replace(/來源[:：][^。]*。?/g, '')
    .replace(/來源待補。?/g, '')
    .replace(/補充資料[^。]*。?/g, '')
    .replace(/保留[^。]*來源脈絡[^。]*。?/g, '')
    .replace(/不再使用機翻標題。?/g, '')
    .replace(/舊資料中的英文剪輯標題與殘缺連結已整理為正常繁中描述[；;]?/g, '')
    .replace(/(?:留下|成為|作為)[^。]*(?:紀錄|記錄|片段|笑點|故事|之一)[^。]*。?/g, '')
    .replace(/成為[^。]*之一。?/g, '')
    .replace(/(?:早期推文互動|早期互動|推文互動之一|miComet互動片段)[^。]*。?/g, '')
    .replace(/(?:延伸出|延伸為|整理成|被整理成|補成|收作|收為)[^。]*(?:笑點|補充故事|補充|故事|片段)[^。]*。?/g, '')
    .replace(/(?:相關片段|當天多支剪輯|多支剪輯|這段互動|此段互動)[^。]*(?:整理|合併整理|補充)[^。]*。?/g, '')
    .replace(/(?:三人互動|物資使用|多人合作互動)[^。]*(?:笑點|補充故事|片段)[^。]*。?/g, '')
    .replace(/(?:屬於|作為)[^。]*(?:相關互動脈絡|互動脈絡)[^。]*。?/g, '')
    .replace(/這筆[^。]*(?:補充|來源脈絡|機翻|整理|故事)[^。]*。?/g, '')
    .replace(/文本待修。?/g, '')
    .trim();
}

function cleanText(value?: string) {
  if (!value) return '';
  return stripEditorialNotes(normalizeMemberNames(value))
    .replace(/[ぁ-ゖァ-ヺー]+/g, '')
    .replace(/\b(?:Japanese|English|source|summary|moment|hilarious|funny|original|compilation|with|from|and|the|too|very|before|after|together|during|behind|scenes|remote|interaction|makes|about|merch|unhinged)\b/gi, '')
    .replace(/视频|視頻/g, '影片')
    .replace(/链接|連結/g, '連結')
    .replace(/回复|回復/g, '回覆')
    .replace(/转发|轉發/g, '轉推')
    .replace(/发布/g, '發布')
    .replace(/联动|聯動/g, '連動')
    .replace(/\s*[|｜]\s*/g, '、')
    .replace(/\s*[•·]\s*/g, '、')
    .replace(/\s{2,}/g, ' ')
    .replace(/、{2,}/g, '、')
    .replace(/，{2,}/g, '，')
    .replace(/[、，]\s*。/g, '。')
    .replace(/^[：:｜|、，。\s]+|[：:｜|、，。\s]+$/g, '')
    .trim();
}

function cleanEnglishText(value?: string) {
  if (!value) return '';
  return value
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .trim();
}

function ensureSentence(value: string) {
  const text = value.replace(/。{2,}/g, '。').trim();
  if (!text) return '';
  return text.endsWith('。') ? text : `${text}。`;
}

function ensureEnglishSentence(value: string) {
  const text = cleanEnglishText(value).replace(/\.{2,}/g, '.').trim();
  if (!text) return '';
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function titleHasSubject(value: string) {
  return /(Miko|星街|miComet|INNK|白上吹雪|大空昴|大神澪|寶鐘瑪琳|天音彼方|赤井心|兔田佩克拉|湊阿庫婭|白銀諾艾爾|時乃空|蘿蔔子|阿火|尾丸波爾卡|雪花菈米|姬森璐娜|角卷綿芽|Hololive|火建|不知火建設|VILLS|VARK|EXPO)/.test(value);
}

function subjectForSide(side: Side) {
  if (side === 'miko') return 'Miko';
  if (side === 'suisei') return '星街';
  if (side === 'shared') return 'Miko與星街';
  return '其他Hololive成員';
}

function englishSubjectForSide(side: Side) {
  if (side === 'miko') return 'Miko';
  if (side === 'suisei') return 'Suisei';
  if (side === 'shared') return 'miComet';
  return 'Hololive members';
}

function is2024CleanStory(story: MiCometStory) {
  return /^c2024-/.test(story.id);
}

function englishFallbackTitle(story: MiCometStory) {
  if (!is2024CleanStory(story)) return '';
  const subject = englishSubjectForSide(story.side);
  const type = story.type ? story.type.toLowerCase() : 'story';
  const id = story.displayId || story.id;
  if (story.side === 'shared') return `${subject} ${type} story ${id}`;
  if (story.side === 'others') return `${subject} support ${type} story ${id}`;
  return `${subject} ${type} story ${id}`;
}

function englishFallbackContext(story: MiCometStory, titleEn: string) {
  if (!is2024CleanStory(story) || !titleEn) return '';
  return `${story.date.replace(/-/g, '/')}, ${titleEn}`;
}

function isChronologyStory(story: MiCometStory) {
  return story.date >= '2019-01-01' && story.date <= '2020-08-31';
}

function emojiForSide(side: Side) {
  if (side === 'miko') return '🌸';
  if (side === 'suisei') return '☄️';
  if (side === 'shared') return '💛';
  return '⭐';
}

function classifySharedCategory(story: MiCometStory, side: Side): SharedCategory | undefined {
  if (side !== 'shared') return undefined;
  if (story.sharedCategory) return story.sharedCategory;

  // Classify from the story headline first. Context often mentions unrelated members,
  // past events, or reference material and must not turn a genuine miComet 1v1 into Group.
  const titleText = [story.title, story.titleZh, story.titleEn].filter(Boolean).join(' ');

  if (/(?:0期|零期|0th\s*gen|gen\s*0|generation\s*zero)/i.test(titleText)) return 'gen0';
  if (/(?:火建|不知火建設|shiraken|shiranui\s*kensetsu)/i.test(titleText)) return 'shiraken';

  const namedThirdParty = /(?:白上吹雪|大空昴|寶鐘瑪琳|阿火|不知火芙蕾雅|尾丸波爾卡|白銀諾艾爾|AZKi|時乃空|蘿蔔子|天音彼方|角卷綿芽|博衣小夜璃|鷹嶺琉依|貓又小粥|百鬼綾目|拉普拉斯|響咲莉歐娜|水宮樞|音乃瀨奏|風真伊呂波|夏色祭|兔田佩克拉|湊阿庫婭|雪花菈米|姬森璐娜|火威青|輪堂千速|一條莉莉華|戌神沁音|紫咲詩音|赤井心|夜空梅露|獅白牡丹|常闇永遠|森美聲|狗狗親|姊街|Fubuki|Subaru|Marine|Flare|Polka|Noel|Kanata|Watame|Koyori|Lui|Okayu|Ayame|Laplus|Riona|Kanade|Iroha|Matsuri|Pekora|Aqua|Lamy|Luna|Chihaya|Ririka|Korone|Shion|Botan|Towa|Calliope|Anya|Ollie|Reine|\bSu\b|\bAo\b|\bBae\b)/i;

  const groupFormat = /(?:FubuMiComet|SubaMiComet|PekoMikoComet|MariMikoMet|FubuMio.*miComet|mikorone24|等人|多人連動|三人連動|四人連動|Among\s*Us|AmongUs|MIMESIS|Cursed\s*Companions|PlateUp|凸待|call-?in|totsumachi|運動會|新春遊戲祭|大賽|Tournament|Cup|盃|Hololive.*(?:英語傳話|小學學力測驗|大運動會|新春遊戲祭|Summer\s*Park|年末.*節目|聖誕人狼)|(?:參加|加入|同場).*(?:連動|企劃|活動|派對|測驗|大賽|盃|VILLS|EXPO|holofes|Festival))/i;

  if (namedThirdParty.test(titleText) || groupFormat.test(titleText)) return 'group';
  return 'oneOnOne';
}

function normalizeStory(story: MiCometStory): MiCometStory {
  const correctedDate = verifiedDateForStory(story);
  const side = story.side;
  const storyWithSide = { ...story, date: correctedDate, side };
  const sharedCategory = classifySharedCategory(storyWithSide, side);
  const enStory = enStoryMap.get(story.id);
  let titleZh = cleanText(story.titleZh || story.title);
  if (!titleHasSubject(titleZh)) titleZh = `${subjectForSide(side)}${titleZh}`;
  let ctxZh = cleanText(story.ctxZh || story.ctx || titleZh);
  if (!ctxZh || ctxZh.length < 8) ctxZh = titleZh;
  ctxZh = ensureSentence(ctxZh);
  const titleEn = cleanEnglishText(story.titleEn || enStory?.title || englishFallbackTitle(storyWithSide));
  const ctxEn = ensureEnglishSentence(story.ctxEn || enStory?.context || englishFallbackContext(storyWithSide, titleEn) || titleEn);
  return {
    ...story,
    date: correctedDate,
    source: story.source || (isChronologyStory(storyWithSide) ? '編年史' : undefined),
    side,
    sharedCategory,
    emoji: emojiForSide(side),
    title: titleEn || titleZh,
    titleZh,
    titleEn: titleEn || undefined,
    ctx: ctxEn || ctxZh,
    ctxZh,
    ctxEn: ctxEn || undefined,
  };
}

function mergeText(a = '', b = '') {
  const parts = [a, b]
    .map((part) => cleanText(part).replace(/。+$/g, '').trim())
    .filter(Boolean);
  return Array.from(new Set(parts)).join('。');
}

function mergeEnglishText(a = '', b = '') {
  const parts = [a, b]
    .map((part) => cleanEnglishText(part).replace(/[.!?]+$/g, '').trim())
    .filter(Boolean);
  return Array.from(new Set(parts)).join('. ');
}

function mergeStory(base: MiCometStory, extra: MiCometStory): MiCometStory {
  const mergedCtx = ensureSentence(mergeText(base.ctxZh || base.ctx, extra.ctxZh || extra.ctx));
  const mergedCtxEn = ensureEnglishSentence(mergeEnglishText(base.ctxEn || '', extra.ctxEn || ''));
  const links = Array.from(new Set([base.link, extra.link].filter(Boolean))).join(' ');
  const sources = Array.from(new Set([base.source, extra.source].filter(Boolean))).join('、');
  return {
    ...base,
    id: base.id,
    displayId: base.displayId || extra.displayId,
    date: base.date <= extra.date ? base.date : extra.date,
    phase: Math.min(base.phase, extra.phase),
    type: base.type === extra.type ? base.type : 'News',
    link: links,
    source: sources || undefined,
    titleEn: base.titleEn || extra.titleEn,
    ctx: mergedCtxEn || mergedCtx,
    ctxZh: mergedCtx,
    ctxEn: mergedCtxEn || undefined,
  };
}

function duplicateKey(story: MiCometStory) {
  return `${story.date}:${story.titleZh || story.title}`;
}

function normalizeStories(stories: MiCometStory[]) {
  const byKey = new Map<string, MiCometStory>();
  stories.map(normalizeStory).forEach((story) => {
    const key = duplicateKey(story);
    const existing = byKey.get(key);
    byKey.set(key, existing ? mergeStory(existing, story) : story);
  });
  return Array.from(byKey.values());
}

export const MICOMET_TIMELINE: MiCometStory[] = normalizeStories([
  ...(timelineData as MiCometStory[]),
  ...(timeline2020CleanData as MiCometStory[]),
  ...(timeline2021CleanData as MiCometStory[]),
  ...(timeline2022CleanData as MiCometStory[]),
  ...(timeline2023CleanData as MiCometStory[]),
  ...(timeline2024CleanData as MiCometStory[]),
  ...(timeline2025CleanData as MiCometStory[]),
  ...(timeline2026CleanData as MiCometStory[]),
]).map(supplementSourceLinks).sort((a, b) => {
  const dateCompare = a.date.localeCompare(b.date);
  if (dateCompare !== 0) return dateCompare;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
});
