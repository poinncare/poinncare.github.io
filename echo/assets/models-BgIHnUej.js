const n=`<!-- source: 9faa3c0947fe -->

# 🌟 Модели Echo 🌟

Добро пожаловать на страницу моделей Echo! Здесь вы найдёте подобранный список рекомендуемых моделей для использования с Echo. Чтобы установить модель, используйте ссылку «Magic Setup», чтобы открыть её в Echo, либо скопируйте и вставьте ссылку для прямого скачивания в настройках Echo.

## Доступные модели

### GigaAM v3 E2E RNNT — для русского языка

Бесплатная модель по лицензии MIT, с пунктуацией и числами. Работает локально на CPU, без Python и платного API. В Echo: **Настройки → Модели → GigaAM v3 E2E RNNT → Скачать**. Если нужен Silero VAD, Echo предложит его скачать. После установки интернет не нужен.

[Скачать модель Echo (.gigaam)](https://github.com/poinncare/Echo/releases/download/v1.0.0/gigaam-v3-e2e-rnnt.gigaam). Релиз приватный: войдите в GitHub под аккаунтом с доступом. При ручной установке поместите файл в папку моделей, затем выберите его в настройках. Оригинальный \`.ckpt\` предназначен для Python и напрямую в Echo не загружается.


### 🌱 Модель Tiny

Компактная и эффективная версия, подходящая для быстрых задач и сред с ограниченными ресурсами.

[👉 Магическая настройка](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)
[🔽 Прямая загрузка](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)

### 🚀 Large v3 Turbo (рекомендуется)

[👉 Магическая настройка](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)
[🔽 Прямая загрузка](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)

### 🦜 Parakeet TDT 0.6B v3

Поддерживает потоковую обработку и лучше всего подходит для диктовки.

[👉 Посмотреть модель](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Скачать Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/parakeet-tdt-0.6b-v3-Q4_K_M.gguf)

### ⚡ Nemotron 3.5 ASR Streaming 0.6B

Поддерживает потоковую обработку и лучше всего подходит для диктовки.

[👉 Посмотреть модель](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Скачать Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/nemotron-3.5-asr-streaming-0.6b-Q4_K_M.gguf)

### Модели, оптимизированные для других языков

<details>
<summary>✡️ Иврит (Ivrit)</summary>

Специализирована на данных иврита (Ivrit), оптимизирована для высокой скорости и точности в задачах на иврите.

[👉 Магическая настройка (Large v3 Turbo)](echo://download/?url=https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)
[🔽 Прямая загрузка (Large v3 Turbo)](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)

**Parakeet TDT 0.6B v3 Hebrew**: дообученная для иврита версия Parakeet TDT 0.6B v3. Лучше всего подходит для диктовки.

[👉 Посмотреть модель](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Скачать Q8_0](https://github.com/poinncare/Echo/releases/download/v1.0.0/parakeet-tdt-0.6b-v3-he-q8_0.gguf)

</details>

<details>
<summary>🇳🇴 Норвежский</summary>

Оптимизирована для норвежского языка [лабораторией ИИ Национальной библиотеки Норвегии](https://huggingface.co/NbAiLab).

[👉 Магическая настройка (medium)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Прямая загрузка (medium)](https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Магическая настройка (large)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Прямая загрузка (large)](https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)

Больше моделей меньшего размера доступно на [странице скачивания на huggingface](https://huggingface.co/NbAiLab/nb-whisper-large).
Найдите нужный размер, скачайте файл _ggml-model.bin_, переименуйте файл и поместите его в папку моделей echo.

</details>

<details>
<summary>🇸🇪 Шведский</summary>

Оптимизирована для шведского языка [Data Lab Национальной библиотеки Швеции](https://huggingface.co/KBLab).

[👉 Магическая настройка (medium)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Прямая загрузка (medium)](https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Магическая настройка (large v3)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Прямая загрузка (large v3)](https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)

Больше моделей меньшего размера доступно на [странице скачивания на huggingface](https://huggingface.co/KBLab/kb-whisper-large).
Найдите нужный размер, скачайте файл _ggml-model.bin_, переименуйте файл и поместите его в папку моделей echo.

</details>
</details>

Наслаждайтесь исследованием этих моделей и делайте Echo ещё лучше! 🌐✨

### Хотите больше?

Дополнительные модели можно найти здесь:

[👉 Смотреть больше моделей](https://huggingface.co/ggerganov/whisper.cpp/tree/main)

---

### Подготовьте свои собственные модели

<details>
<summary>Преобразование transformers в GGML</summary>

\`\`\`console
# Setup environment
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.bashrc
uv venv
uv pip install torch transformers huggingface_hub
huggingface-cli login --token "token" # https://huggingface.co/settings/tokens

# Convert and upload
git clone https://github.com/openai/whisper
git clone https://github.com/ggml-org/whisper.cpp
git clone https://huggingface.co/ivrit-ai/whisper-large-v3-turbo
uv run ./whisper.cpp/models/convert-h5-to-ggml.py ./whisper-large-v3-turbo/ ./whisper .
uv run huggingface-cli upload --repo-type model whisper-large-v3-turbo-ivrit ./ggml-model.bin ./ggml-model.bin

# Quantize
sudo apt install cmake build-essential -y
cd whisper.cpp
cmake -B build
cmake --build build --config Release
cd ..
./whisper.cpp/build/bin/quantize ggml-model.bin ./ggml-model.int8.bin q8_0 # fp32/fp16/q8_0/q5_0
\`\`\`

</details>
`;export{n as default};
