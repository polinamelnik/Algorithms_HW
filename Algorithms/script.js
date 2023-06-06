//Итеративный подход
function hanoi(n, source, auxiliary, target) {
    let stack = [];
    stack.push({ disks: n, source, auxiliary, target });
  
    while (stack.length > 0) {
      let { disks, source, auxiliary, target } = stack.pop();
      if (disks === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
      } else {
        stack.push({ disks: disks - 1, source: auxiliary, auxiliary: source, target });
        stack.push({ disks: 1, source, auxiliary, target });
        stack.push({ disks: disks - 1, source, auxiliary: target, target: auxiliary });
      }
    }
  }
  
  let n = 3;
  hanoi(n, 'left', 'middle', 'right');
 



//Рекурсивный подход
function hanoi2(p, source, auxiliary, target) {
    if (p > 0) {
      hanoi2(p - 1, source, target, auxiliary);
      console.log(`Move disk ${n} from ${source} to ${target}`);
      hanoi2(p - 1, auxiliary, source, target);
    }
  }
  
  let p = 3;
  hanoi2(p, 'left', 'middle', 'right');

  