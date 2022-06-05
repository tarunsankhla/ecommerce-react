let check = false;

export default function throttle(cb,delayTime) { 
    if (check) return;
    check = true;
    setTimeout(() => {
        cb();
        check = false
    }, delayTime);
    
}