# Портфолио AI-креатора

## Запуск
    npm install
    npm run dev

## Как добавить работу
1. Положите файл в `public/media/`.
2. Добавьте объект в массив `works` в `src/works.js`.
Имя, контакты и текст «обо мне» меняются там же.

## Видео на своём хостинге
Видео лежат в репозитории и отдаются самим сайтом. Сожмите их перед загрузкой:

    ffmpeg -i input.mov -vcodec libx264 -crf 26 -preset slow -an -vf scale=-2:720 -movflags +faststart public/media/name.mp4

- `-movflags +faststart` позволяет начать просмотр до полной загрузки.
- Лимит GitHub: файл не больше 100 МБ, весь репозиторий лучше держать до 1 ГБ. Целься в 5–20 МБ на ролик.
- Обложку можно вытащить из видео: `ffmpeg -i name.mp4 -frames:v 1 public/media/name.jpg`

## Публикация на GitHub Pages
1. Залейте проект в репозиторий, ветка `main`.
2. Settings → Pages → Source: GitHub Actions.
3. Каждый push в `main` публикует сайт сам.
