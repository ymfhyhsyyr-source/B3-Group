const schedule = [
 {day:'السبت',time:'08:30 - 10:30',subject:'أخلاقيات المهنة',doctor:'قاعة B10',type:'نظري'},
 {day:'السبت',time:'10:30 - 12:30',subject:'عناية',doctor:'قاعة B10',type:'نظري'},
 {day:'السبت',time:'12:30 - 02:30',subject:'طب الألم',doctor:'قاعة B10',type:'نظري + عملي'},
 {day:'الأحد',time:'10:30 - 12:30',subject:'عناية',doctor:'مختبر Lab 49',type:'عملي'},
 {day:'الأحد',time:'12:30 - 02:30',subject:'أجهزة وتخدير',doctor:'مختبر Lab 52',type:'عملي'},
 {day:'الثلاثاء',time:'08:30 - 10:30',subject:'أجهزة',doctor:'قاعة B8',type:'نظري'},
 {day:'الثلاثاء',time:'10:30 - 12:30',subject:'تخدير',doctor:'قاعة B8',type:'نظري'},
 {day:'الثلاثاء',time:'12:30 - 02:30',subject:'باطنية',doctor:'قاعة B8',type:'نظري + عملي'}
];
const subjects = [
  { name: 'اخلاقيات المهنة', desc: 'المحاضرات والملخصات الأسبوعية' },
  { name: 'عناية نظري+عملي', desc: 'النظري والعملي والمواضيع المهمة' },
  { name: 'تخدير نظري+عملي', desc: 'شرح كل موضوع حسب الأسبوع' },
  { name: 'اجهزة نظري+عملي', desc: 'أرشيف المحاضرات والملاحظات' },
  { name: 'طب الألم', desc: 'التطبيقات والمحاضرات العملية' },
  { name: 'باطنية', desc: 'مواد أو إعلانات إضافية للمجموعه' }
];
const   1: [['Pharmacology', 'اكتب هنا موضوع المحاضرة وملخص الشرح'], ['Anatomy', 'شنو أخذنا بالعملي']]

  1:[['Pharmacology','اكتب هنا موضوع المحاضرة وملخص الشرح.'],['Anatomy','اكتب هنا شنو أخذنا بالعملي.']],
  2:[['Physiology','اكتب هنا موضوع الأسبوع الثاني.'],['Pathology','أضف الشرح والملاحظات المهمة.']],
  3:[['Clinical','أضف موضوع المحاضرة لهذا الأسبوع.']]
};
document.getElementById('scheduleBody').innerHTML=schedule.map(x=>`<tr><td>${x.day}</td><td>${x.time}</td><td><b>${x.subject}</b></td><td>${x.doctor}</td><td><span class="tag">${x.type}</span></td></tr>`).join('');
document.getElementById('subjectCards').innerHTML=subjects.map(x=>`<div class="card"><h3>${x.name}</h3><p>${x.desc}</p></div>`).join('');
function showWeek(n){
 document.querySelectorAll('.week').forEach(b=>b.classList.toggle('active',b.dataset.week==n));
 document.getElementById('weekContent').innerHTML=(weeks[n]||[]).map(x=>`<div class="lesson"><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('');
}
document.querySelectorAll('.week').forEach(b=>b.onclick=()=>showWeek(b.dataset.week));
showWeek(1);
document.getElementById('lastUpdate').textContent=new Date().toLocaleDateString('ar-IQ',{day:'numeric',month:'long',year:'numeric'});
