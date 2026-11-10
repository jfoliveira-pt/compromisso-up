// A listagem geral e os 18 cartões de perfil são construídos a partir de
// UM único ficheiro de dados: data/candidatos.js.
(() => {
  'use strict';
  const grupos = window.COMPROMISSO_CANDIDATOS || { efetivos:[], suplentes:[] };
  const suffixes = [ ['efetivos','lista-efetivos','perfis-efetivos'], ['suplentes','lista-suplentes','perfis-suplentes'] ];
  const text = (tag, val, cls) => {
    const el=document.createElement(tag); el.textContent=val;
    if(cls) el.className=cls; return el;
  };
  for (const [tipo,listId,profileId] of suffixes) {
    const list=document.getElementById(listId);
    const cards=document.getElementById(profileId);
    for (const [i,c] of (grupos[tipo] || []).entries()) {
      const item=document.createElement('li');
      item.append(text('span',c.nome,'name'),text('span',c.unidade,'unit'));
      list.appendChild(item);
      const article=document.createElement('article'); article.className='candidate-card';
      const img=document.createElement('img'); img.src=c.foto || 'assets/sem-foto.svg'; img.alt = c.foto && c.foto !== 'assets/sem-foto.svg' ? `Fotografia de ${c.nome}` : `Fotografia de ${c.nome} ainda não disponível`;
      img.className='portrait'; img.loading='lazy';
      const info=document.createElement('div'); info.className='candidate-info';
      info.append(text('p',String(i+1).padStart(2,'0')+'  ·  '+c.unidade,'index'),text('h4',c.nome),text('p',c.bio || 'Biografia por adicionar.','bio'));
      article.append(img,info); cards.appendChild(article);
    }
  }
})();
