export function stack(...args) {
    return args.filter(item => typeof item === 'string').join(' ');
}
