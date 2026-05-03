import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// =============================================
// ⚙️  CẤU HÌNH - Thay đổi theo nhu cầu
// =============================================
const INPUT_DIR = path.join(__dirname, '../public')   // Thư mục ảnh cần convert
const OUTPUT_DIR = null                               // null = ghi đè tại chỗ (xóa file cũ), hoặc đặt đường dẫn khác
const QUALITY = 80                                    // Chất lượng WebP (0-100)
const DELETE_ORIGINAL = true                         // true = xóa file gốc sau khi convert
const SUPPORTED_EXTS = ['.jpg', '.jpeg', '.png']
// =============================================

let converted = 0
let skipped = 0
let failed = 0

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!SUPPORTED_EXTS.includes(ext)) return

  const dir = path.dirname(filePath)
  const baseName = path.parse(filePath).name
  const outputPath = OUTPUT_DIR
    ? path.join(OUTPUT_DIR, path.relative(INPUT_DIR, dir), `${baseName}.webp`)
    : path.join(dir, `${baseName}.webp`)

  // Tạo thư mục đầu ra nếu chưa có
  if (OUTPUT_DIR) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  }

  // Bỏ qua nếu file webp đã tồn tại
  if (fs.existsSync(outputPath)) {
    console.log(`⏭️  Bỏ qua (đã tồn tại): ${path.relative(INPUT_DIR, outputPath)}`)
    skipped++
    return
  }

  try {
    const originalSize = fs.statSync(filePath).size
    await sharp(filePath).webp({ quality: QUALITY }).toFile(outputPath)
    const newSize = fs.statSync(outputPath).size
    const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1)

    console.log(
      `✅ ${path.relative(INPUT_DIR, filePath)} → ${path.basename(outputPath)} ` +
      `(${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB, tiết kiệm ${saved}%)`
    )

    if (DELETE_ORIGINAL) {
      fs.unlinkSync(filePath)
    }

    converted++
  } catch (err) {
    console.error(`❌ Lỗi với ${filePath}:`, err.message)
    failed++
  }
}

async function scanDirAsync(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await scanDirAsync(fullPath)
    } else if (entry.isFile()) {
      await convertFile(fullPath)
    }
  }
}

async function main() {
  console.log(`\n🚀 Bắt đầu convert ảnh sang WebP...`)
  console.log(`📁 Thư mục quét: ${INPUT_DIR}`)
  console.log(`📦 Chất lượng: ${QUALITY}%`)
  console.log(`🗑️  Xóa file gốc: ${DELETE_ORIGINAL ? 'CÓ' : 'KHÔNG'}`)
  console.log(`─────────────────────────────────────────\n`)

  await scanDirAsync(INPUT_DIR)

  console.log(`\n─────────────────────────────────────────`)
  console.log(`✅ Đã convert: ${converted} ảnh`)
  console.log(`⏭️  Bỏ qua:    ${skipped} ảnh`)
  console.log(`❌ Lỗi:       ${failed} ảnh`)
  console.log(`─────────────────────────────────────────\n`)
}

main()
