# CI/CD & GitFlow — Tài Liệu Toàn Diện
## Dành cho dự án ReactJS + Ubuntu Server

---

## Phần 1: CI/CD là gì?

### 1.1 Khái niệm

CI/CD là viết tắt của **Continuous Integration / Continuous Delivery (hoặc Deployment)**.

Hãy tưởng tượng không có CI/CD:

```
Không có CI/CD:

Dev A làm feature 2 tuần
Dev B làm feature 2 tuần
Ngày deploy: merge code → conflict hàng loạt → debug 2 ngày
Deploy thủ công: ssh vào server → git pull → npm install → npm build → copy file
Nếu lỗi: rollback thủ công → mất thêm 2 tiếng
Tổng chi phí: 4 ngày cho việc đáng ra mất 4 giờ
```

CI/CD giải quyết bằng cách **tự động hóa toàn bộ quy trình** từ khi push code đến khi chạy trên server.

---

### 1.2 Continuous Integration (CI)

> **"Tích hợp liên tục"** — Mỗi khi developer push code, hệ thống tự động kiểm tra code đó có ổn không.

```
Developer push code lên GitHub
         ↓
CI server tự động chạy:
  ① Lint (ESLint) — code có đúng convention không?
  ② TypeScript check — có lỗi type không?
  ③ Unit Test (Vitest) — business logic có đúng không?
  ④ Integration Test (RTL + MSW) — components có hoạt động không?
  ⑤ Build (Vite) — có build được không?
         ↓
Nếu bất kỳ bước nào fail → báo developer ngay
Nếu tất cả pass → code được chấp nhận
```

**Mục tiêu:** Phát hiện lỗi sớm nhất có thể — khi còn trên máy local, không phải khi đã lên production.

---

### 1.3 Continuous Delivery vs Continuous Deployment

```
Continuous Delivery (CD):
  Code pass CI → Sẵn sàng deploy bất cứ lúc nào
  Nhưng deploy vẫn cần người bấm nút xác nhận
  → Phù hợp khi cần approval trước khi lên production

Continuous Deployment (CD):
  Code pass CI → Tự động deploy lên production ngay
  Không cần người bấm nút
  → Phù hợp khi team tin tưởng vào test coverage
  → Phổ biến ở startup, SaaS
```

**Với dự án của bạn:** Sẽ dùng **Continuous Delivery** — tự động deploy lên staging, cần approve trước khi lên production.

---

## Phần 2: GitFlow hoàn chỉnh

### 2.1 Branch Strategy

```
main           ← Production code — chỉ merge từ release hoặc hotfix
                  Tag version: v1.0.0, v1.1.0

develop        ← Integration branch — nơi tập hợp features đã xong
                  Luôn deployable lên staging

feature/*      ← Feature branches — mỗi feature 1 branch
release/*      ← Release preparation — final testing trước production
hotfix/*       ← Khẩn cấp fix production bugs
```

### 2.2 Flow theo từng scenario

#### Scenario A — Phát triển feature thông thường

```
1. Developer tạo branch từ develop
   git checkout develop
   git pull origin develop
   git checkout -b feature/approval-van-ban-den

2. Code + commit thường xuyên
   git add .
   git commit -m "feat(approval): add incoming document list page"
   git commit -m "feat(approval): add return document command"
   git commit -m "test(approval): add unit tests for IncomingDocument entity"

3. Push và tạo Pull Request → develop
   git push origin feature/approval-van-ban-den
   → Tạo PR trên GitHub

4. CI tự động chạy khi tạo PR:
   ✓ Lint
   ✓ Type check
   ✓ Unit tests
   ✓ Integration tests
   ✓ Build check

5. Code review — ít nhất 1 người approve

6. Merge vào develop (squash merge)
   → CI chạy lại trên develop
   → Tự động deploy lên Staging

7. QA test trên Staging
```

#### Scenario B — Release lên Production

```
1. Tạo release branch từ develop
   git checkout develop
   git checkout -b release/v1.2.0

2. Chỉ fix bugs nhỏ trong release branch
   Không thêm feature mới

3. Khi sẵn sàng:
   git checkout main
   git merge release/v1.2.0
   git tag v1.2.0
   git push origin main --tags

   git checkout develop
   git merge release/v1.2.0
   git push origin develop

4. CI/CD trên main → Deploy Production (sau khi approve)
```

#### Scenario C — Hotfix khẩn cấp

```
1. Tạo hotfix từ main (không phải develop)
   git checkout main
   git checkout -b hotfix/fix-login-crash

2. Fix bug, test

3. Merge vào BOTH main và develop
   git checkout main && git merge hotfix/fix-login-crash
   git tag v1.1.1
   git checkout develop && git merge hotfix/fix-login-crash

4. Deploy main → Production ngay
```

### 2.3 Commit Convention

```
Format: <type>(<scope>): <description>

Types:
  feat     — Tính năng mới
  fix      — Sửa bug
  refactor — Refactor code, không thay đổi behavior
  test     — Thêm/sửa test
  docs     — Tài liệu
  style    — Format, naming (không ảnh hưởng logic)
  chore    — Build process, dependencies
  perf     — Performance improvement
  ci       — CI/CD configuration

Examples:
  feat(approval): add incoming document list with filter
  fix(auth): handle token refresh race condition
  test(domain): add unit tests for ReturnReason value object
  refactor(bus): extract pipeline context type
  chore(deps): upgrade antd to v5.15
```

### 2.4 Branch Protection Rules (GitHub Settings)

```
main branch:
  ✓ Require pull request before merging
  ✓ Require 1 approving review
  ✓ Dismiss stale reviews when new commits pushed
  ✓ Require status checks to pass (CI pipeline)
  ✓ Require branches to be up to date
  ✗ Allow force pushes — KHÔNG bao giờ
  ✗ Allow deletions — KHÔNG bao giờ

develop branch:
  ✓ Require pull request before merging
  ✓ Require 1 approving review
  ✓ Require status checks to pass
```

---

## Phần 3: Cấu trúc CI/CD Pipeline

### 3.1 Tổng quan pipeline

```
Push / PR
   ↓
┌──────────────────────────────────────────────────┐
│                   CI Pipeline                     │
│                                                   │
│  Job 1: Quality Gate (chạy song song)            │
│    ├── Lint (ESLint)                             │
│    ├── Type Check (tsc --noEmit)                 │
│    └── Format Check (Prettier)                   │
│                                                   │
│  Job 2: Test (chạy sau Job 1 pass)               │
│    ├── Unit Tests (Vitest)                       │
│    ├── Integration Tests (Vitest + MSW)          │
│    └── Coverage Report                           │
│                                                   │
│  Job 3: Build (chạy sau Job 2 pass)              │
│    ├── npm run build                             │
│    └── Upload build artifact                     │
└──────────────────────────────────────────────────┘
         ↓ (Chỉ khi push vào develop hoặc main)
┌──────────────────────────────────────────────────┐
│                  CD Pipeline                      │
│                                                   │
│  develop → Deploy Staging (tự động)              │
│  main    → Deploy Production (cần approve)       │
└──────────────────────────────────────────────────┘
```

### 3.2 GitHub Actions — CI Pipeline

```yaml
# .github/workflows/ci.yml

name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '20'
  # Dùng cache key từ package-lock.json
  CACHE_KEY: ${{ hashFiles('**/package-lock.json') }}

jobs:

  # ── Job 1: Quality Gate ────────────────────────────────────────────────
  quality:
    name: Quality Gate
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Type check
        run: npx tsc --noEmit

      - name: Format check
        run: npx prettier --check "src/**/*.{ts,tsx}"

  # ── Job 2: Test ─────────────────────────────────────────────────────────
  test:
    name: Test
    runs-on: ubuntu-latest
    needs: quality  # Chỉ chạy khi quality pass

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit

      - name: Run integration tests
        run: npm run test:integration

      - name: Generate coverage report
        run: npm run test:coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          fail_ci_if_error: false  # Không fail CI nếu upload coverage lỗi

      # Fail nếu coverage dưới ngưỡng
      - name: Check coverage thresholds
        run: |
          COVERAGE=$(cat coverage/coverage-summary.json | \
            node -e "const d=require('/dev/stdin'); \
            console.log(d.total.lines.pct)")
          echo "Coverage: $COVERAGE%"
          if (( $(echo "$COVERAGE < 70" | bc -l) )); then
            echo "❌ Coverage $COVERAGE% is below threshold 70%"
            exit 1
          fi

  # ── Job 3: Build ─────────────────────────────────────────────────────────
  build:
    name: Build
    runs-on: ubuntu-latest
    needs: test  # Chỉ chạy khi test pass

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_API_BASE_URL: ${{ secrets.VITE_API_BASE_URL_STAGING }}
          VITE_APP_NAME: 'MyApp'

      # Upload build artifact để CD dùng
      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist-${{ github.sha }}
          path: dist/
          retention-days: 7
```

### 3.3 GitHub Actions — CD Pipeline

```yaml
# .github/workflows/cd-staging.yml

name: Deploy Staging

on:
  push:
    branches: [develop]  # Chỉ chạy khi push vào develop

jobs:
  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    environment: staging  # GitHub Environment với protection rules

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install & Build
        run: |
          npm ci
          npm run build
        env:
          VITE_API_BASE_URL: ${{ secrets.STAGING_API_URL }}
          VITE_APP_NAME: 'MyApp (Staging)'
          VITE_ENVIRONMENT: 'staging'

      - name: Deploy to Ubuntu Server
        uses: appleboy/ssh-action@v1
        with:
          host:     ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USER }}
          key:      ${{ secrets.STAGING_SSH_KEY }}
          script: |
            # Tạo thư mục deploy nếu chưa có
            mkdir -p /var/www/myapp-staging

            # Backup version hiện tại (để rollback nếu cần)
            if [ -d "/var/www/myapp-staging/current" ]; then
              cp -r /var/www/myapp-staging/current \
                    /var/www/myapp-staging/backup-$(date +%Y%m%d-%H%M%S)
            fi

      - name: Copy build to server
        uses: appleboy/scp-action@v0.1.7
        with:
          host:     ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USER }}
          key:      ${{ secrets.STAGING_SSH_KEY }}
          source:   'dist/'
          target:   '/var/www/myapp-staging/current'
          strip_components: 1  # Bỏ 'dist/' prefix

      - name: Activate deployment
        uses: appleboy/ssh-action@v1
        with:
          host:     ${{ secrets.STAGING_HOST }}
          username: ${{ secrets.STAGING_USER }}
          key:      ${{ secrets.STAGING_SSH_KEY }}
          script: |
            # Reload nginx — không restart, reload gracefully
            sudo nginx -t && sudo systemctl reload nginx
            echo "✅ Staging deployed successfully"

      - name: Notify on failure
        if: failure()
        run: |
          echo "❌ Staging deployment failed"
          # Thêm Slack/Teams notification nếu cần
```

```yaml
# .github/workflows/cd-production.yml

name: Deploy Production

on:
  push:
    branches: [main]

jobs:
  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    # GitHub Environment với required reviewers
    # → Sẽ dừng và chờ approve trước khi chạy
    environment: production

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install & Build
        run: |
          npm ci
          npm run build
        env:
          VITE_API_BASE_URL: ${{ secrets.PROD_API_URL }}
          VITE_APP_NAME: 'MyApp'
          VITE_ENVIRONMENT: 'production'

      - name: Rollback point — backup current
        uses: appleboy/ssh-action@v1
        with:
          host:     ${{ secrets.PROD_HOST }}
          username: ${{ secrets.PROD_USER }}
          key:      ${{ secrets.PROD_SSH_KEY }}
          script: |
            # Giữ 5 bản backup gần nhất
            mkdir -p /var/www/myapp/releases
            RELEASE_DIR="/var/www/myapp/releases/$(date +%Y%m%d-%H%M%S)"
            mkdir -p $RELEASE_DIR

            # Backup current nếu có
            if [ -L "/var/www/myapp/current" ]; then
              cp -r $(readlink /var/www/myapp/current)/* $RELEASE_DIR/
            fi

            # Dọn dẹp — chỉ giữ 5 releases
            cd /var/www/myapp/releases
            ls -t | tail -n +6 | xargs -r rm -rf

      - name: Deploy new version
        uses: appleboy/scp-action@v0.1.7
        with:
          host:     ${{ secrets.PROD_HOST }}
          username: ${{ secrets.PROD_USER }}
          key:      ${{ secrets.PROD_SSH_KEY }}
          source:   'dist/'
          target:   '/var/www/myapp/releases/current-new'
          strip_components: 1

      - name: Switch symlink (zero-downtime)
        uses: appleboy/ssh-action@v1
        with:
          host:     ${{ secrets.PROD_HOST }}
          username: ${{ secrets.PROD_USER }}
          key:      ${{ secrets.PROD_SSH_KEY }}
          script: |
            # Atomic switch — nginx không có downtime
            ln -sfn /var/www/myapp/releases/current-new /var/www/myapp/current
            sudo nginx -t && sudo systemctl reload nginx
            echo "✅ Production deployed: $(date)"
```

---

## Phần 4: Setup Ubuntu Server

### 4.1 Cài đặt Nginx

```bash
# SSH vào server
ssh user@your-server-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Cài Nginx
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx  # Auto start khi reboot

# Kiểm tra
sudo systemctl status nginx
curl http://localhost  # Phải thấy Nginx welcome page
```

### 4.2 Cấu hình Nginx cho React SPA

```nginx
# /etc/nginx/sites-available/myapp-staging

server {
    listen 80;
    server_name staging.myapp.com;

    root /var/www/myapp-staging/current;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json
               application/javascript text/xml application/xml
               application/xml+rss text/javascript;

    # Cache static assets lâu (Vite thêm hash vào filename)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # index.html không cache — React Router cần file mới nhất
    location = /index.html {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    # React Router — tất cả routes đều serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

```nginx
# /etc/nginx/sites-available/myapp-production

server {
    listen 80;
    server_name myapp.com www.myapp.com;

    root /var/www/myapp/current;
    index index.html;

    # Giống staging config, thêm:
    # Redirect www → non-www
    if ($host = www.myapp.com) {
        return 301 https://myapp.com$request_uri;
    }

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json
               application/javascript text/xml application/xml;

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    location = /index.html {
        expires -1;
        add_header Cache-Control "no-store, no-cache, must-revalidate";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

```bash
# Enable sites
sudo ln -s /etc/nginx/sites-available/myapp-staging \
           /etc/nginx/sites-enabled/

sudo ln -s /etc/nginx/sites-available/myapp-production \
           /etc/nginx/sites-enabled/

# Remove default
sudo rm /etc/nginx/sites-enabled/default

# Test config
sudo nginx -t

# Reload
sudo systemctl reload nginx
```

### 4.3 Setup SSL với Let's Encrypt

```bash
# Cài Certbot
sudo apt install certbot python3-certbot-nginx -y

# Lấy certificate (thay domain thật của bạn)
sudo certbot --nginx -d myapp.com -d www.myapp.com
sudo certbot --nginx -d staging.myapp.com

# Auto renew
sudo certbot renew --dry-run  # Test trước

# Certbot tự thêm cron job để renew
# Kiểm tra: sudo crontab -l
```

### 4.4 Setup Deploy User (bảo mật)

```bash
# Tạo user riêng cho deploy — không dùng root
sudo adduser deploy
sudo usermod -aG www-data deploy

# Tạo thư mục deploy
sudo mkdir -p /var/www/myapp/releases
sudo mkdir -p /var/www/myapp-staging/current
sudo chown -R deploy:www-data /var/www/
sudo chmod -R 755 /var/www/

# Cho phép deploy user reload nginx không cần password
sudo visudo
# Thêm dòng này:
# deploy ALL=(ALL) NOPASSWD: /bin/systemctl reload nginx, /usr/sbin/nginx
```

### 4.5 Setup SSH Key cho GitHub Actions

```bash
# Trên LOCAL machine — tạo SSH key pair cho CI/CD
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_key -N ""

# Copy public key lên server
ssh-copy-id -i ~/.ssh/deploy_key.pub deploy@your-server-ip

# Kiểm tra
ssh -i ~/.ssh/deploy_key deploy@your-server-ip

# Private key → thêm vào GitHub Secrets
cat ~/.ssh/deploy_key
# Copy toàn bộ output → GitHub repo → Settings → Secrets → PROD_SSH_KEY
```

### 4.6 Thư mục structure trên server

```bash
# Production
/var/www/myapp/
  ├── current -> releases/20240115-143022/  ← symlink
  └── releases/
      ├── 20240115-143022/  ← version hiện tại (symlink trỏ vào đây)
      ├── 20240114-091533/  ← version trước
      ├── 20240113-175441/  ← version trước nữa
      ├── 20240112-120000/
      └── 20240111-083015/  ← giữ 5 bản

# Staging
/var/www/myapp-staging/
  └── current/              ← thư mục thường (không cần symlink)
```

---

## Phần 5: GitHub Secrets cần setup

```
Repository → Settings → Secrets and variables → Actions

Staging:
  STAGING_HOST        = IP hoặc domain server staging
  STAGING_USER        = deploy
  STAGING_SSH_KEY     = (private key, toàn bộ nội dung file)
  STAGING_API_URL     = https://api-staging.myapp.com

Production:
  PROD_HOST           = IP hoặc domain server production
  PROD_USER           = deploy
  PROD_SSH_KEY        = (private key)
  PROD_API_URL        = https://api.myapp.com

Shared:
  CODECOV_TOKEN       = (từ codecov.io)
```

---

## Phần 6: GitHub Environments — Approve trước khi deploy Production

```
GitHub Repo → Settings → Environments → New environment

Environment: production
  ✓ Required reviewers: [tên bạn hoặc team lead]
  ✓ Wait timer: 0 minutes (hoặc thêm delay nếu muốn)
  ✓ Deployment branches: Selected branches → main

Environment: staging
  ✗ No reviewers — tự động deploy
  ✓ Deployment branches: Selected branches → develop
```

---

## Phần 7: package.json scripts hoàn chỉnh

```json
{
  "scripts": {
    "dev":              "vite",
    "build":            "tsc -b && vite build",
    "preview":          "vite preview",

    "lint":             "eslint src --ext .ts,.tsx --max-warnings 0",
    "lint:fix":         "eslint src --ext .ts,.tsx --fix",
    "format":           "prettier --write \"src/**/*.{ts,tsx,json,css}\"",
    "format:check":     "prettier --check \"src/**/*.{ts,tsx}\"",
    "type-check":       "tsc --noEmit",

    "test":             "vitest",
    "test:run":         "vitest run",
    "test:unit":        "vitest run --reporter=verbose src/**/*.test.ts",
    "test:integration": "vitest run --reporter=verbose src/**/*.integration.test.tsx",
    "test:coverage":    "vitest run --coverage",
    "test:ui":          "vitest --ui",

    "ci":               "npm run type-check && npm run lint && npm run test:coverage && npm run build"
  }
}
```

---

## Phần 8: Flow hoàn chỉnh từ code đến production

```
Developer viết code
         ↓
git commit + git push feature/xxx
         ↓
Tạo Pull Request → develop
         ↓
GitHub Actions CI chạy tự động:
  ✓ Lint pass
  ✓ TypeScript pass
  ✓ Unit tests pass (domain, application)
  ✓ Integration tests pass (repository, hooks)
  ✓ Build success
         ↓
Code review + Approve (1 người)
         ↓
Merge vào develop
         ↓
GitHub Actions CD - Staging chạy tự động:
  → Build với staging env vars
  → SCP copy dist/ lên server
  → nginx reload
         ↓
QA test trên staging.myapp.com
         ↓
Team đồng ý release
         ↓
Merge develop → main (hoặc tạo release branch)
         ↓
GitHub Actions CD - Production chạy:
  → DỪNG LẠI — chờ approval
  → Tech lead nhận email notification
  → Tech lead approve trên GitHub UI
         ↓
  → Build với production env vars
  → Backup current version
  → Deploy new version
  → Atomic symlink switch
  → nginx reload (zero downtime)
         ↓
Production live — myapp.com
```

---

## Phần 9: Rollback khi production bị lỗi

```bash
# SSH vào server
ssh deploy@your-server-ip

# Xem danh sách releases
ls -lt /var/www/myapp/releases/

# Rollback về version trước
ln -sfn /var/www/myapp/releases/20240114-091533 /var/www/myapp/current
sudo systemctl reload nginx

# Xác nhận
echo "Rolled back to: $(readlink /var/www/myapp/current)"
```

Hoặc thêm workflow rollback:

```yaml
# .github/workflows/rollback.yml

name: Rollback Production

on:
  workflow_dispatch:  # Chạy thủ công từ GitHub UI
    inputs:
      release:
        description: 'Release folder name (e.g. 20240114-091533)'
        required: true

jobs:
  rollback:
    environment: production
    runs-on: ubuntu-latest
    steps:
      - name: Rollback to specific release
        uses: appleboy/ssh-action@v1
        with:
          host:     ${{ secrets.PROD_HOST }}
          username: ${{ secrets.PROD_USER }}
          key:      ${{ secrets.PROD_SSH_KEY }}
          script: |
            RELEASE="/var/www/myapp/releases/${{ inputs.release }}"
            if [ ! -d "$RELEASE" ]; then
              echo "❌ Release not found: $RELEASE"
              exit 1
            fi
            ln -sfn $RELEASE /var/www/myapp/current
            sudo systemctl reload nginx
            echo "✅ Rolled back to ${{ inputs.release }}"
```

---

*Tài liệu nội bộ — cập nhật khi thay đổi infrastructure hoặc workflow.*
