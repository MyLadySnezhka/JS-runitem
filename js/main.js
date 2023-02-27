const elRun = document.querySelector('.runitem');

window.addEventListener('mousemove', ev => {
    const curs = ev.target;
    if (!curs) return;
    if ((ev.pageX<=100)||(ev.pageX>1100)||(ev.pageY<=0)||(ev.pageY>600)) return;

    elRun.style.left = ev.pageX + 'px'; 
    elRun.style.top = ev.pageY + 'px'; 

})


