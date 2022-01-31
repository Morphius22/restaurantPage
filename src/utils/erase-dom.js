export function eraseDom () {
    document.querySelectorAll('#container').forEach(item => item.remove());
};
