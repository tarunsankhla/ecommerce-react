let debouncerTime;

export default function debunce(cb,delayTime) { 
    clearTimeout(debouncerTime);
    debouncerTime = setTimeout(cb, delayTime);
}