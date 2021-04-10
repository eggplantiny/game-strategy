function add (v1: number, v2: number): number {
    return v1 + v2;
}

describe("test add function", () => {
    it("should return 15 for add(10,5)", () => {
        expect(add(10, 5)).toBe(15);
    });
    it("should return 5 for add(2,3)", () => {
        expect(add(2, 3)).toBe(5);
    });
});
