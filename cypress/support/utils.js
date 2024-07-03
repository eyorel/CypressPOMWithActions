export function generateRandomEmail() {
    const timestamp = new Date().getTime();
    return `user${timestamp}@randomerick.com`;
}
