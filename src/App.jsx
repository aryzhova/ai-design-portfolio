import { useEffect, useState } from 'react'
import { profile, works } from './works.js'

const url = (p) => import.meta.env.BASE_URL + p

function Media({ work, large = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className="ph" style={{ background: work.color || '#3A3547' }}>
        Файл {work.file} не найден
      </div>
    )
  }

  if (work.type === 'video') {
    return (
      <video
        src={url(work.file)}
        poster={work.poster ? url(work.poster) : undefined}
        muted={!large}
        loop
        playsInline
        preload="metadata"
        controls={large}
        autoPlay={large}
        onError={() => setFailed(true)}
        onMouseEnter={(e) => !large && e.currentTarget.play().catch(() => {})}
        onMouseLeave={(e) => !large && e.currentTarget.pause()}
      />
    )
  }

  return <img src={url(work.file)} alt={work.title} loading="lazy" onError={() => setFailed(true)} />
}

function Carousel({ work, onOpen }) {
  const [i, setI] = useState(0)
  const n = work.slides.length
  const go = (d) => setI((i + d + n) % n)
  const slide = { ...work, ...work.slides[i] }

  return (
    <div className="carousel">
      <button className="result" onClick={() => onOpen(slide)} aria-label={`Открыть: ${work.title}, ${i + 1} из ${n}`}>
        <Media key={i} work={slide} />
      </button>
      <button className="nav prev" onClick={() => go(-1)} aria-label="Назад">‹</button>
      <button className="nav next" onClick={() => go(1)} aria-label="Вперёд">›</button>
      <span className="count">{i + 1} / {n}</span>
    </div>
  )
}

function Lightbox({ work, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={work.title} onClick={onClose}>
      <button className="close" onClick={onClose} aria-label="Закрыть">Закрыть</button>
      <div className="stage" onClick={(e) => e.stopPropagation()}>
        <Media work={work} large />
        <p className="cap">{work.title}. {work.tools}</p>
      </div>
    </div>
  )
}

const FILTERS = [
  ['all', 'Все'],
  ['video', 'Видео'],
  ['image', 'Картинки'],
]

export default function App() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const list = works.filter((w) => filter === 'all' || w.type === filter)

  return (
    <>
      <header className="top">
        <h1>{profile.name}</h1>
        <p>{profile.tagline}</p>
        <div className="filters" role="group" aria-label="Фильтр работ">
          {FILTERS.map(([key, label]) => (
            <button key={key} aria-pressed={filter === key} onClick={() => setFilter(key)}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <main>
        {list.map((w) => (
          <article className="row" key={w.id}>
            <div className="prompt">
              <p className="tools">{w.tools}</p>
              <h2>{w.title}</h2>
              <code>{w.prompt}</code>
            </div>
            <span className="arrow" aria-hidden="true">→</span>
            {w.slides ? (
              <Carousel work={w} onOpen={setOpen} />
                    ) : (
                <button className="result" onClick={() => setOpen(w)} aria-label={`Открыть: ${w.title}`}>
                 <Media work={w} />
                   {w.type === 'video' && <span className="play" aria-hidden="true">▶</span>}
                </button>
)}
          </article>
        ))}
      </main>

      <footer>
        <p>{profile.about}</p>
        <nav aria-label="Контакты">
          {profile.contacts.map((c) => (
            <a key={c.label} href={c.href}>{c.label}</a>
          ))}
        </nav>
      </footer>

      {open && <Lightbox work={open} onClose={() => setOpen(null)} />}
    </>
  )
}
