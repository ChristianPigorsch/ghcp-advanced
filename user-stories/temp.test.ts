import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { fib } from "./temp.js";

describe("fib", () => {
    it("returns 0 for n=0", () => {
        assert.equal(fib(0), 0);
    });

    it("returns 1 for n=1", () => {
        assert.equal(fib(1), 1);
    });

    it("returns 1 for n=2", () => {
        assert.equal(fib(2), 1);
    });

    it("returns 2 for n=3", () => {
        assert.equal(fib(3), 2);
    });

    it("returns 5 for n=5", () => {
        assert.equal(fib(5), 5);
    });

    it("returns 55 for n=10", () => {
        assert.equal(fib(10), 55);
    });
});
