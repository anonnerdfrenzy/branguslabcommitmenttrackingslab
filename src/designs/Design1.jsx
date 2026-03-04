import { useState } from 'react';

/*
 * DESIGN 1: BRUTALIST MONO
 * Raw, typographic, black & white with bold geometric structure.
 * Monospace type, harsh borders, no rounded corners, high contrast.
 */

// Maps a grade string to a 0-1 score for coloring
function gradeToScore(grade) {
  const map = {
    'A+': 1, 'A': 0.95, 'A-': 0.9,
    'B+': 0.85, 'B': 0.8, 'B-': 0.75,
    'C+': 0.65, 'C': 0.6, 'C-': 0.55,
    'D+': 0.45, 'D': 0.4, 'D-': 0.35,
    'F': 0.15,
  };
  return map[grade] ?? 0.5;
}

// Returns a color from red (0) to green (1)
function scoreToColor(score) {
  // Red (0) -> Yellow (0.5) -> Green (1)
  const r = score < 0.5 ? 200 : Math.round(200 - (score - 0.5) * 2 * 170);
  const g = score < 0.5 ? Math.round(score * 2 * 170) : 170;
  const b = 30;
  return `rgb(${r}, ${g}, ${b})`;
}

const styles = {
  page: {
    fontFamily: 'Baskerville, "Baskerville Old Face", "Hoefler Text", Georgia, serif',
    background: '#fff',
    color: '#000',
    minHeight: '100vh',
  },
  header: {
    borderBottom: '4px solid #000',
    padding: '32px 48px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: '-2px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '13px',
    maxWidth: '320px',
    lineHeight: 1.6,
    textAlign: 'right',
    opacity: 0.5,
    letterSpacing: '0.2px',
  },
  nav: {
    display: 'flex',
    borderBottom: '2px solid #000',
  },
  navItem: (active) => ({
    padding: '12px 24px',
    fontSize: '13px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    cursor: 'pointer',
    background: active ? '#000' : '#fff',
    color: active ? '#fff' : '#000',
    border: 'none',
    borderRight: '2px solid #000',
    transition: 'all 0.15s',
  }),
  labIndex: {
    display: 'flex',
    borderBottom: '2px solid #000',
  },
  labBtn: (active) => ({
    flex: 1,
    padding: '20px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    background: active ? '#000' : '#fff',
    color: active ? '#fff' : '#000',
    border: 'none',
    borderRight: '2px solid #000',
    transition: 'all 0.15s',
    fontSize: '11px',
    fontFamily: '"Friz Quadrata", "Friz Quadrata Std", "Trajan Pro", Georgia, serif',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }),
  labLogo: (active) => ({
    width: '40px',
    height: '40px',
    objectFit: 'contain',
    filter: active ? 'invert(1)' : 'none',
  }),
  content: {
    display: 'flex',
    minHeight: 'calc(100vh - 250px)',
  },
  sidebar: {
    width: '320px',
    borderRight: '2px solid #000',
    flexShrink: 0,
  },
  sidebarTitle: {
    padding: '16px 20px',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '1px solid #000',
    background: '#f0f0f0',
  },
  commitmentItem: (active) => ({
    padding: '16px 20px',
    borderBottom: '1px solid #ccc',
    cursor: 'pointer',
    background: active ? '#000' : '#fff',
    color: active ? '#fff' : '#000',
    transition: 'all 0.15s',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    borderBottom: '1px solid ' + (active ? '#333' : '#ccc'),
    fontFamily: '"Friz Quadrata", "Friz Quadrata Std", "Trajan Pro", Georgia, serif',
  }),
  commitmentItemTitle: {
    fontSize: '14px',
    fontWeight: 700,
    marginBottom: '4px',
  },
  commitmentItemDate: {
    fontSize: '11px',
    opacity: 0.5,
  },
  main: {
    flex: 1,
    padding: '40px 48px',
  },
  commitmentTitle: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.1,
    textTransform: 'uppercase',
    marginBottom: '8px',
    letterSpacing: '-1px',
  },
  lastUpdated: {
    fontSize: '12px',
    opacity: 0.5,
    marginBottom: '40px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  sectionLabel: {
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '3px',
    padding: '8px 0',
    borderTop: '4px solid #000',
    borderBottom: '1px solid #000',
    marginBottom: '16px',
    marginTop: '32px',
  },
  sectionText: {
    fontSize: '18px',
    lineHeight: 1.9,
    maxWidth: '900px',
    whiteSpace: 'pre-wrap',
  },
  sourcesList: {
    listStyle: 'none',
    padding: 0,
    margin: '8px 0 0 0',
  },
  sourceItem: {
    fontSize: '12px',
    padding: '4px 0',
    borderBottom: '1px dotted #ccc',
  },
  sourceLink: {
    color: '#000',
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
  aboutContainer: {
    padding: '48px',
    maxWidth: '800px',
  },
  aboutTitle: {
    fontSize: '28px',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '24px',
    letterSpacing: '-1px',
  },
  aboutText: {
    fontSize: '18px',
    lineHeight: 1.9,
    whiteSpace: 'pre-wrap',
  },
  labHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '4px',
  },
  labHeaderLogo: {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
  },
  labHeaderName: {
    fontSize: '13px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    opacity: 0.5,
  },
  searchInput: {
    width: '100%',
    padding: '12px 20px',
    border: 'none',
    borderBottom: '1px solid #000',
    fontFamily: '"Friz Quadrata", "Friz Quadrata Std", "Trajan Pro", Georgia, serif',
    fontSize: '13px',
    background: '#f8f8f8',
    outline: 'none',
  },
};

// Renders text with [1], [2], etc. as clickable superscript links
function renderTextWithCitations(text, sources) {
  if (!sources || sources.length === 0) return text;
  const parts = text.split(/(\[\d+\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (match) {
      const num = parseInt(match[1], 10);
      const source = sources[num - 1];
      if (source) {
        return (
          <a
            key={i}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              fontWeight: 700,
              verticalAlign: 'super',
              lineHeight: 0,
              color: '#000',
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              cursor: 'pointer',
              padding: '0 3px',
            }}
            title={source.text}
          >
            {num}
          </a>
        );
      }
    }
    return part;
  });
}

// Strips [1] markers from text for preview
function stripCitations(text) {
  return text.replace(/\[\d+\]/g, '');
}

function CollapsibleSection({ label, text, sources, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const stripped = stripCitations(text);
  const previewLength = 200;
  const needsCollapse = stripped.length > previewLength;

  return (
    <div>
      <div
        style={{
          ...styles.sectionLabel,
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          userSelect: 'none',
        }}
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        <span style={{ fontSize: '14px', fontWeight: 400, opacity: 0.4 }}>
          {open ? '▲' : '▼'}
        </span>
      </div>
      <div style={styles.sectionText}>
        {open || !needsCollapse ? (
          <>
            {renderTextWithCitations(text, sources)}
            {sources && sources.length > 0 && (
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #ccc' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px', opacity: 0.5 }}>
                  Sources
                </div>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'src' }}>
                  {sources.map((s, i) => (
                    <li key={i} style={{ fontSize: '15px', padding: '6px 0', borderBottom: '1px dotted #ccc', display: 'flex', gap: '8px' }}>
                      <span style={{ fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" style={styles.sourceLink}>{s.text}</a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </>
        ) : (
          <div>
            <span style={{ opacity: 0.6 }}>{stripped.slice(0, previewLength)}...</span>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(true); }}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: '"Friz Quadrata", "Friz Quadrata Std", "Trajan Pro", Georgia, serif',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                marginLeft: '8px',
                textDecoration: 'underline',
                textUnderlineOffset: '2px',
              }}
            >
              Read more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Design1({ labs, commitments, aboutText }) {
  const [page, setPage] = useState('commitments');
  const [selectedLab, setSelectedLab] = useState(null);
  const [selectedCommitment, setSelectedCommitment] = useState(null);
  const [search, setSearch] = useState('');

  const filteredCommitments = commitments.filter(c => {
    const matchesLab = selectedLab ? c.labId === selectedLab : true;
    const matchesSearch = search
      ? c.title.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchesLab && matchesSearch;
  });

  const activeCommitment = selectedCommitment
    ? commitments.find(c => c.id === selectedCommitment)
    : filteredCommitments[0] || null;

  const getLabForCommitment = (c) => labs.find(l => l.id === c.labId);

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div style={styles.title}>Brangus's<br/>Lab Commitments<br/>Tracking Slab</div>
        <div style={styles.subtitle}>
          Tracking commitments made by AI labs and evaluating adherence.
          <div style={{ fontSize: '11px', marginTop: '8px', opacity: 0.7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Last updated: 2026-03-03
          </div>
        </div>
      </div>

      <div style={styles.nav}>
        <button style={styles.navItem(page === 'commitments')} onClick={() => setPage('commitments')}>
          Commitments
        </button>
        <button style={styles.navItem(page === 'about')} onClick={() => setPage('about')}>
          What Is This?
        </button>
        <button style={styles.navItem(page === 'philosophy')} onClick={() => setPage('philosophy')}>
          Philosophy
        </button>
        <button style={styles.navItem(page === 'trackrecords')} onClick={() => setPage('trackrecords')}>
          All Labs Trackrecords and Takes
        </button>
      </div>

      {page === 'trackrecords' && (
        <div style={{ padding: '32px 48px' }}>
          {labs.map((lab, i) => {
            const labCommitments = commitments.filter(c => c.labId === lab.id);
            return (
              <div key={lab.id} style={{
                borderBottom: i < labs.length - 1 ? '2px solid #000' : 'none',
                padding: '32px 0',
              }}>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                      <img src={lab.logo} alt={lab.name} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                      <div style={{ fontSize: '28px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-1px' }}>
                        {lab.name}
                      </div>
                    </div>
                    <div style={{ fontSize: '18px', lineHeight: 1.9, maxWidth: '900px', opacity: 0.7, marginBottom: '16px' }}>
                      {lab.summary}
                    </div>
                    <button
                      onClick={() => { setSelectedLab(lab.id); setSelectedCommitment(null); setPage('commitments'); }}
                      style={{
                        background: '#000',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 20px',
                        fontSize: '11px',
                        fontWeight: 700,
                        fontFamily: '"Friz Quadrata", "Friz Quadrata Std", "Trajan Pro", Georgia, serif',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                      }}
                    >
                      View {labCommitments.length} Commitment{labCommitments.length !== 1 ? 's' : ''} →
                    </button>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', flexShrink: 0 }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5, marginBottom: '6px' }}>
                        Overall Summary<br/>Evaluation
                      </div>
                      <div style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: scoreToColor(gradeToScore(lab.overallGrade)),
                        border: `3px solid ${scoreToColor(gradeToScore(lab.overallGrade))}`,
                        padding: '8px 20px',
                        lineHeight: 1.2,
                      }}>
                        {lab.overallGrade}
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5, marginBottom: '6px' }}>
                        Confidence in<br/>Evaluation
                      </div>
                      <div style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        color: scoreToColor(lab.overallConfidence),
                        border: `3px solid ${scoreToColor(lab.overallConfidence)}`,
                        padding: '8px 20px',
                        lineHeight: 1.2,
                      }}>
                        {Math.round(lab.overallConfidence * 100)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {page === 'commitments' && (
        <>
          <div style={styles.labIndex}>
            <button
              style={styles.labBtn(selectedLab === null)}
              onClick={() => { setSelectedLab(null); setSelectedCommitment(null); }}
            >
              <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>*</div>
              All Labs
            </button>
            {labs.map(lab => (
              <button
                key={lab.id}
                style={styles.labBtn(selectedLab === lab.id)}
                onClick={() => { setSelectedLab(lab.id); setSelectedCommitment(null); }}
              >
                <img src={lab.logo} alt={lab.name} style={styles.labLogo(selectedLab === lab.id)} />
                {lab.name}
              </button>
            ))}
          </div>

          <div style={styles.content}>
            <div style={styles.sidebar}>
              <input
                type="text"
                placeholder="Search commitments..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={styles.searchInput}
              />
              <div style={styles.sidebarTitle}>
                {filteredCommitments.length} Commitment{filteredCommitments.length !== 1 ? 's' : ''}
              </div>
              {filteredCommitments.map(c => {
                const lab = getLabForCommitment(c);
                return (
                  <button
                    key={c.id}
                    style={styles.commitmentItem(activeCommitment?.id === c.id)}
                    onClick={() => setSelectedCommitment(c.id)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={styles.commitmentItemTitle}>{c.title}</div>
                      {c.grade && (
                        <span style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: activeCommitment?.id === c.id ? '#fff' : scoreToColor(gradeToScore(c.grade)),
                          flexShrink: 0,
                          marginLeft: '8px',
                        }}>
                          {c.grade}
                        </span>
                      )}
                    </div>
                    <div style={styles.commitmentItemDate}>{lab.name} / Updated {c.lastUpdated}</div>
                  </button>
                );
              })}
            </div>

            <div style={styles.main}>
              {activeCommitment ? (() => {
                const lab = getLabForCommitment(activeCommitment);
                return (
                  <>
                    <div style={styles.labHeader}>
                      <img src={lab.logo} alt={lab.name} style={styles.labHeaderLogo} />
                      <span style={styles.labHeaderName}>{lab.name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px' }}>
                      <div style={styles.commitmentTitle}>{activeCommitment.title}</div>
                      {activeCommitment.grade && (
                        <div style={{ display: 'flex', gap: '12px', flexShrink: 0, marginTop: '4px' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5, marginBottom: '4px' }}>
                              Overall Summary Evaluation
                            </div>
                            <div style={{
                              fontSize: '28px',
                              fontWeight: 700,
                              color: scoreToColor(gradeToScore(activeCommitment.grade)),
                              border: `3px solid ${scoreToColor(gradeToScore(activeCommitment.grade))}`,
                              padding: '4px 16px',
                              lineHeight: 1.2,
                            }}>
                              {activeCommitment.grade}
                            </div>
                          </div>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.5, marginBottom: '4px' }}>
                              Confidence in Evaluation
                            </div>
                            <div style={{
                              fontSize: '28px',
                              fontWeight: 700,
                              color: scoreToColor(activeCommitment.confidence),
                              border: `3px solid ${scoreToColor(activeCommitment.confidence)}`,
                              padding: '4px 16px',
                              lineHeight: 1.2,
                            }}>
                              {Math.round(activeCommitment.confidence * 100)}%
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div style={styles.lastUpdated}>Last updated: {activeCommitment.lastUpdated}</div>

                    <CollapsibleSection
                      label="Content of Commitment"
                      text={activeCommitment.contentOfCommitment}
                      sources={activeCommitment.sources}
                    />
                    <CollapsibleSection
                      label="Degree of Commitment"
                      text={activeCommitment.degreeOfCommitment}
                    />
                    <CollapsibleSection
                      label="Evaluation of Commitment"
                      text={activeCommitment.evaluationOfCommitment}
                    />
                  </>
                );
              })() : (
                <div style={{ opacity: 0.3, fontSize: '14px' }}>No commitments found.</div>
              )}
            </div>
          </div>
        </>
      )}

      {page === 'about' && (
        <div style={styles.aboutContainer}>
          <div style={styles.aboutTitle}>What Is This Site?</div>
          <div style={styles.aboutText}>{aboutText.whatIsThisSite}</div>
        </div>
      )}

      {page === 'philosophy' && (
        <div style={styles.aboutContainer}>
          <div style={styles.aboutTitle}>Some Philosophy On The Nature Of Commitments</div>
          <div style={styles.aboutText}>{aboutText.philosophy}</div>

          <div style={{ ...styles.aboutTitle, marginTop: '48px' }}>Some Philosophy On The Meanings Of Grades And Credences</div>
          <div style={styles.aboutText}>{aboutText.philosophyGrades.intro}</div>
          <ul style={{
            listStyle: 'disc',
            paddingLeft: '24px',
            margin: '16px 0',
            fontSize: '14px',
            lineHeight: 1.8,
            fontFamily: '"Friz Quadrata", "Friz Quadrata Std", "Trajan Pro", Georgia, serif',
          }}>
            {aboutText.philosophyGrades.bullets.map((b, i) => (
              <li key={i} style={{ marginBottom: '6px' }}>{b}</li>
            ))}
          </ul>
          <div style={styles.aboutText}>{aboutText.philosophyGrades.outro}</div>
        </div>
      )}
    </div>
  );
}
