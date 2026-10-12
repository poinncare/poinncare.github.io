# GigaAM v3 E2E RNNT в Echo

Echo поддерживает официальную русскоязычную GigaAM v3 **E2E RNNT** через нативный ONNX Runtime. Версия E2E восстанавливает пунктуацию, регистр и числа. Используется greedy RNNT без квантования; веса экспортированы в FP32 из официального checkpoint. Модель бесплатна по MIT. [Исходный проект](https://github.com/salute-developers/GigaAM), commit `7447938d791c4f3e643386ee22c33777004293a5`.

## Установка

1. Установите обновлённую сборку из существующего [релиза v1.0.0](https://github.com/poinncare/Echo/releases/tag/v1.0.0). У приложения сохраняется версия 1.0.0, поэтому уже установленная 1.0.0 не получит эти изменения автоматически через проверку новой версии.
2. Откройте **Настройки → Модели → GigaAM v3 E2E RNNT → Скачать**. Для приватного релиза используйте авторизацию `gh auth login`. Альтернатива: скачайте `gigaam-v3-e2e-rnnt.gigaam` в браузере, поместите в папку моделей Echo и выберите его в настройках.
3. Если Echo предлагает Silero VAD, скачайте его. После установки обеих моделей интернет не нужен.

Echo автоматически выбирает русский язык. Приложение проверяет размер и SHA-256 скачиваемого файла; движок проверяет SHA-256 каждого компонента перед загрузкой.

## Возможности

- macOS Apple Silicon и Intel, Windows x64, Linux x64 и ARM64.
- Локальный CPU; Python/PyTorch нужны только для преобразования модели разработчиком.
- Файлы любой длины: Silero VAD выделяет речь и делит её на участки до 24 секунд. В интерфейс передаются готовые участки и прогресс.
- TXT, SRT и другие форматы Echo; таймкоды обозначают границы участков речи, а не отдельных слов.
- Разделение по говорящим остаётся отдельной функцией Echo со своей моделью.

Модель распознаёт только русский язык. Перевод и текстовые подсказки отключаются автоматически. Потоковое распознавание токенов, GPU и таймкоды слов этой интеграцией не поддерживаются. Скорость зависит от процессора и записи.

## Воспроизводимый экспорт и проверка

```sh
uv run --project scripts/gigaam python scripts/gigaam/export.py --out target/models/gigaam-v3-e2e-rnnt.gigaam
ECHO_GIGAAM_TEST_MODEL="$PWD/target/models/gigaam-v3-e2e-rnnt.gigaam" ECHO_GIGAAM_REFERENCE_DIR="$PWD/target/models/gigaam-export" cargo test --manifest-path server/Cargo.toml --locked -p echo-server matches_official_frontend_and_rnnt -- --ignored --nocapture
```

Конвертер использует закреплённую версию официального GigaAM и создаёт эталонные признаки/текст на реальной русской записи для сравнения PyTorch и нативного движка. Контейнер `.gigaam` хранит manifest, SentencePiece и три ONNX-графа; оригинальный `.ckpt` не является форматом Echo.

[Лицензия GigaAM](model-licenses/gigaam-LICENSE.txt) · [Оригинальное описание](model-licenses/gigaam-README.md) · [Оценка качества разработчиком](model-licenses/gigaam-evaluation.md).
