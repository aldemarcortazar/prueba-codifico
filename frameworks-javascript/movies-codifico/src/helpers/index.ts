


export const generateId: () => string = (): string => {
    const date: string = Date.now().toString(36);
    const random: string = Math.random().toString(36).substring(2);
    return date + random;
}