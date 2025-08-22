let curr = '0', prev = '', op = null;
    const display = document.getElementById('display');

    function update() {
        display.textContent = curr; 
    }
    function appendNum(n) {
        curr = curr === '0' ? n : curr + n; 
        update();
    }
    function appendDot() {
        if (!curr.includes('.')) curr += '.'; 
        update();
    }
    function chooseOp(o) {
        prev = curr; 
        curr = '0'; 
        op = o;
    }
    function compute() {
      if (!op) return;
      const a = parseFloat(prev), b = parseFloat(curr);
      curr = (op==='+')?a+b:(op==='-')?a-b:(op==='*')?a*b:(b? a/b:"Err");
      op = null; update();
    }
    function clearAll() {
        curr = '0';
        prev=''; 
        op=null; update();
    }
    function del() { 
        curr = curr.length>1?curr.slice(0,-1):'0'; 
        update(); 
    }
    function btn(){
        prev = curr; 
        curr = '0'; 
        op = o;
    }