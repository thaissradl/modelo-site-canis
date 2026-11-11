(function(){
  var PAW='<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#paw"/></svg>';
  var tones=[['#b8812a','#7a4f12'],['#2f5d50','#17342d'],['#a86a2e','#5e3a14'],['#43695f','#1f3d35'],['#c39a4a','#8a5a1c'],['#3b5b73','#1f3547']];
  function ph(i,cls){var t=tones[i%tones.length];return '<div class="ph '+(cls||'')+'" style="--c1:'+t[0]+';--c2:'+t[1]+'">'+PAW+'</div>';}
  function $(id){return document.getElementById(id);}

  /* ---------- dados ---------- */
  var pups=[
    ['Fita Verde','Macho','Dourado','Rex x Aurora','#2e8b57'],
    ['Fita Rosa','Fêmea','Dourado','Thor x Pérola','#e07aa0'],
    ['Fita Preta','Macho','Dourado claro','Rex x Aurora','#222'],
    ['Fita Azul','Macho','Dourado','Thor x Mel','#3a7bd5'],
    ['Fita Lilás','Fêmea','Dourado escuro','Thor x Pérola','#9b7bd0'],
    ['Fita Laranja','Fêmea','Dourado','Rex x Mel','#f08a24'],
    ['Fita Amarela','Macho','Dourado escuro','Thor x Mel','#e6c229'],
    ['Fita Vermelha','Fêmea','Dourado claro','Rex x Aurora','#d63c3c']
  ];
  var litData={
    now:[['Rex x Aurora','Nascimento: 04/09/2026',5,3,7,'Nascida'],['Thor x Pérola','Nascimento: 15/08/2026',2,4,6,'Nascida'],['Thor x Mel','Nascimento: 12/08/2026',4,3,4,'Nascida']],
    next:[['Rex x Pérola','Previsão de nascimento: 20/12/2026',null,null,null,'Previsão'],['Thor x Aurora','Previsão de nascimento: 15/02/2027',null,null,null,'Previsão']],
    past:[['Rex x Mel','Nascimento: 13/07/2026',2,6,0,'Encerrada'],['Thor x Aurora','Nascimento: 02/03/2026',3,5,0,'Encerrada'],['Rex x Pérola','Nascimento: 18/10/2025',4,4,0,'Encerrada']]
  };
  var dogData={
    now:[['Rex','Macho · Campeão de beleza',''],['Thor','Macho · Exames completos',''],['Aurora','Fêmea · Mãe de 3 ninhadas',''],['Pérola','Fêmea · Linhagem importada','']],
    retired:[['Duque','Macho · Reprodutor até 2023','Aposentado em 2023, vive com uma família da região.'],['Bela','Fêmea · Mãe de 5 ninhadas','Aposentada em 2024, mora no canil.']],
    memory:[['Sultão','Macho · Fundador do canil','2011 a 2024'],['Jolie','Fêmea · A primeira matriz','2012 a 2025']]
  };
  var posts=[
    ['10 out 2026','Criação','Como acompanhamos a saúde dos filhotes semana a semana','Do peso ao primeiro exame, o que registramos desde o nascimento até a entrega.'],
    ['22 set 2026','Dicas diversas','Protocolo de recebimento do filhote em casa','O que preparar antes da chegada, a primeira noite e a primeira semana.'],
    ['05 set 2026','Dicas diversas','Giárdia em filhotes: sinais e prevenção','Como reconhecer, quando procurar o veterinário e como evitar.'],
    ['18 ago 2026','Geral','Nossa participação na exposição regional','Resultado dos cães, bastidores e fotos do fim de semana na pista.'],
    ['30 jul 2026','Criação','Como escolhemos cada casal','Genética, temperamento e saúde: o que pesa na hora de planejar uma ninhada.'],
    ['12 jul 2026','Dicas diversas','Vacinas e vermífugo: calendário do primeiro ano','Datas, intervalos e o que o veterinário costuma pedir.'],
    ['25 jun 2026','Geral','Visita das famílias ao canil','Um sábado de encontro com quem já levou um filhote para casa.'],
    ['08 jun 2026','Criação','Desenvolvimento comportamental nas primeiras semanas','Estímulos, sons e contato que preparam o filhote para a vida em família.']
  ];
  var albums=['Histórias em família','Exposições e conquistas','Saúde e propósito','Por dentro do canil','Filhotes pelo mundo','Nossos vídeos'];
  var photoData=[
    [0,'Casamento com a Lua como daminha'],[0,'Aniversário de um ano do Thor'],
    [1,'Melhor de raça, exposição regional'],[1,'Pódio na categoria adultos'],
    [2,'Visita ao laboratório de genética'],[2,'Cães de terapia no hospital'],
    [3,'Maternidade ao lado da casa'],[3,'Rotina da manhã no canil'],
    [4,'Filhote em Lisboa'],[4,'Filhote na praia, litoral sul'],
    [5,'Vídeo: dia de entrega'],[5,'Vídeo: filhotes de seis semanas']
  ];
  var quotes=[
    ['Desde o primeiro contato a atenção foi enorme. Recebi fotos e vídeos toda semana e chegamos em casa com tudo o que a Lua precisava.','Camila','Campinas, SP'],
    ['Visitamos o canil antes de decidir. Conhecemos os pais do nosso filhote e saímos com a certeza de que era o lugar certo.','Rodrigo','Belo Horizonte, MG'],
    ['Já é o segundo Golden que levo daqui. Os dois chegaram saudáveis e muito bem socializados.','Fernanda','São Paulo, SP'],
    ['O suporte depois da entrega fez diferença. Qualquer dúvida sobre alimentação ou vacina, alguém respondia no mesmo dia.','Marcos','Curitiba, PR']
  ];

  /* ---------- renderizadores ---------- */
  function pupCard(p,i){
    var msg=encodeURIComponent('Gostaria de informações sobre o filhote: '+p[0]+' ('+p[3]+')');
    return '<article class="pup">'+ph(i)+'<div class="body"><span class="ribbon"><i style="--rc:'+p[4]+'"></i>'+p[0]+'</span><h3>Golden Retriever</h3><p class="meta">'+p[1]+' · '+p[2]+'<br>Ninhada '+p[3]+'</p><span class="tag">Disponível</span><div class="actions"><a class="btn small" href="#">Saiba tudo sobre o filhote</a><a class="btn gold small" href="https://wa.me/5500000000000?text='+msg+'" target="_blank" rel="noopener">Fale com o criador</a></div></div></article>';
  }
  function litRow(l,i,k){
    var nums=l[2]===null
      ?'<div class="nums"><span>Reservas abertas pelo questionário</span></div>'
      :'<div class="nums"><span><b>'+l[2]+'</b>machos</span><span><b>'+l[3]+'</b>fêmeas</span><span><b>'+l[4]+'</b>disponíveis</span></div>';
    return '<div class="litter">'+ph(i+(k==='past'?3:0))+'<div><span class="status'+(k==='past'?' past':'')+'">'+l[5]+'</span><h3>'+l[0]+'</h3><span style="color:var(--muted);font-size:.9rem">'+l[1]+' · Golden Retriever</span></div>'+nums+'<a class="btn small" href="#">'+(k==='next'?'Reservar vaga':'Conheça')+'</a></div>';
  }
  function postCard(p,i){
    return '<article class="post">'+ph(i+1)+'<div class="body"><time>'+p[0]+' · '+p[1]+'</time><h3>'+p[2]+'</h3><p>'+p[3]+'</p><a href="#">Saiba mais</a></div></article>';
  }
  function pick(group,attr,on,cb){
    var btns=document.querySelectorAll(group+' button');
    btns.forEach(function(b){b.addEventListener('click',function(){
      btns.forEach(function(x){x.setAttribute(attr,'false');});
      b.setAttribute(attr,'true');cb(b);
    });});
  }

  // home
  $('homePups').innerHTML=pups.slice(0,4).map(pupCard).join('');
  $('homeLitters').innerHTML=litData.now.map(function(l,i){return litRow(l,i,'now');}).join('');
  $('homePosts').innerHTML=posts.slice(0,3).map(postCard).join('');
  $('quotes').innerHTML=quotes.map(function(x){return '<figure class="quote" style="margin:0 0 20px"><p>'+x[0]+'</p><footer><b>'+x[1]+'</b> · '+x[2]+'</footer></figure>';}).join('');

  // filhotes
  function renderPups(f){
    var list=pups.filter(function(p){return f==='all'||p[1]===f;});
    $('pups').innerHTML=list.map(pupCard).join('');
    $('pupCount').textContent=list.length+(list.length===1?' filhote':' filhotes');
  }
  renderPups('all');
  pick('#pupFilters','aria-pressed',0,function(b){renderPups(b.dataset.f);});

  // ninhadas
  function renderLit(k){$('litters').innerHTML=litData[k].map(function(l,i){return litRow(l,i,k);}).join('');}
  renderLit('now');
  pick('#litterTabs','aria-selected',0,function(b){renderLit(b.dataset.k);});

  // cães
  function renderDogs(k){
    $('dogs').innerHTML=dogData[k].map(function(d,i){
      var extra=k==='memory'?'<p class="years">'+d[2]+'</p>':(d[2]?'<p class="meta">'+d[2]+'</p>':'');
      return '<article class="pup'+(k==='memory'?' memorial':'')+'">'+ph(i+2)+'<div class="body"><h3>'+d[0]+'</h3><p class="meta">'+d[1]+'</p>'+extra+'<div class="actions"><a class="btn small" href="#">'+(k==='memory'?'Ler a história':'Ver pedigree e exames')+'</a></div></div></article>';
    }).join('');
  }
  renderDogs('now');
  pick('#dogTabs','aria-selected',0,function(b){renderDogs(b.dataset.k);});

  // galeria
  $('albumFilters').innerHTML='<button data-f="-1" aria-pressed="true">Todos</button>'+albums.map(function(a,i){return '<button data-f="'+i+'" aria-pressed="false">'+a+'</button>';}).join('');
  function renderPhotos(f){
    var list=photoData.filter(function(p){return f==='-1'||String(p[0])===f;});
    $('photos').innerHTML=list.map(function(p,i){return '<figure class="photo">'+ph(p[0]+i)+'<figcaption><b>'+albums[p[0]]+'</b><br>'+p[1]+'</figcaption></figure>';}).join('');
    $('photoCount').textContent=list.length+' itens';
  }
  renderPhotos('-1');
  pick('#albumFilters','aria-pressed',0,function(b){renderPhotos(b.dataset.f);});

  // blog
  function renderPosts(f){
    var list=posts.filter(function(p){return f==='all'||p[1]===f;});
    $('posts').innerHTML=list.map(postCard).join('');
    $('postCount').textContent=list.length+(list.length===1?' artigo':' artigos');
  }
  renderPosts('all');
  pick('#catFilters','aria-pressed',0,function(b){renderPosts(b.dataset.f);});

  /* ---------- capa ---------- */
  var cover=$('cover'),html='';
  for(var i=0;i<4;i++){var t=tones[i];html+='<div class="slide'+(i===0?' on':'')+'" style="background:linear-gradient(120deg,'+t[0]+','+t[1]+');color:rgba(255,255,255,.7)">'+PAW.replace('<svg','<svg style="width:70px;fill:currentColor"')+'<span>Foto da capa '+(i+1)+'</span></div>';}
  html+='<div class="dots">'+[0,1,2,3].map(function(i){return '<button aria-label="Foto '+(i+1)+'" class="'+(i===0?'on':'')+'"></button>';}).join('')+'</div>';
  cover.innerHTML=html;
  var slides=cover.querySelectorAll('.slide'),dots=cover.querySelectorAll('.dots button'),cur=0;
  function go(n){slides[cur].classList.remove('on');dots[cur].classList.remove('on');cur=n;slides[cur].classList.add('on');dots[cur].classList.add('on');}
  dots.forEach(function(d,i){d.addEventListener('click',function(){go(i);});});
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){setInterval(function(){go((cur+1)%slides.length);},5000);}

  /* ---------- páginas (rota por #nome) ---------- */
  var views=document.querySelectorAll('[data-view]'),links=document.querySelectorAll('nav a'),menu=$('menu'),burger=$('burger');
  function route(){
    var h=(location.hash||'').replace('#','');
    if(!document.querySelector('[data-view="'+h+'"]'))h='home';
    views.forEach(function(v){v.hidden=v.dataset.view!==h;});
    links.forEach(function(a){if(a.getAttribute('href')==='#'+h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
    menu.classList.remove('open');burger.setAttribute('aria-expanded','false');
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',route);
  route();
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o);});
  // links de exemplo (#) não fazem nada
  document.addEventListener('click',function(e){var a=e.target.closest('a[href="#"]');if(a)e.preventDefault();});
})();