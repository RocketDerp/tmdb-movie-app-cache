export function selectRegion(code: string, region: any, $region: { set: (arg0: any) => void; }): void {
    region.set({ ...$region, locale: code });
    document.cookie = `region=${code};path=/;SameSite=lax;expires=Fri, 31 Dec 2050 23:59:59 GMT`;
}
