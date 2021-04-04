const world = 'fuck you'

export function hello (word: string = world): string {
    return `Hello ${world}! `
}

console.log(hello('World!!!!'))
