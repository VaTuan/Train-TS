function showNumberInfor(x: number): number {
    return x;
}
function showStringInfor(y: string): string {
    return y;
}
// cách viết generic trong TS
function showInfor<T>(x: T): T {
    return x;
}
showInfor<boolean>(true);
showInfor<number>(10);
showInfor<string>('Tuan');