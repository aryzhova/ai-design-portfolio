// ВСЁ, ЧТО НУЖНО РЕДАКТИРОВАТЬ, ЛЕЖИТ ЗДЕСЬ.
// Файлы кладите в public/media/ и указывайте путь вида 'media/имя.mp4'.

export const profile = {
  name: 'Анастасия Рыжова',
  tagline: 'Создаю визуальный контент с помощью генеративного ИИ',
  about: 'AI-креатор. Делаю видео и визуал для брендов: от идеи и промпта до готового результата. Работаю в Higgsfield и Magnific.',
  contacts: [
    { label: 'Telegram', href: 'https://t.me/ainastasia_1' },
    { label: 'Email', href: 'anastasia.ryzhova@gmail.com' },
  ],
}

// type: 'video' или 'image'
// poster: обложка для видео (необязательно)
// color: цвет заглушки, пока файла нет
export const works = [
  {
    id: 'construction',
    type: 'video',
    title: 'Строийтельство с нуля',
    prompt: 'Монтаж из нескольких генераций: строительство дома с нуля.',
    tools: 'Seedance 2.0',
    file: 'media/construction.mp4',
    poster: 'media/city-rain.jpg',
    color: '#0F766E',
  },
  {
    id: 'lilies',
    type: 'image',
    title: 'Портрет с лилиями',
    prompt: 'Стилизация портрета по референсному фото',
    tools: 'Higgsfield AI',
    file: 'media/moves.jpg',
    color: '#BE185D',
  },
  {
    id: 'opora',
    type: 'video',
    title: 'Опора России',
    prompt: 'Промо-ролик для Опоры России, с использованием генеративного ИИ',
    tools: 'Kling',
    file: 'media/opora.mp4',
    color: '#4338CA',
  },

  {
  id: 'avatar',
  type: 'video',
  title: 'Говорящий аватар',
  prompt: 'Говорящий цифровой аватар: анимированный портрет с синхронизацией губ и естественной мимикой.',
  tools: 'Higgsfield',
  file: 'media/avatar.mp4',
  color: '#B45309',
},
{
    id: 'portrait',
    type: 'image',
    title: 'До и после',
    prompt: 'Реставрация старой фотографии',
    tools: 'Gemini',
    color: '#BE185D',
    slides: [
    { type: 'image', file: 'media/restore-before.png' },
    { type: 'image', file: 'media/restore-after.png' },
  ],
  },
]
