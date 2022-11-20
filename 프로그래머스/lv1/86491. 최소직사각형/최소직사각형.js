function solution(sizes) {
    let width = 0;
    let height = 0;
    for (let i = 0; i < sizes.length; i += 1) {
        let larger = Math.max(...sizes[i]);
        let smaller = Math.min(...sizes[i]);
        
        width = Math.max(width, larger);
        height = Math.max(height, smaller);
    }
    return width * height;
}