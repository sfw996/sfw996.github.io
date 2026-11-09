
// 轮播
(function(){
  var slides = document.querySelectorAll('#slider .slide');
  var dots = document.querySelectorAll('#slider .dot');
  if(!slides.length) return;
  var idx = 0;
  function show(i){
    slides.forEach(function(s){s.classList.remove('active')});
    dots.forEach(function(d){d.classList.remove('active')});
    slides[i].classList.add('active');
    if(dots[i]) dots[i].classList.add('active');
  }
  setInterval(function(){ idx = (idx+1) % slides.length; show(idx); }, 4000);
  dots.forEach(function(d, i){ d.onclick = function(){ idx=i; show(i); }; });
})();
// 搜索
(function(){
  var box = document.getElementById('search-result');
  if(!box) return;
  var q = decodeURIComponent(location.search.replace(/^.*q=/,'').replace(/&.*/,''));
  if(!q || q===''){ box.innerHTML='<p style="color:#888;padding:20px">请输入搜索关键词</p>'; return; }
  var kw = q.toLowerCase();
  var res = SITE_DATA.filter(function(o){ return o.t.toLowerCase().indexOf(kw)>-1 || o.d.toLowerCase().indexOf(kw)>-1; });
  if(!res.length){ box.innerHTML='<p style="color:#888;padding:20px">没有找到与「'+q+'」相关的内容</p>'; return; }
  var h = '<h3 style="padding:10px 0;border-bottom:2px solid #c00;color:#c00">找到 '+res.length+' 条与「'+q+'」相关的结果</h3><div style="margin-top:15px">';
  res.forEach(function(o){ h += '<div style="padding:12px;border-bottom:1px dashed #eee"><a href="'+o.u+'" style="font-size:16px;font-weight:600">'+o.t+'</a><p style="color:#777;font-size:13px;margin-top:4px">'+o.d+'</p></div>'; });
  box.innerHTML = h + '</div>';
})();
