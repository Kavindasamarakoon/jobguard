
# JobGuard v3 (Next.js 14 + Prisma + SQLite)

![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20092454.png)
![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20093737.png)
![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20094741.png)
![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20094808.png)
![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20095041.png)
![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20095224.png)
![image_alt](https://github.com/Kavindasamarakoon/jobguard/blob/ce91d7696296a89a5c81169b692fb6a61101d30a/Screenshot%202025-09-14%20095436.png)


This build fixes previous issues and includes:
- Working **Login / Registration** (DB-backed)
- **Post a Job** saves to DB and redirects to **/jobs/[id]**
- Home page search wired to backend (`/api/jobs/list?q=`), **no risk badges**
- Job detail page with **Apply** (requires login) and **CV upload**
- Fake Job Detector:
  - API `/api/detector/analyze` with a small Naive Bayes model
  - Image OCR via `tesseract.js` on the client
- Simplified **middleware**: protects `/dashboard`, job **apply**, and **CV** routes
- Added missing dependency **swr**

## Run locally (SQLite)
```bash
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000

- Register at `/register` → redirects to `/dashboard`
- Post a job at `/post` (must be logged in)
- View job at `/jobs/:id`, upload CV, then **Apply**
- Detector at `/detector` (URL/Text/Image)


## v3.3 Changes
- Home page now lists jobs via **public GET /api/jobs** (middleware allows it).
- Detector OCR hardened and model expanded.
- Dashboard tabs:
  - **Profile** (edit name/email, change password).
  - **CV & Matches** (upload/list/delete CVs, type skills, click **Scan & Match Jobs**).
- New endpoints: `/api/user/profile`, `/api/user/password`, `/api/cv/list`, `/api/cv/delete/[id]`, `/api/match/jobs`.
- Added **training script** `scripts/train_nb.py` and a small seed CSV at `data/seed_samples.csv` to help you build a better model.

### Train your own model
1. Prepare a CSV with columns: `label,text` (label values like `fake` or `real`).  
   You can start from `data/seed_samples.csv`. For larger datasets, consider:
   - **Employment Scam Aegean Dataset (EMSCAD)**
   - **Kaggle: Real vs. Fake Job Postings** (2012–2014 dataset)
2. Run:
```bash
python scripts/train_nb.py data/seed_samples.csv detector/model.json
```
3. Restart the dev server, and the detector will use your updated `detector/model.json`.

"# jobguard" 
