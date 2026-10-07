import React, { useEffect, useMemo, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { MICOMET_TIMELINE, type MiCometStory } from '@/data/timeline';

type Side = 'miko' | 'suisei' | 'shared' | 'others';
type SharedCategory = NonNullable<MiCometStory['sharedCategory']>;
type StoryCategory = 'all' | 'miko' | 'suisei' | 'gen0' | 'shiraken' | 'oneOnOne' | 'group' | 'fubuki' | 'others';
type ChartMode = 'year' | 'month';
type UiLang = 'en' | 'zh';
type LocalStory = MiCometStory;

type CountPoint = { label: string; miko: number; suisei: number; gen0: number; shiraken: number; oneOnOne: number; group: number; fubuki: number; others: number };

const COLORS = {
  miko: '#ff7dbb',
  suisei: '#66a9ff',
  gen0: '#ffd166',
  shiraken: '#ff9f43',
  oneOnOne: '#d9a7ff',
  group: '#7ee2a8',
  fubuki: '#d7f3ff',
  total: '#7ee2a8',
};
const MONTHS = Array.from({ length: 12 }, (_, index) => index + 1);

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 720px)').matches);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(max-width: 720px)');
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  return isMobile;
}

const TYPE_LABELS: Record<UiLang, Record<string, string>> = {
  en: { Clip: 'Clip', Stream: 'Stream', News: 'News', Text: 'Text', Audio: 'Audio', Music: 'Music', Event: 'Event' },
  zh: { Clip: '剪輯', Stream: '直播', News: '綜合', Text: '文字', Audio: '音訊', Music: '音樂', Event: '活動' },
};

const UI_LABELS = {
  en: {
    totalCard: 'stories collected', start: 'start', latest: 'latest', overview: 'Overview', totalStories: 'Total Stories', timelineRange: 'Timeline Range',
    yearMonth: 'Year / Month', firstEntry: 'First Entry', latestEntry: 'Latest Entry', cumulativeChart: 'Cumulative Story Growth', countChart: 'Story Count Trend',
    year: 'Year', month: 'Month', all: 'All', search: 'Search stories, keywords, dates...', found: 'stories found', empty: 'No matching stories',
    mikoTotal: 'Miko Total', suiseiTotal: 'Suisei Total', supportTotal: 'Support Total',
    miko: 'Miko', suisei: 'Suisei', gen0: 'Gen 0', shiraken: 'Shiraken', oneOnOne: '1v1', group: 'Group', fubuki: 'Fubuki', support: 'Support', category: 'Category', source: 'Source', filters: 'Filters', showChart: 'Show chart', hideChart: 'Hide chart', clearFilters: 'Clear filters', backTop: 'Back to top',
  },
  zh: {
    totalCard: '個故事已收錄', start: '起', latest: '迄', overview: '統計總覽', totalStories: '總故事數', timelineRange: '故事區間',
    yearMonth: '年 / 月', firstEntry: '最早紀錄', latestEntry: '最新紀錄', cumulativeChart: 'miComet累計故事成長圖', countChart: '故事數量折線圖',
    year: '年份', month: '月份', all: '全部', search: '搜尋故事、關鍵字、日期...', found: '個故事', empty: '沒有符合條件的故事',
    mikoTotal: 'Miko累計', suiseiTotal: '星街累計', supportTotal: '助攻累計',
    miko: 'Miko', suisei: '星街', gen0: '0期', shiraken: '火建', oneOnOne: '1v1', group: '團體', fubuki: '白上吹雪', support: '助攻', category: '分類', source: '來源', filters: '篩選', showChart: '顯示圖表', hideChart: '收合圖表', clearFilters: '清除篩選', backTop: '回到頂端',
  },
} as const;

function formatDate(dateISO: string) {
  const date = new Date(`${dateISO}T00:00:00Z`);
  return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
}

function monthKey(dateISO: string) { return dateISO.slice(0, 7); }

function cleanZhText(value = '') {
  return value
    .replace(/文本待修。?/g, '')
    .replace(/User-provided source list:.*$/gi, '')
    .replace(/ユーザー提供メモ.*$/g, '')
    .replace(/使用者提供來源[：:].*$/g, '')
    .replace(/未提供完整網址[^。]*。?/g, '')
    .replace(/避免壞連結。?/g, '')
    .replace(/來源[:：][^。]*。?/g, '')
    .replace(/來源待補。?/g, '')
    .replace(/補充資料[^。]*。?/g, '')
    .replace(/保留[^。]*來源脈絡[^。]*。?/g, '')
    .replace(/不再使用機翻標題。?/g, '')
    .replace(/(?:留下|成為|作為)[^。]*(?:紀錄|記錄|片段|笑點|故事|之一)[^。]*。?/g, '')
    .replace(/(?:早期推文互動|早期互動|推文互動之一|miComet互動片段)[^。]*。?/g, '')
    .replace(/(?:延伸出|延伸為|整理成|被整理成|補成|收作|收為)[^。]*(?:笑點|補充故事|補充|故事|片段)[^。]*。?/g, '')
    .replace(/(?:相關片段|當天多支剪輯|多支剪輯|這段互動|此段互動)[^。]*(?:整理|合併整理|補充)[^。]*。?/g, '')
    .replace(/(?:三人互動|物資使用|多人合作互動)[^。]*(?:笑點|補充故事|片段)[^。]*。?/g, '')
    .replace(/這筆[^。]*(?:補充|來源脈絡|機翻|整理|故事)[^。]*。?/g, '')
    .replace(/[ぁ-ゖァ-ヺー]+/g, '')
    .replace(/视频|視頻/g, '影片')
    .replace(/链接|連結/g, '連結')
    .replace(/回复|回復/g, '回覆')
    .replace(/转发|轉發/g, '轉推')
    .replace(/发布/g, '發布')
    .replace(/里面/g, '裡面')
    .replace(/以后/g, '之後')
    .replace(/联动|聯動/g, '連動')
    .replace(/\s*[|｜]\s*/g, '、')
    .replace(/\s{2,}/g, ' ')
    .replace(/。{2,}/g, '。')
    .replace(/^[、，。\s]+|[、，。\s]+$/g, '')
    .trim();
}

function cleanEnText(value = '') {
  return value
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/\.{2,}/g, '.')
    .trim();
}

function storyTitle(story: LocalStory, lang: UiLang) {
  const raw = lang === 'en' ? story.titleEn || story.title : story.titleZh || story.title;
  const title = lang === 'en' ? cleanEnText(raw) : cleanZhText(raw);
  return title || 'miComet Story';
}

function storyContext(story: LocalStory, lang: UiLang) {
  const raw = lang === 'en' ? story.ctxEn || story.ctx : story.ctxZh || story.ctx;
  const ctx = lang === 'en' ? cleanEnText(raw) : cleanZhText(raw);
  if (ctx) return /[。.!?]$/.test(ctx) ? ctx : lang === 'en' ? `${ctx}.` : `${ctx}。`;
  const title = storyTitle(story, lang);
  return lang === 'en' ? `${title}.` : `${title}。`;
}

function storySort(a: MiCometStory, b: MiCometStory) {
  const dateCompare = a.date.localeCompare(b.date);
  if (dateCompare !== 0) return dateCompare;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
}

function normalizeStories(stories: MiCometStory[]) {
  const seen = new Set<string>();
  return [...stories].sort(storySort).filter((story) => {
    if (seen.has(story.id)) return false;
    seen.add(story.id);
    return true;
  });
}

function timelineYearStart(stories: MiCometStory[]) {
  return Math.min(...stories.map((story) => Number(story.date.slice(0, 4))).filter(Number.isFinite));
}

function timelineYearEnd(stories: MiCometStory[]) {
  return Math.max(...stories.map((story) => Number(story.date.slice(0, 4))).filter(Number.isFinite));
}

function yearRange(start: number, end: number) {
  if (!Number.isFinite(start) || !Number.isFinite(end)) return [];
  return Array.from({ length: Math.max(0, end - start + 1) }, (_, index) => start + index);
}

function summarizeTimeline(stories: MiCometStory[]) {
  const timeline = normalizeStories(stories);
  const counts = timeline.reduce<Record<Side, number>>((acc, story) => {
    acc[story.side] += 1;
    return acc;
  }, { miko: 0, suisei: 0, shared: 0, others: 0 });
  const sharedCounts = timeline.reduce<Record<SharedCategory, number>>((acc, story) => {
    if (story.side === 'shared') acc[story.sharedCategory ?? 'group'] += 1;
    return acc;
  }, { gen0: 0, shiraken: 0, oneOnOne: 0, group: 0 });
  const supportCounts = timeline.reduce((acc, story) => {
    if (story.side !== 'others') return acc;
    if (story.supportCategory === 'fubuki') acc.fubuki += 1;
    else acc.others += 1;
    return acc;
  }, { fubuki: 0, others: 0 });
  const years = yearRange(timelineYearStart(timeline), timelineYearEnd(timeline));
  return {
    timeline,
    counts,
    sharedCounts,
    supportCounts,
    totals: { miko: counts.miko + counts.shared, suisei: counts.suisei + counts.shared, shared: counts.shared, total: timeline.length },
    first: timeline[0] as LocalStory | undefined,
    last: timeline[timeline.length - 1] as LocalStory | undefined,
    years,
  };
}

function emptyCountPoint() {
  return { miko: 0, suisei: 0, gen0: 0, shiraken: 0, oneOnOne: 0, group: 0, fubuki: 0, others: 0 };
}

function buildMonthlyCounts(stories: MiCometStory[]) {
  const monthly = new Map<string, Omit<CountPoint, 'label'>>();
  stories.forEach((story) => {
    const key = monthKey(story.date);
    const current = monthly.get(key) ?? emptyCountPoint();
    if (story.side === 'miko') current.miko += 1;
    if (story.side === 'suisei') current.suisei += 1;
    if (story.side === 'shared') {
      current[story.sharedCategory ?? 'group'] += 1;
      current.miko += 1;
      current.suisei += 1;
    }
    if (story.side === 'others') {
      if (story.supportCategory === 'fubuki') current.fubuki += 1;
      else current.others += 1;
    }
    monthly.set(key, current);
  });
  return monthly;
}

function sumYear(map: Map<string, Omit<CountPoint, 'label'>>, year: number) {
  const yearKey = String(year);
  return [...map.entries()]
    .filter(([key]) => key.startsWith(yearKey))
    .reduce<Omit<CountPoint, 'label'>>((acc, [, value]) => ({
      miko: acc.miko + value.miko,
      suisei: acc.suisei + value.suisei,
      gen0: acc.gen0 + value.gen0,
      shiraken: acc.shiraken + value.shiraken,
      oneOnOne: acc.oneOnOne + value.oneOnOne,
      group: acc.group + value.group,
      fubuki: acc.fubuki + value.fubuki,
      others: acc.others + value.others,
    }), emptyCountPoint());
}

function buildCountPoints(mode: ChartMode, stories: MiCometStory[]) {
  const timeline = normalizeStories(stories);
  const monthly = buildMonthlyCounts(timeline);
  const points: CountPoint[] = [];
  const yearStart = timelineYearStart(timeline);
  const yearEnd = timelineYearEnd(timeline);
  if (mode === 'year') {
    for (let year = yearStart; year <= yearEnd; year += 1) points.push({ label: String(year), ...sumYear(monthly, year) });
    return points;
  }
  for (let year = yearStart; year <= yearEnd; year += 1) {
    for (let month = 1; month <= 12; month += 1) {
      const key = `${year}-${String(month).padStart(2, '0')}`;
      const value = monthly.get(key) ?? emptyCountPoint();
      points.push({ label: `${year}/${String(month).padStart(2, '0')}`, ...value });
    }
  }
  return points;
}

function buildCumulativePoints(mode: ChartMode, stories: MiCometStory[]) {
  let miko = 0; let suisei = 0; let gen0 = 0; let shiraken = 0; let oneOnOne = 0; let group = 0; let fubuki = 0; let others = 0;
  return buildCountPoints(mode, stories).map((point) => {
    miko += point.miko;
    suisei += point.suisei;
    gen0 += point.gen0;
    shiraken += point.shiraken;
    oneOnOne += point.oneOnOne;
    group += point.group;
    fubuki += point.fubuki;
    others += point.others;
    return { label: point.label, miko, suisei, gen0, shiraken, oneOnOne, group, fubuki, others };
  });
}

function extractLinks(item: LocalStory) {
  const text = `${item.link ?? ''} ${item.ctx ?? ''} ${item.ctxZh ?? ''} ${item.ctxEn ?? ''}`;
  const ytUrls = Array.from(new Set(text.match(/https?:\/\/(?:www\.)?(?:youtube\.com\/\S+|youtu\.be\/\S+)/g) || [])).slice(0, 4);
  const twUrls = Array.from(new Set(text.match(/https?:\/\/(?:twitter\.com|x\.com)\/\S+/g) || [])).slice(0, 4);
  const otherUrls = Array.from(new Set(text.match(/https?:\/\/\S+/g) || [])).filter((url) => !ytUrls.includes(url) && !twUrls.includes(url)).slice(0, 4);
  return { ytUrls, twUrls, otherUrls };
}

function storyCategoryLabel(story: LocalStory, lang: UiLang) {
  const ui = UI_LABELS[lang];
  if (story.side === 'miko') return ui.miko;
  if (story.side === 'suisei') return ui.suisei;
  if (story.side === 'shared') return ui[story.sharedCategory ?? 'group'];
  if (story.supportCategory === 'fubuki') return ui.fubuki;
  return ui.support;
}

function storyCategoryColor(story: LocalStory) {
  if (story.side === 'miko') return COLORS.miko;
  if (story.side === 'suisei') return COLORS.suisei;
  if (story.side === 'shared') return COLORS[story.sharedCategory ?? 'group'];
  if (story.supportCategory === 'fubuki') return COLORS.fubuki;
  return '#ffffff';
}

function matchesCategory(story: LocalStory, category: StoryCategory) {
  if (category === 'all') return true;
  if (category === 'miko' || category === 'suisei') return story.side === category;
  if (category === 'fubuki') return story.side === 'others' && story.supportCategory === 'fubuki';
  if (category === 'others') return story.side === 'others' && story.supportCategory !== 'fubuki';
  return story.side === 'shared' && (story.sharedCategory ?? 'group') === category;
}

function ChartShell({ title, stories, labels, cumulative = false, defaultMode = 'month' }: { title: string; stories: MiCometStory[]; labels: typeof UI_LABELS[UiLang]; cumulative?: boolean; defaultMode?: ChartMode }) {
  const [mode, setMode] = useState<ChartMode>(defaultMode);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const isMobile = useIsMobile();
  const summary = useMemo(() => summarizeTimeline(stories), [stories]);
  const data = useMemo(() => (cumulative ? buildCumulativePoints(mode, summary.timeline) : buildCountPoints(mode, summary.timeline)), [cumulative, mode, summary.timeline]);
  const expanded = !isMobile || mobileExpanded;
  return (
    <section style={{ marginTop: isMobile ? 12 : 20, borderRadius: isMobile ? 18 : 26, background: 'radial-gradient(1200px 480px at 18% 0%, rgba(255,125,183,0.08), transparent 45%), radial-gradient(800px 420px at 88% 12%, rgba(102,169,255,0.08), transparent 42%), #070910', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 28px 70px rgba(0,0,0,0.42)', padding: isMobile ? 14 : 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', marginBottom: expanded ? 16 : 0, flexWrap: 'wrap' }}>
        <div style={{ fontSize: isMobile ? 18 : 23, fontWeight: 900, color: '#edf0f8' }}>{title}</div>
        {isMobile ? <button onClick={() => setMobileExpanded((value) => !value)} style={{ border: '1px solid rgba(255,255,255,0.1)', background: '#111520', color: '#dbe0ea', borderRadius: 12, padding: '9px 12px', fontWeight: 800, cursor: 'pointer' }}>{expanded ? labels.hideChart : labels.showChart}</button> : null}
        {expanded ? <div style={{ display: 'flex', gap: 8, background: '#0d0f15', borderRadius: 14, padding: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
          {(['year', 'month'] as ChartMode[]).map((item) => <button key={item} onClick={() => setMode(item)} style={{ background: mode === item ? '#1f2432' : 'transparent', color: '#fff', border: 'none', borderRadius: 10, padding: '9px 12px', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>{item === 'year' ? labels.year : labels.month}</button>)}
        </div> : null}
      </div>
      {expanded ? <div style={{ height: isMobile ? 300 : cumulative ? 420 : 380, overflow: 'hidden' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: isMobile ? 8 : 22, left: isMobile ? -18 : 0, bottom: 38 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.11)" strokeDasharray="4 6" />
            <XAxis dataKey="label" tick={{ fill: '#8f96a8', fontSize: isMobile ? 11 : 14 }} axisLine={{ stroke: 'rgba(255,255,255,0.14)' }} tickLine={{ stroke: 'rgba(255,255,255,0.14)' }} interval={mode === 'year' ? 0 : isMobile ? 5 : 2} angle={-45} textAnchor="end" height={48} />
            <YAxis tick={{ fill: '#8f96a8', fontSize: isMobile ? 11 : 14 }} axisLine={{ stroke: 'rgba(255,255,255,0.14)' }} tickLine={{ stroke: 'rgba(255,255,255,0.14)' }} allowDecimals={false} />
            <Tooltip contentStyle={{ background: '#0a0c11', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12 }} labelStyle={{ color: '#fff' }} />
            <Legend wrapperStyle={{ paddingTop: 8, color: '#cfd4de', fontSize: isMobile ? 11 : 15 }} formatter={(value) => <span style={{ color: '#cfd4de' }}>{value}</span>} />
            <Line type="monotone" dataKey="miko" name={cumulative ? labels.mikoTotal : labels.miko} stroke={COLORS.miko} strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="suisei" name={cumulative ? labels.suiseiTotal : labels.suisei} stroke={COLORS.suisei} strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="gen0" name={labels.gen0} stroke={COLORS.gen0} strokeWidth={2.2} strokeDasharray="6 6" dot={false} />
            <Line type="monotone" dataKey="shiraken" name={labels.shiraken} stroke={COLORS.shiraken} strokeWidth={2.2} strokeDasharray="6 6" dot={false} />
            <Line type="monotone" dataKey="oneOnOne" name={labels.oneOnOne} stroke={COLORS.oneOnOne} strokeWidth={2.2} strokeDasharray="6 6" dot={false} />
            <Line type="monotone" dataKey="group" name={labels.group} stroke={COLORS.group} strokeWidth={2.2} strokeDasharray="6 6" dot={false} />
            <Line type="monotone" dataKey="fubuki" name={labels.fubuki} stroke={COLORS.fubuki} strokeWidth={2.2} strokeDasharray="4 4" dot={false} />
            <Line type="monotone" dataKey="others" name={cumulative ? labels.supportTotal : labels.support} stroke="#ffffff" strokeWidth={2} strokeDasharray="3 3" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div> : null}
    </section>
  );
}

function LinkButtons({ item, labels }: { item: LocalStory; labels: typeof UI_LABELS[UiLang] }) {
  const { ytUrls, twUrls, otherUrls } = extractLinks(item);
  if (!ytUrls.length && !twUrls.length && !otherUrls.length) return null;
  const btnStyle = (color: string): React.CSSProperties => ({ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 999, border: `1px solid ${color}44`, background: `${color}18`, color, fontSize: 14, fontWeight: 700, cursor: 'pointer', textDecoration: 'none', letterSpacing: '0.04em' });
  return <div style={{ marginTop: 18, display: 'flex', gap: 8, flexWrap: 'wrap' }}>{ytUrls.map((url, i) => <a key={`yt${i}`} href={url} target="_blank" rel="noopener noreferrer" style={btnStyle('#ff4444')} onClick={(e) => e.stopPropagation()}>▶ YouTube{ytUrls.length > 1 ? ` ${i + 1}` : ''}</a>)}{twUrls.map((url, i) => <a key={`tw${i}`} href={url} target="_blank" rel="noopener noreferrer" style={btnStyle('#1d9bf0')} onClick={(e) => e.stopPropagation()}>𝕏 Twitter{twUrls.length > 1 ? ` ${i + 1}` : ''}</a>)}{otherUrls.map((url, i) => <a key={`link${i}`} href={url} target="_blank" rel="noopener noreferrer" style={btnStyle('#cfd4de')} onClick={(e) => e.stopPropagation()}>↗ {labels.source}{otherUrls.length > 1 ? ` ${i + 1}` : ''}</a>)}</div>;
}

function StoryCard({ item, lang, onOpen }: { item: LocalStory; lang: UiLang; labels: typeof UI_LABELS[UiLang]; onOpen: (item: LocalStory) => void }) {
  const { ytUrls, twUrls, otherUrls } = extractLinks(item);
  const isMobile = useIsMobile();
  return (
    <article onClick={() => onOpen(item)} style={{ borderRadius: 16, padding: 16, background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 28px rgba(0,0,0,0.28)', cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}><div style={{ color: '#c4c9d6', fontSize: 14 }}>{formatDate(item.date)}</div><div style={{ color: storyCategoryColor(item), fontSize: 14, fontWeight: 700 }}>{storyCategoryLabel(item, lang)}</div></div>
      <div style={{ marginTop: 10, fontSize: 18, fontWeight: 800, lineHeight: 1.45, color: '#f6f7fb' }}>{storyTitle(item, lang)}</div>
      <div style={{ marginTop: 8, color: '#a7adbb', fontSize: 15, lineHeight: 1.65, ...(isMobile ? { display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' } : {}) }}>{storyContext(item, lang)}</div>
      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div style={{ color: '#7f8594', fontSize: 14 }}>Phase {item.phase}</div><div style={{ color: '#5c6070', fontSize: 13, fontFamily: 'monospace', letterSpacing: '0.04em' }}>#{item.displayId ?? item.id}</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>{ytUrls.length > 0 && <span style={{ color: '#ff4444', fontSize: 13 }}>▶</span>}{twUrls.length > 0 && <span style={{ color: '#1d9bf0', fontSize: 13 }}>𝕏</span>}{otherUrls.length > 0 && <span style={{ color: '#cfd4de', fontSize: 13 }}>↗</span>}<div style={{ color: '#cfd4de', fontSize: 14 }}>{TYPE_LABELS[lang][item.type] ?? item.type}</div></div>
      </div>
    </article>
  );
}

function Modal({ item, lang, labels, onClose }: { item: LocalStory; lang: UiLang; labels: typeof UI_LABELS[UiLang]; onClose: () => void }) {
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.72)', display: 'grid', placeItems: 'center', padding: 16, zIndex: 40 }}><div onClick={(e) => e.stopPropagation()} style={{ width: 'min(720px, 100%)', borderRadius: 20, background: '#111420', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', padding: 20 }}><div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'start' }}><div><div style={{ color: '#8f96a8', fontSize: 14 }}>{formatDate(item.date)} <span style={{ color: '#4a5060', marginLeft: 6, fontFamily: 'monospace' }}>#{item.displayId ?? item.id}</span></div><h3 style={{ margin: '8px 0 0', fontSize: 26, lineHeight: 1.35 }}>{storyTitle(item, lang)}</h3></div><button onClick={onClose} style={{ background: '#0d0f15', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, width: 36, height: 36, fontSize: 18, cursor: 'pointer' }}>×</button></div><div style={{ marginTop: 14, color: '#cfd4de', fontSize: 17, lineHeight: 1.75 }}>{storyContext(item, lang)}</div><LinkButtons item={item} labels={labels} /></div></div>;
}

function StatCard({ label, value, note, accent }: { label: string; value: string | number; note: string; accent: string }) {
  return <div style={{ borderRadius: 22, padding: '18px 18px 20px', background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 14px 36px rgba(0,0,0,0.22)' }}><div style={{ color: '#9aa2b2', fontSize: 15, fontWeight: 700 }}>{label}</div><div style={{ color: accent, fontSize: 34, fontWeight: 900, lineHeight: 1.05, marginTop: 10 }}>{value}</div><div style={{ color: '#8d93a3', fontSize: 14, marginTop: 8 }}>{note}</div></div>;
}

function CompactStatRow({ items }: { items: Array<{ label: string; value: number; color: string }> }) {
  return <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 22 }}>{items.map((item) => <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: 8, fontSize: 15, fontWeight: 800 }}><span style={{ color: '#a8afbf' }}>{item.label}</span><span style={{ color: item.color }}>{item.value}</span></div>)}</div>;
}

function LangToggle({ lang, onChange }: { lang: UiLang; onChange: (lang: UiLang) => void }) {
  return <div style={{ display: 'flex', gap: 8, background: '#0d0f15', borderRadius: 14, padding: 6, border: '1px solid rgba(255,255,255,0.08)' }}>{(['en', 'zh'] as UiLang[]).map((item) => <button key={item} onClick={() => onChange(item)} style={{ background: lang === item ? '#1f2432' : 'transparent', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 14px', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}>{item === 'en' ? 'English' : '繁中'}</button>)}</div>;
}

export default function Index() {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState(0);
  const [monthFilter, setMonthFilter] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState<StoryCategory>('all');
  const [uiLang, setUiLang] = useState<UiLang>('en');
  const [openItem, setOpenItem] = useState<LocalStory | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const isMobile = useIsMobile();
  const ui = UI_LABELS[uiLang];
  const summary = useMemo(() => summarizeTimeline(MICOMET_TIMELINE), []);
  const years = useMemo(() => summary.years, [summary.years]);
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return summary.timeline.filter((story) => {
      const item = story as LocalStory;
      if (yearFilter !== 0 && Number(item.date.slice(0, 4)) !== yearFilter) return false;
      if (monthFilter !== 0 && Number(item.date.slice(5, 7)) !== monthFilter) return false;
      if (!matchesCategory(item, categoryFilter)) return false;
      if (!q) return true;
      return [item.date, item.title, item.titleZh ?? '', item.titleEn ?? '', item.ctx, item.ctxZh ?? '', item.ctxEn ?? '', storyTitle(item, uiLang), storyContext(item, uiLang)].join(' ').toLowerCase().includes(q);
    }).sort(storySort) as LocalStory[];
  }, [search, summary.timeline, yearFilter, monthFilter, categoryFilter, uiLang]);
  const groups = useMemo(() => filtered.reduce<Array<{ date: string; items: LocalStory[] }>>((acc, story) => { const last = acc[acc.length - 1]; if (last && last.date === story.date) last.items.push(story); else acc.push({ date: story.date, items: [story] }); return acc; }, []), [filtered]);
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 720);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const sideStats = [
    { label: ui.miko, value: summary.counts.miko, color: COLORS.miko },
    { label: ui.suisei, value: summary.counts.suisei, color: COLORS.suisei },
    { label: ui.gen0, value: summary.sharedCounts.gen0, color: COLORS.gen0 },
    { label: ui.shiraken, value: summary.sharedCounts.shiraken, color: COLORS.shiraken },
    { label: ui.oneOnOne, value: summary.sharedCounts.oneOnOne, color: COLORS.oneOnOne },
    { label: ui.group, value: summary.sharedCounts.group, color: COLORS.group },
    { label: ui.fubuki, value: summary.supportCounts.fubuki, color: COLORS.fubuki },
    { label: ui.support, value: summary.supportCounts.others, color: '#ffffff' },
  ];
  const filterButtonStyle = (active: boolean): React.CSSProperties => ({ padding: '11px 15px', fontSize: 15, borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', background: active ? '#232838' : '#0d0f15', color: '#fff', cursor: 'pointer' });

  return <div style={{ minHeight: '100vh', color: '#fff', padding: '16px 12px 40px', background: 'radial-gradient(1200px 600px at 18% -8%, rgba(255,125,183,0.12), transparent 60%), radial-gradient(900px 500px at 84% 6%, rgba(102,169,255,0.10), transparent 55%), #000' }}><div style={{ maxWidth: 1160, margin: '0 auto' }}>
    <section style={{ borderRadius: 30, border: '1px solid rgba(255,255,255,0.06)', background: 'linear-gradient(180deg, rgba(16,18,26,0.98), rgba(10,11,16,0.98))', boxShadow: '0 30px 80px rgba(0,0,0,0.52)', padding: 28 }}><div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 18 }}><LangToggle lang={uiLang} onChange={setUiLang} /></div><div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 14, alignItems: 'center' }}><div style={{ flex: '1 1 280px', minWidth: 0 }}><h1 style={{ margin: 0, fontSize: 'clamp(3.4rem, 8vw, 5.8rem)', lineHeight: 0.95, letterSpacing: '0.02em', fontWeight: 900, background: 'linear-gradient(90deg, #ff9ccf 0%, #e6b7ff 52%, #9ed6ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>miComet<br />wiki</h1></div><div style={{ flex: '1 1 260px', minWidth: 0, borderRadius: 26, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 18px 42px rgba(0,0,0,0.26)', padding: 24, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><div style={{ color: '#a8afbf', fontSize: 14, letterSpacing: '0.16em', fontWeight: 900 }}>MI COMET</div><div><div style={{ fontSize: 'clamp(3.3rem, 8vw, 4.8rem)', lineHeight: 1, fontWeight: 900, color: '#f7f8fb' }}>{summary.totals.total}</div><div style={{ color: '#8f96a8', marginTop: 8, fontSize: 18 }}>{ui.totalCard}</div></div><div style={{ color: '#c9cedb', fontSize: 16, lineHeight: 1.8 }}>{summary.first ? `${formatDate(summary.first.date)} ${ui.start}` : '—'}<br />{summary.last ? `${formatDate(summary.last.date)} ${ui.latest}` : '—'}</div></div></div></section>
    <section style={{ marginTop: 18, borderRadius: 24, background: '#11141c', border: '1px solid rgba(255,255,255,0.06)', padding: 18, boxShadow: '0 18px 42px rgba(0,0,0,0.24)' }}><div style={{ color: '#8f96a8', fontSize: 14, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 800, marginBottom: 12 }}>{ui.overview}</div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}><StatCard label={ui.totalStories} value={summary.totals.total} note={`${summary.years[0] ?? 2019} - ${summary.years[summary.years.length - 1] ?? 2026}`} accent="#f7f8fb" /><StatCard label={ui.timelineRange} value={`${summary.years[0] ?? 2019} - ${summary.years[summary.years.length - 1] ?? 2026}`} note={ui.yearMonth} accent="#ffb7de" /><StatCard label={ui.firstEntry} value={summary.first ? formatDate(summary.first.date) : '—'} note={summary.first ? storyTitle(summary.first, uiLang) : '—'} accent="#9ed6ff" /><StatCard label={ui.latestEntry} value={summary.last ? formatDate(summary.last.date) : '—'} note={summary.last ? storyTitle(summary.last, uiLang) : '—'} accent="#c58cff" /></div><CompactStatRow items={sideStats} /></section>
    <ChartShell title={ui.cumulativeChart} stories={MICOMET_TIMELINE} labels={ui} cumulative defaultMode="year" />
    <ChartShell title={ui.countChart} stories={MICOMET_TIMELINE} labels={ui} defaultMode="month" />
    <section style={{ marginTop: 18, borderRadius: 20, background: '#151823', border: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? 10 : 16, boxShadow: '0 18px 42px rgba(0,0,0,0.24)', ...(isMobile ? { position: 'sticky' as const, top: 0, zIndex: 30, backdropFilter: 'blur(16px)' } : {}) }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '1 1 260px', minWidth: 0, display: 'flex', alignItems: 'center', gap: 10, background: '#0d0f15', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '12px 14px' }}><span style={{ color: '#8f96a8' }}>⌕</span><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={ui.search} style={{ minWidth: 0, flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 16 }} /></div>
        {isMobile ? <button onClick={() => setMobileFiltersOpen(true)} style={{ ...filterButtonStyle(yearFilter !== 0 || monthFilter !== 0 || categoryFilter !== 'all'), whiteSpace: 'nowrap' }}>{ui.filters}{yearFilter !== 0 || monthFilter !== 0 || categoryFilter !== 'all' ? ' •' : ''}</button> : null}
        {!isMobile ? <>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}><span style={{ color: '#9aa2b2', fontSize: 15 }}>{ui.year}:</span><button onClick={() => { setYearFilter(0); setMonthFilter(0); }} style={filterButtonStyle(yearFilter === 0)}>{ui.all}</button>{years.map((year) => <button key={year} onClick={() => { setYearFilter(yearFilter === year ? 0 : year); setMonthFilter(0); }} style={filterButtonStyle(yearFilter === year)}>{year}</button>)}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}><span style={{ color: '#9aa2b2', fontSize: 15 }}>{ui.month}:</span><button onClick={() => setMonthFilter(0)} style={filterButtonStyle(monthFilter === 0)}>{ui.all}</button>{MONTHS.map((month) => <button key={month} onClick={() => setMonthFilter(monthFilter === month ? 0 : month)} style={filterButtonStyle(monthFilter === month)}>{uiLang === 'zh' ? `${month}月` : month}</button>)}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', width: '100%' }}><span style={{ color: '#9aa2b2', fontSize: 15 }}>{ui.category}:</span>{([['all', ui.all], ['miko', ui.miko], ['suisei', ui.suisei], ['gen0', ui.gen0], ['shiraken', ui.shiraken], ['oneOnOne', ui.oneOnOne], ['group', ui.group], ['fubuki', ui.fubuki], ['others', ui.support]] as Array<[StoryCategory, string]>).map(([key, label]) => <button key={key} onClick={() => setCategoryFilter(categoryFilter === key ? 'all' : key)} style={filterButtonStyle(categoryFilter === key)}>{label}</button>)}</div>
        </> : null}
      </div>
      {isMobile ? <div style={{ marginTop: 9, display: 'flex', gap: 7, overflowX: 'auto', paddingBottom: 2, scrollbarWidth: 'none' }}>
        <button onClick={() => { setYearFilter(0); setMonthFilter(0); }} style={{ ...filterButtonStyle(yearFilter === 0), flex: '0 0 auto', padding: '9px 12px' }}>{ui.all}</button>
        {[...years].reverse().map((year) => <button key={year} onClick={() => { setYearFilter(yearFilter === year ? 0 : year); setMonthFilter(0); }} style={{ ...filterButtonStyle(yearFilter === year), flex: '0 0 auto', padding: '9px 12px' }}>{year}</button>)}
      </div> : null}
    </section>
    <section style={{ marginTop: 18, color: '#b5bbca', fontSize: 15 }}>{uiLang === 'zh' ? `找到 ${filtered.length} ${ui.found}` : `${filtered.length} ${ui.found}`}</section>
    <main style={{ marginTop: 16, display: 'grid', gap: isMobile ? 12 : 18 }}>{groups.length === 0 ? <div style={{ padding: 36, borderRadius: 18, background: '#151823', color: '#9aa2b2', textAlign: 'center' }}>{ui.empty}</div> : groups.map((group, index) => {
      const year = group.date.slice(0, 4);
      const previousYear = index > 0 ? groups[index - 1].date.slice(0, 4) : '';
      return <React.Fragment key={group.date}>
        {isMobile && year !== previousYear ? <div style={{ position: 'sticky', top: 76, zIndex: 18, width: 'fit-content', borderRadius: 999, padding: '7px 12px', background: 'rgba(20,24,35,0.94)', border: '1px solid rgba(255,255,255,0.08)', color: '#e7ebf4', fontSize: 15, fontWeight: 900, backdropFilter: 'blur(12px)' }}>{year}</div> : null}
        <section style={{ borderRadius: isMobile ? 16 : 20, background: '#151823', border: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? 12 : 16 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}><div><div style={{ color: '#8f96a8', fontSize: 13 }}>{group.date.slice(0, 7)}</div><h2 style={{ margin: '3px 0 0', fontSize: isMobile ? 19 : 23 }}>{formatDate(group.date)}</h2></div><div style={{ color: '#9aa2b2', fontSize: 14 }}>Phase {group.items[0]?.phase ?? '-'}</div></div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12 }}>{group.items.map((item) => <StoryCard key={item.id} item={item} lang={uiLang} labels={ui} onOpen={setOpenItem} />)}</div></section>
      </React.Fragment>;
    })}</main>
  </div>
  {isMobile && mobileFiltersOpen ? <div onClick={() => setMobileFiltersOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(0,0,0,0.65)', display: 'flex', alignItems: 'flex-end' }}><div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxHeight: '78vh', overflowY: 'auto', borderRadius: '24px 24px 0 0', background: '#11141c', border: '1px solid rgba(255,255,255,0.08)', padding: '18px 16px 24px' }}><div style={{ width: 42, height: 4, borderRadius: 99, background: '#4d5362', margin: '0 auto 18px' }} /><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}><strong style={{ fontSize: 20 }}>{ui.filters}</strong><button onClick={() => { setYearFilter(0); setMonthFilter(0); setCategoryFilter('all'); }} style={filterButtonStyle(false)}>{ui.clearFilters}</button></div><div style={{ marginTop: 18, color: '#9aa2b2', fontSize: 14, fontWeight: 800 }}>{ui.month}</div><select value={monthFilter} onChange={(e) => setMonthFilter(Number(e.target.value))} style={{ marginTop: 8, width: '100%', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: '#0d0f15', color: '#fff', padding: '12px 14px', fontSize: 16 }}><option value={0}>{ui.all}</option>{MONTHS.map((month) => <option key={month} value={month}>{uiLang === 'zh' ? `${month}月` : month}</option>)}</select><div style={{ marginTop: 20, color: '#9aa2b2', fontSize: 14, fontWeight: 800 }}>{ui.category}</div><div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 8 }}>{([['all', ui.all], ['miko', ui.miko], ['suisei', ui.suisei], ['gen0', ui.gen0], ['shiraken', ui.shiraken], ['oneOnOne', ui.oneOnOne], ['group', ui.group], ['fubuki', ui.fubuki], ['others', ui.support]] as Array<[StoryCategory, string]>).map(([key, label]) => <button key={key} onClick={() => setCategoryFilter(key)} style={filterButtonStyle(categoryFilter === key)}>{label}</button>)}</div><button onClick={() => setMobileFiltersOpen(false)} style={{ marginTop: 18, width: '100%', border: 'none', borderRadius: 14, background: '#f0f2f7', color: '#11131a', padding: '13px 16px', fontSize: 16, fontWeight: 900, cursor: 'pointer' }}>{uiLang === 'zh' ? '完成' : 'Done'}</button></div></div> : null}
  {isMobile && showBackTop ? <button aria-label={ui.backTop} title={ui.backTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', right: 16, bottom: 18, zIndex: 45, width: 46, height: 46, borderRadius: 999, border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(22,26,37,0.92)', color: '#fff', fontSize: 20, fontWeight: 900, boxShadow: '0 12px 32px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)', cursor: 'pointer' }}>↑</button> : null}
  {openItem ? <Modal item={openItem} lang={uiLang} labels={ui} onClose={() => setOpenItem(null)} /> : null}</div>;
}
