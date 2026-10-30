const papers = [
{year:2025,title:'Improved radiation resistance in metals via adaptive martensitic transformation',authors:'Zhang, S.; Dong, Y. B. (co-first author); Sun, Y. T.; Liu, Y.; Sun, L. T.; Zhao, H. W.; Gao, N.; Wang, Z. B.',journal:'Nature Communications',doi:'10.1038/s41467-025-66125-9'},
{year:2025,title:'Enhanced resistance to radiation and magnetic anisotropy change by periodic patterning',authors:'Dong, Yibin; Wang, Fei; Setyawan, Wahyu; Gao, Fei; Wang, Xuelin; Gao, Ning',journal:'Acta Materialia',doi:'10.1016/j.actamat.2025.120880'},
{year:2024,title:'Melting point decrease induced by synergistic effect of proton implantation and electronic excitation',authors:'Yang, Linlong; Yu, Miaosen; Setyawan, Wahyu; Dong, Yibin; Ma, Wenxue; Jia, Huan; He, Yuan; Cai, Hanjie; Zhang, Xunchao; Wang, Xuelin; Gao, Ning',journal:'Journal of Materials Science',doi:'10.1007/s10853-024-10147-z'},
{year:2024,title:'Effect of radiation defects on grain boundary evolution under shock loading',authors:'Chang, H.; Dong, Y. B. (co-first author); Setyawan, W.; Cui, Y. N.; Yu, M. S.; Ma, W. X.; Sun, L. T.; Wang, X. L.; Gao, N.',journal:'Journal of Materials Research and Technology',doi:'10.1016/j.jmrt.2024.06.117'},
{year:2024,title:'Formation of large loop-hydrogen complexes and related effects on mechanical properties',authors:'Ma, W. X.; Yu, M. S.; Setyawan, W.; Dong, Y. B.; Liu, Y.; Gao, N.; Wang, X. L.',journal:'Materials Today Communications',doi:'10.1016/j.mtcomm.2024.108362'},
{year:2023,title:'The Effect of Black-Dot Defects on FeCrAl Radiation Hardening',authors:'Sun, Jian; Yu, Miaosen; Wei, Zhixian; Dai, Hui; Ma, Wenxue; Dong, Yibin; Liu, Yong; Gao, Ning; Wang, Xuelin',journal:'Metals',doi:'10.3390/met13030458'},
{year:2022,title:'Evolution of Symmetrical Grain Boundaries under External Strain in Iron Investigated by Molecular Dynamics',authors:'Ma, Wenxue; Dong, Yibin; Yu, Miaosen; Wang, Ziqiang; Liu, Yong; Gao, Ning; Dong, Limin; Wang, Xuelin',journal:'Metals',doi:'10.3390/met12091448'},
{year:2022,title:'Effect of Cr and Al on Elastic Constants of FeCrAl Alloys Investigated by Molecular Dynamics',authors:'Dai, Hui; Yu, Miaosen; Dong, Yibin; Setyawan, Wahyu; Gao, Ning; Wang, Xuelin',journal:'Metals',doi:'10.3390/met12040558'}
];
let selectedYear='all';
const search=document.getElementById('paper-search');
function renderPapers(){
 const q=search.value.trim().toLowerCase();
 const visible=papers.filter(p=>(selectedYear==='all'||String(p.year)===selectedYear)&&`${p.title} ${p.authors} ${p.journal} ${p.doi}`.toLowerCase().includes(q));
 const list=document.getElementById('publication-list');list.replaceChildren();
 for(const p of visible){const row=document.createElement('article');row.className='publication-row';
 const year=document.createElement('span');year.className='publication-year';year.textContent=p.year;
 const content=document.createElement('div');const h=document.createElement('h3');const link=document.createElement('a');link.href=`https://doi.org/${p.doi}`;link.target='_blank';link.rel='noopener';link.textContent=p.title;h.append(link);
 const authors=document.createElement('p');authors.className='publication-authors';const chunks=p.authors.split(/(Dong, Yibin|Dong, Y\. B\.)/g);chunks.forEach(t=>{if(/^Dong,/.test(t)){const s=document.createElement('strong');s.textContent=t;authors.append(s)}else authors.append(document.createTextNode(t))});
 const journal=document.createElement('p');journal.className='publication-journal';journal.textContent=`${p.journal} · ${p.year} · ${p.doi}`;content.append(h,authors,journal);
 const arrow=document.createElement('a');arrow.className='doi-link';arrow.href=link.href;arrow.target='_blank';arrow.rel='noopener';arrow.setAttribute('aria-label',`Open ${p.title} via DOI`);arrow.textContent='↗';row.append(year,content,arrow);list.append(row)}
 if(!visible.length){const empty=document.createElement('p');empty.className='empty-state';empty.textContent='No publications match your search. Try another keyword or year.';list.append(empty)}
 document.getElementById('publication-count').textContent=`Showing ${visible.length} of ${papers.length} publications`;
}
if(search&&document.getElementById('publication-list')){document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{selectedYear=b.dataset.year;document.querySelectorAll('.filter').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});renderPapers()}));search.addEventListener('input',renderPapers);renderPapers();}
document.querySelector('.menu-toggle').addEventListener('click',function(){const open=this.getAttribute('aria-expanded')!=='true';this.setAttribute('aria-expanded',String(open));this.setAttribute('aria-label',open?'Close navigation':'Open navigation');document.querySelector('nav').classList.toggle('open',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');document.querySelector('.menu-toggle').setAttribute('aria-label','Open navigation')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}});
document.getElementById('copy-email')?.addEventListener('click',async()=>{const status=document.getElementById('copy-status');try{await navigator.clipboard.writeText('yibindong@sdu.edu.cn');status.textContent='Email copied';}catch{status.textContent='yibindong@sdu.edu.cn'}setTimeout(()=>status.textContent='',4000)});
document.getElementById('copyright-year').textContent=new Date().getFullYear();
