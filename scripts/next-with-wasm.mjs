import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextBin = join(projectRoot, "node_modules", "next", "dist", "bin", "next");
const wasmDir = join(projectRoot, "node_modules", "@next", "swc-wasm-nodejs");

const result = spawnSync(process.execPath, [nextBin, ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: { ...process.env, NEXT_TEST_WASM_DIR: wasmDir },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
