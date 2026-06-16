import { useState, useEffect } from 'react';
import { CATEGORIES, OPPORTUNITIES, DEEP_RESEARCH_MASTER } from './data';
import './App.css';

const STATUS_CONFIG = {
  todo: { label: 'To Do', color: '#5a6070', bg: '#1a1c22' },
  inprogress: { label: 'In Progress', color: '#F3AC41', bg: '#2a1f0a' },
  done: { label: 'Done', color: '#22c55e', bg: '#0a2015' },
  skipped: { label: 'Skipped', color: '#ef4444', bg: '#1f0a0a' },
};

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span style={{
      background: cfg.bg,
      color: cfg.color,
      border: `1px solid ${cfg.color}40`,
      borderRadius: 4,
      padding: '2px 8px',
      fontSize: 11,
      fontFamily: 'var(--mono)',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    }}>{cfg.label}</span>
  );
}

function PriorityDot({ priority }) {
  const colors = ['', '#ef4444', '#F3AC41', '#ED7C25', '#5a6070', '#5a6070'];
  return (
    <span style={{
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: colors[priority] || '#5a6070',
      marginRight: 6,
      flexShrink: 0,
    }} />
  );
}

function OpportunityCard({ opp, onStatusChange, onExpand, expanded }) {
  const cat = CATEGORIES.find(c => c.id === opp.category);

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      marginBottom: 10,
      overflow: 'hidden',
      transition: 'border-color 0.15s',
    }}>
      <div
        onClick={() => onExpand(opp.id)}
        style={{
          padding: '14px 16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
        }}
      >
        <PriorityDot priority={opp.priority} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{opp.name}</span>
            <StatusBadge status={opp.status} />
            {!opp.warmIntro && (
              <span style={{ fontSize: 10, color: '#22c55e', fontFamily: 'var(--mono)', background: '#0a2015', border: '1px solid #22c55e30', borderRadius: 3, padding: '1px 5px' }}>NO INTRO NEEDED</span>
            )}
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ color: cat?.color || 'var(--saffron)', fontWeight: 600, fontSize: 12, fontFamily: 'var(--mono)' }}>{opp.amount}</span>
            <span style={{ color: 'var(--muted)', fontSize: 12 }}>⏰ {opp.deadline}</span>
            <span style={{ color: 'var(--muted)', fontSize: 12 }}>🏢 {opp.entity}</span>
          </div>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: 16, flexShrink: 0 }}>{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div style={{ padding: '0 16px 16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ marginTop: 12 }}>
            <p style={{ color: '#a0aec0', fontSize: 12, fontFamily: 'var(--mono)', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Action Required</p>
            <p style={{ color: 'var(--text)', fontSize: 13, lineHeight: 1.7, background: '#0d0f14', border: '1px solid var(--border)', borderRadius: 6, padding: '10px 12px' }}>{opp.action}</p>
          </div>

          {opp.notes && (
            <div style={{ marginTop: 10 }}>
              <p style={{ color: '#a0aec0', fontSize: 12, fontFamily: 'var(--mono)', fontWeight: 600, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Notes</p>
              <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.7 }}>{opp.notes}</p>
            </div>
          )}

          <div style={{ marginTop: 12 }}>
            <p style={{ color: '#a0aec0', fontSize: 12, fontFamily: 'var(--mono)', fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Deep Research Prompt</p>
            <div style={{ background: '#0d0f14', border: '1px solid #2a3050', borderRadius: 6, padding: '10px 12px', position: 'relative' }}>
              <p style={{ color: '#7c8db5', fontSize: 12, fontFamily: 'var(--mono)', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{opp.deepResearchPrompt}</p>
              <button
                onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(opp.deepResearchPrompt); }}
                style={{ position: 'absolute', top: 8, right: 8, background: '#1e2230', border: '1px solid #2a3050', color: '#7c8db5', borderRadius: 4, padding: '3px 8px', fontSize: 11, cursor: 'pointer', fontFamily: 'var(--mono)' }}
              >Copy</button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
            {Object.entries(STATUS_CONFIG).map(([key, cfg]) => (
              <button
                key={key}
                onClick={(e) => { e.stopPropagation(); onStatusChange(opp.id, key); }}
                style={{
                  background: opp.status === key ? cfg.bg : 'transparent',
                  border: `1px solid ${opp.status === key ? cfg.color : '#2a3050'}`,
                  color: opp.status === key ? cfg.color : '#5a6070',
                  borderRadius: 4,
                  padding: '4px 10px',
                  fontSize: 11,
                  cursor: 'pointer',
                  fontFamily: 'var(--mono)',
                  fontWeight: 600,
                  transition: 'all 0.15s',
                }}
              >{cfg.label}</button>
            ))}
            {opp.url && (
              <a
                href={opp.url}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ marginLeft: 'auto', background: 'transparent', border: '1px solid #ED7C25', color: '#ED7C25', borderRadius: 4, padding: '4px 10px', fontSize: 11, cursor: 'pointer', fontFamily: 'var(--mono)', fontWeight: 600, textDecoration: 'none' }}
              >Visit →</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [statuses, setStatuses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('funding-statuses') || '{}');
    } catch { return {}; }
  });
  const [expanded, setExpanded] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [showResearch, setShowResearch] = useState(false);
  const [checkedToday, setCheckedToday] = useState(() => {
    const today = new Date().toDateString();
    return localStorage.getItem('last-checked') === today;
  });

  useEffect(() => {
    localStorage.setItem('funding-statuses', JSON.stringify(statuses));
  }, [statuses]);

  const handleStatusChange = (id, status) => {
    setStatuses(prev => ({ ...prev, [id]: status }));
  };

  const handleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCheckIn = () => {
    const today = new Date().toDateString();
    localStorage.setItem('last-checked', today);
    setCheckedToday(true);
  };

  const opportunities = OPPORTUNITIES.map(o => ({ ...o, status: statuses[o.id] || o.status }));
  const filtered = activeCategory === 'all' ? opportunities : opportunities.filter(o => o.category === activeCategory);

  const totalDone = opportunities.filter(o => (statuses[o.id] || o.status) === 'done').length;
  const totalInProgress = opportunities.filter(o => (statuses[o.id] || o.status) === 'inprogress').length;
  const totalCritical = opportunities.filter(o => o.priority === 1 && (statuses[o.id] || o.status) !== 'done').length;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--saffron)', letterSpacing: '0.15em', fontWeight: 600 }}>INSPIRED INNOVATION LLC</span>
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)', marginTop: 2 }}>Funding Command Center</h1>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center', padding: '6px 14px', background: '#0a2015', border: '1px solid #22c55e40', borderRadius: 6 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 18, color: '#22c55e', fontWeight: 700 }}>{totalDone}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Done</div>
          </div>
          <div style={{ textAlign: 'center', padding: '6px 14px', background: '#2a1f0a', border: '1px solid #F3AC4140', borderRadius: 6 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 18, color: '#F3AC41', fontWeight: 700 }}>{totalInProgress}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Active</div>
          </div>
          <div style={{ textAlign: 'center', padding: '6px 14px', background: '#1f0a0a', border: '1px solid #ef444440', borderRadius: 6 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 18, color: '#ef4444', fontWeight: 700 }}>{totalCritical}</div>
            <div style={{ fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Critical</div>
          </div>
          <button
            onClick={handleCheckIn}
            style={{
              background: checkedToday ? '#0a2015' : '#ED7C25',
              border: `1px solid ${checkedToday ? '#22c55e' : '#ED7C25'}`,
              color: checkedToday ? '#22c55e' : '#fff',
              borderRadius: 6,
              padding: '8px 16px',
              fontSize: 12,
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'var(--mono)',
              letterSpacing: '0.05em',
            }}
          >{checkedToday ? '✓ Checked Today' : '☐ Mark Today Reviewed'}</button>
        </div>
      </div>

      {/* NSF Alert Banner */}
      <div style={{ background: '#1f0505', borderBottom: '2px solid #ef4444', padding: '10px 24px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 16 }}>🚨</span>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: '#ef4444', fontWeight: 700 }}>CRITICAL — NSF SBIR PHASE I DEADLINE: JUNE 16, 2026 — TOMORROW — FINISH AND SUBMIT NOW</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: 12, color: '#ef4444' }}>SAM.gov validation also blocking all non-dilutive funding — check UEI D4YUPMXSEKJ5 notarization status</span>
      </div>

      {/* Category Tabs */}
      <div style={{ padding: '16px 24px 0', display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid var(--border)' }}>
        <button
          onClick={() => setActiveCategory('all')}
          style={{
            background: activeCategory === 'all' ? '#ED7C2520' : 'transparent',
            border: `1px solid ${activeCategory === 'all' ? '#ED7C25' : 'var(--border)'}`,
            color: activeCategory === 'all' ? '#ED7C25' : 'var(--muted)',
            borderRadius: '4px 4px 0 0',
            padding: '8px 16px',
            fontSize: 12,
            cursor: 'pointer',
            fontFamily: 'var(--mono)',
            fontWeight: 600,
          }}
        >ALL ({opportunities.length})</button>
        {CATEGORIES.map(cat => {
          const count = opportunities.filter(o => o.category === cat.id).length;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: isActive ? `${cat.color}20` : 'transparent',
                border: `1px solid ${isActive ? cat.color : 'var(--border)'}`,
                color: isActive ? cat.color : 'var(--muted)',
                borderRadius: '4px 4px 0 0',
                padding: '8px 16px',
                fontSize: 12,
                cursor: 'pointer',
                fontFamily: 'var(--mono)',
                fontWeight: 600,
              }}
            >{cat.emoji} {cat.label} ({count})</button>
          );
        })}
      </div>

      {/* Main Content */}
      <div style={{ padding: '20px 24px', maxWidth: 900, margin: '0 auto' }}>
        {/* Master Research Prompt */}
        <div style={{ marginBottom: 20 }}>
          <button
            onClick={() => setShowResearch(!showResearch)}
            style={{ background: '#1a1c22', border: '1px solid #2a3050', color: '#7c8db5', borderRadius: 6, padding: '8px 14px', fontSize: 12, cursor: 'pointer', fontFamily: 'var(--mono)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}
          >
            🔬 {showResearch ? 'Hide' : 'Show'} Master Deep Research Prompt
          </button>
          {showResearch && (
            <div style={{ marginTop: 10, background: '#0d0f14', border: '1px solid #2a3050', borderRadius: 6, padding: '14px', position: 'relative' }}>
              <p style={{ color: '#7c8db5', fontSize: 12, fontFamily: 'var(--mono)', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{DEEP_RESEARCH_MASTER}</p>
              <button
                onClick={() => navigator.clipboard.writeText(DEEP_RESEARCH_MASTER)}
                style={{ position: 'absolute', top: 10, right: 10, background: '#1e2230', border: '1px solid #2a3050', color: '#7c8db5', borderRadius: 4, padding: '4px 10px', fontSize: 11, cursor: 'pointer', fontFamily: 'var(--mono)' }}
              >Copy All</button>
            </div>
          )}
        </div>

        {/* Opportunities */}
        {filtered.sort((a, b) => a.priority - b.priority).map(opp => (
          <OpportunityCard
            key={opp.id}
            opp={opp}
            onStatusChange={handleStatusChange}
            onExpand={handleExpand}
            expanded={!!expanded[opp.id]}
          />
        ))}

        <div style={{ marginTop: 30, padding: '16px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8 }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', textAlign: 'center' }}>Status saved locally in browser. Last updated: June 15, 2026. Repo: github.com/preritpramod-io/funding-tracker</p>
        </div>
      </div>
    </div>
  );
}
