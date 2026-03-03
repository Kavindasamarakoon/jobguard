
# Minimal Naive Bayes trainer for JobGuard (Python 3.x)
# Usage:
#   pip install pandas
#   python scripts/train_nb.py data/your_dataset.csv detector/model.json
import sys, json, re, math, pandas as pd
def toks(s): return re.findall(r'[a-z]+', str(s).lower())
def train(rows):
  priors = {'fake':0,'real':0}; counts={'fake':{},'real':{}}
  for _,r in rows.iterrows():
    lab = 'fake' if str(r['label']).lower().startswith('f') else 'real'
    priors[lab]+=1
    for t in toks(r['text']):
      counts[lab][t]=counts[lab].get(t,0)+1
  total = priors['fake']+priors['real']
  priors = {'fake':priors['fake']/total,'real':priors['real']/total}
  return {'priors':priors,'fake':counts['fake'],'real':counts['real']}
def main(inp,out):
  df = pd.read_csv(inp)
  model = train(df[['label','text']])
  with open(out,'w',encoding='utf-8') as f: json.dump(model,f,indent=2)
if __name__=='__main__':
  main(sys.argv[1], sys.argv[2])
