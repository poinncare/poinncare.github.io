const n=`<!-- source: 9faa3c0947fe -->

# 🌟 Modely Echo 🌟

Vítejte na stránce Modely Echo! Najdete zde pečlivě vybraný seznam doporučených modelů pro použití s Echo. Model nainstalujete pomocí odkazu „Magic Setup“, který jej otevře přímo ve Echo, nebo zkopírováním a vložením přímého odkazu ke stažení do nastavení Echo.

## Dostupné modely

### 🌱 Model Tiny

Kompaktní a efektivní verze, vhodná pro rychlé úkoly a prostředí s omezenými zdroji.

[👉 Rychlé nastavení](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)
[🔽 Přímé stažení](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)

### 🚀 Large v3 Turbo (Doporučeno)

[👉 Rychlé nastavení](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)
[🔽 Přímé stažení](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)

### 🦜 Parakeet TDT 0.6B v3

Podporuje streamování a nejlépe se hodí pro diktování.

[👉 Zobrazit model](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Stáhnout Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/parakeet-tdt-0.6b-v3-Q4_K_M.gguf)

### ⚡ Nemotron 3.5 ASR Streaming 0.6B

Podporuje streamování a nejlépe se hodí pro diktování.

[👉 Zobrazit model](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Stáhnout Q4_K_M](https://github.com/poinncare/Echo/releases/download/v1.0.0/nemotron-3.5-asr-streaming-0.6b-Q4_K_M.gguf)

### Modely optimalizované pro jiné jazyky

<details>
<summary>✡️ Hebrejština (Ivrit)</summary>

Specializovaný na hebrejská (ivrit) jazyková data, optimalizovaný pro vysokou rychlost a přesnost při hebrejských úlohách.

[👉 Rychlé nastavení (Large v3 Turbo)](echo://download/?url=https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)
[🔽 Přímé stažení (Large v3 Turbo)](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)

</details>

<details>
<summary>🇳🇴 Norština</summary>

Optimalizováno pro norštinu laboratoří [AI Lab Norské národní knihovny](https://huggingface.co/NbAiLab).

[👉 Rychlé nastavení (medium)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Přímé stažení (medium)](https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Rychlé nastavení (large)](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Přímé stažení (large)](https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)

Další modely menších velikostí jsou k dispozici na [jejich stránce ke stažení na huggingface](https://huggingface.co/NbAiLab/nb-whisper-large).
Najděte velikost, kterou chcete, stáhněte soubor _ggml-model.bin_, přejmenujte jej a umístěte do složky s modely ve Echo.

</details>

<details>
<summary>🇸🇪 Švédština</summary>

Optimalizováno pro švédštinu laboratoří [Data Lab Švédské národní knihovny](https://huggingface.co/KBLab).

[👉 Rychlé nastavení (medium)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 Přímé stažení (medium)](https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Rychlé nastavení (large v3)](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 Přímé stažení (large v3)](https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)

Další modely menších velikostí jsou k dispozici na [jejich stránce ke stažení na huggingface](https://huggingface.co/KBLab/kb-whisper-large).
Najděte velikost, kterou chcete, stáhněte soubor _ggml-model.bin_, přejmenujte jej a umístěte do složky s modely ve Echo.

</details>
</details>

Užijte si objevování těchto modelů a vylepšete si svůj Echo! 🌐✨

### Chcete více?

Další modely najdete zde:

[👉 Zobrazit další modely](https://huggingface.co/ggerganov/whisper.cpp/tree/main)

---

### Připravte si vlastní modely

<details>
<summary>Převod transformers do GGML</summary>

\`\`\`console
# Nastavení prostředí
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.bashrc
uv venv
uv pip install torch transformers huggingface_hub
huggingface-cli login --token "token" # https://huggingface.co/settings/tokens

# Převod a nahrání
git clone https://github.com/openai/whisper
git clone https://github.com/ggml-org/whisper.cpp
git clone https://huggingface.co/ivrit-ai/whisper-large-v3-turbo
uv run ./whisper.cpp/models/convert-h5-to-ggml.py ./whisper-large-v3-turbo/ ./whisper .
uv run huggingface-cli upload --repo-type model whisper-large-v3-turbo-ivrit ./ggml-model.bin ./ggml-model.bin

# Kvantizace
sudo apt install cmake build-essential -y
cd whisper.cpp
cmake -B build
cmake --build build --config Release
cd ..
./whisper.cpp/build/bin/quantize ggml-model.bin ./ggml-model.int8.bin q8_0 # fp32/fp16/q8_0/q5_0
\`\`\`

</details>
`;export{n as default};
