const n=`<!-- source: 9faa3c0947fe -->

# 🌟 Echoモデル 🌟

Echoモデルのページへようこそ！ここではEchoで使用するおすすめモデルの厳選リストを紹介しています。モデルをインストールするには、「Magic Setup」リンクを使ってEchoで開くか、直接ダウンロードリンクをEchoの設定にコピー＆ペーストしてください。

## 利用可能なモデル

### 🌱 Tinyモデル

コンパクトで効率的なバージョンで、簡単なタスクやリソースが限られた環境に適しています。

[👉 Magic Setup](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)
[🔽 直接ダウンロード](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin?download=true)

### 🚀 Large v3 Turbo（推奨）

[👉 Magic Setup](echo://download/?url=https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)
[🔽 直接ダウンロード](https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin)

### 🦜 Parakeet TDT 0.6B v3

ストリーミングに対応しており、ディクテーション（口述筆記）に最適です。

[👉 モデルを見る](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Q4_K_Mをダウンロード](https://github.com/poinncare/Echo/releases/download/v1.0.0/parakeet-tdt-0.6b-v3-Q4_K_M.gguf)

### ⚡ Nemotron 3.5 ASR Streaming 0.6B

ストリーミングに対応しており、ディクテーション（口述筆記）に最適です。

[👉 モデルを見る](https://github.com/poinncare/Echo/releases/tag/v1.0.0)
[🔽 Q4_K_Mをダウンロード](https://github.com/poinncare/Echo/releases/download/v1.0.0/nemotron-3.5-asr-streaming-0.6b-Q4_K_M.gguf)

### 他言語に最適化されたモデル

<details>
<summary>✡️ ヘブライ語（Ivrit）</summary>

ヘブライ語（Ivrit）のデータに特化しており、ヘブライ語タスクにおける高速性と精度に最適化されています。

[👉 Magic Setup（Large v3 Turbo）](echo://download/?url=https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)
[🔽 直接ダウンロード（Large v3 Turbo）](https://huggingface.co/ivrit-ai/whisper-large-v3-turbo-ggml/resolve/main/ggml-model.bin?download=true)

</details>

<details>
<summary>🇳🇴 ノルウェー語</summary>

[ノルウェー国立図書館のAI Lab](https://huggingface.co/NbAiLab) によりノルウェー語向けに最適化されています。

[👉 Magic Setup（medium）](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 直接ダウンロード（medium）](https://huggingface.co/NbAiLab/nb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Magic Setup（large）](echo://download/?url=https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 直接ダウンロード（large）](https://huggingface.co/NbAiLab/nb-whisper-large/blob/main/ggml-model.bin?download=true)

より小さいサイズのモデルは[Hugging Faceのダウンロードページ](https://huggingface.co/NbAiLab/nb-whisper-large)から入手できます。
希望のサイズを見つけて _ggml-model.bin_ ファイルをダウンロードし、ファイル名を変更してEchoのモデルフォルダに配置してください。

</details>

<details>
<summary>🇸🇪 スウェーデン語</summary>

[スウェーデン国立図書館のData Lab](https://huggingface.co/KBLab) によりスウェーデン語向けに最適化されています。

[👉 Magic Setup（medium）](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)
[🔽 直接ダウンロード（medium）](https://huggingface.co/KBLab/kb-whisper-medium/blob/main/ggml-model.bin?download=true)

[👉 Magic Setup（large v3）](echo://download/?url=https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)
[🔽 直接ダウンロード（large v3）](https://huggingface.co/KBLab/kb-whisper-large/blob/main/ggml-model.bin?download=true)

より小さいサイズのモデルは[Hugging Faceのダウンロードページ](https://huggingface.co/KBLab/kb-whisper-large)から入手できます。
希望のサイズを見つけて _ggml-model.bin_ ファイルをダウンロードし、ファイル名を変更してEchoのモデルフォルダに配置してください。

</details>
</details>

これらのモデルをぜひお試しいただき、Echoをより便利にお使いください！🌐✨

### さらに探したい方へ

こちらでさらに多くのモデルを見つけられます:

[👉 他のモデルを見る](https://huggingface.co/ggerganov/whisper.cpp/tree/main)

---

### 独自のモデルを準備する

<details>
<summary>TransformersをGGMLに変換する</summary>

\`\`\`console
# 環境をセットアップ
curl -LsSf https://astral.sh/uv/install.sh | sh
source ~/.bashrc
uv venv
uv pip install torch transformers huggingface_hub
huggingface-cli login --token "token" # https://huggingface.co/settings/tokens

# 変換してアップロード
git clone https://github.com/openai/whisper
git clone https://github.com/ggml-org/whisper.cpp
git clone https://huggingface.co/ivrit-ai/whisper-large-v3-turbo
uv run ./whisper.cpp/models/convert-h5-to-ggml.py ./whisper-large-v3-turbo/ ./whisper .
uv run huggingface-cli upload --repo-type model whisper-large-v3-turbo-ivrit ./ggml-model.bin ./ggml-model.bin

# 量子化
sudo apt install cmake build-essential -y
cd whisper.cpp
cmake -B build
cmake --build build --config Release
cd ..
./whisper.cpp/build/bin/quantize ggml-model.bin ./ggml-model.int8.bin q8_0 # fp32/fp16/q8_0/q5_0
\`\`\`

</details>
`;export{n as default};
