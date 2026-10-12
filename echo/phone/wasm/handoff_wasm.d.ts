/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */

export type ReadableStreamType = "bytes";

/**
 * The browser-side handoff client. Holds a bound iroh [`Endpoint`].
 */
export class HandoffClient {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Bind a browser endpoint. Relay-only; that is expected.
     */
    static create(): Promise<HandoffClient>;
    /**
     * Our own endpoint id, for debugging display.
     */
    endpoint_id(): string;
    /**
     * Ask the desktop what it can do.
     *
     * Resolves to a single plain JS object, either
     * `{type:"capabilities", modelLoaded, modelName, languages, languageDetection, translation}`
     * or `{type:"error", code, message}`. Failures are returned as `error`
     * objects rather than thrown, so React callers only need one code path.
     */
    fetch_capabilities(endpoint_id: string, token: string): Promise<any>;
    /**
     * Exchange a QR invitation for the phone's durable, independently revocable credential.
     */
    pair(endpoint_id: string, token: string, device_token: string, device_name: string): Promise<any>;
    /**
     * Send one recording and stream back transcript events.
     *
     * Returns a `ReadableStream` of JS objects: the newline-delimited JSON
     * events sent by the desktop, plus locally generated
     * `{"type":"uploadProgress","sent":n,"total":n}` events while uploading.
     * Transport failures surface as
     * `{"type":"error","code":"transport","message":"..."}`.
     */
    send_recording(endpoint_id: string, token: string, filename: string, mime: string, lang: string | null | undefined, translate: boolean, audio: Uint8Array): ReadableStream;
}

export class IntoUnderlyingByteSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableByteStreamController): Promise<any>;
    start(controller: ReadableByteStreamController): void;
    readonly autoAllocateChunkSize: number;
    readonly type: ReadableStreamType;
}

export class IntoUnderlyingSink {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    abort(reason: any): Promise<any>;
    close(): Promise<any>;
    write(chunk: any): Promise<any>;
}

export class IntoUnderlyingSource {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    cancel(): void;
    pull(controller: ReadableStreamDefaultController): Promise<any>;
}

export function start(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_handoffclient_free: (a: number, b: number) => void;
    readonly handoffclient_create: () => any;
    readonly handoffclient_endpoint_id: (a: number) => [number, number];
    readonly handoffclient_fetch_capabilities: (a: number, b: number, c: number, d: number, e: number) => any;
    readonly handoffclient_pair: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => any;
    readonly handoffclient_send_recording: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number) => [number, number, number];
    readonly start: () => void;
    readonly __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
    readonly __wbg_intounderlyingsource_free: (a: number, b: number) => void;
    readonly intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
    readonly intounderlyingbytesource_cancel: (a: number) => void;
    readonly intounderlyingbytesource_pull: (a: number, b: any) => any;
    readonly intounderlyingbytesource_start: (a: number, b: any) => void;
    readonly intounderlyingbytesource_type: (a: number) => number;
    readonly intounderlyingsource_cancel: (a: number) => void;
    readonly intounderlyingsource_pull: (a: number, b: any) => any;
    readonly __wbg_intounderlyingsink_free: (a: number, b: number) => void;
    readonly intounderlyingsink_abort: (a: number, b: any) => any;
    readonly intounderlyingsink_close: (a: number) => any;
    readonly intounderlyingsink_write: (a: number, b: any) => any;
    readonly ring_core_0_17_14__bn_mul_mont: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke___wasm_bindgen_e0438773e5f33cfd___JsValue__core_608f92abc48d28da___result__Result_____wasm_bindgen_e0438773e5f33cfd___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke___js_sys_a489da17d94b3e94___Function_fn_wasm_bindgen_e0438773e5f33cfd___JsValue_____wasm_bindgen_e0438773e5f33cfd___sys__Undefined___js_sys_a489da17d94b3e94___Function_fn_wasm_bindgen_e0438773e5f33cfd___JsValue_____wasm_bindgen_e0438773e5f33cfd___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke___wasm_bindgen_e0438773e5f33cfd___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke___web_sys_f8a31e8456efabb___features__gen_CloseEvent__CloseEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke___web_sys_f8a31e8456efabb___features__gen_MessageEvent__MessageEvent______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke_______true__2_: (a: number, b: number) => void;
    readonly wasm_bindgen_e0438773e5f33cfd___convert__closures_____invoke_______true__3_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
