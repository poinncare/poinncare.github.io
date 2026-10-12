const n=`<!-- source: 9faa3c0947fe -->

# 🌟 Модели на Echo 🌟

Добре дошли в страницата с модели на Echo! Тук можете да намерите подбран списък с препоръчани модели за използване с Echo. За да инсталирате модел, използвайте връзката „Magic Setup“, за да го отворите във Echo, или копирайте и поставете директната връзка за изтегляне в настройките на Echo.

## Налични модели

### 🌱 Модел Tiny

Компактна и ефективна версия, подходяща за бързи задачи и среди с ограничени ресурси.

[👉 Magic Setup](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)
[🔽 Директно изтегляне](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)

### 🚀 Large v3 Turbo (Препоръчан)

[👉 Magic Setup](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)
[🔽 Директно изтегляне](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)

### 🦜 Parakeet TDT 0.6B v3

Поддържа поточно предаване и е най-подходящ за диктовка.

[👉 Преглед на модела](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Изтегляне на Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/parakeet-tdt-0.6b-v3-Q4_K_M.gguf)

### ⚡ Nemotron 3.5 ASR Streaming 0.6B

Поддържа поточно предаване и е най-подходящ за диктовка.

[👉 Преглед на модела](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Изтегляне на Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/nemotron-3.5-asr-streaming-0.6b-Q4_K_M.gguf)

### Модели, оптимизирани за други езици

<details>
<summary>✡️ Иврит (Ivrit)</summary>

Специализиран за данни на иврит (Ivrit), оптимизиран за висока скорост и точност при задачи на иврит.

[👉 Magic Setup (Large v3 Turbo)](echo://download/?url=https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)
[🔽 Директно изтегляне (Large v3 Turbo)](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)

</details>

<details>
<summary>🇳🇴 Норвежки</summary>

Оптимизиран за норвежки от [AI Lab at the National Library of Norway](https://huggingface.co/NbAiLab).

[👉 Magic Setup (medium)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Директно изтегляне (medium)](https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Magic Setup (large)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Директно изтегляне (large)](https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)

Повече модели с по-малки размери са налични чрез [тяхната страница за изтегляне в huggingface](https://huggingface.co/NbAiLab/nb-whisper-large).
Намерете желания размер, изтеглете файла _ggml-model.bin_, преименувайте го и го поставете в папката с модели на echo.

</details>

<details>
<summary>🇸🇪 Шведски</summary>

Оптимизиран за шведски от [Data Lab at the National Library of Sweden](https://huggingface.co/KBLab).

[👉 Magic Setup (medium)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Директно изтегляне (medium)](https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Magic Setup (large v3)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Директно изтегляне (large v3)](https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)

Повече модели с по-малки размери са налични чрез [тяхната страница за изтегляне в huggingface](https://huggingface.co/KBLab/kb-whisper-large).
Намерете желания размер, изтеглете файла _ggml-model.bin_, преименувайте го и го поставете в папката с модели на echo.

</details>
</details>

Насладете се на разглеждането на тези модели и подобряването на вашия Echo! 🌐✨

### Искате още?

Намерете допълнителни модели тук:

[👉 Вижте още модели](https://huggingface.co/ggerganov/whisper.cpp/tree/main)

---

### Подгответе собствени модели

<details>
<summary>Преобразуване на transformers в GGML</summary>

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
