import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('fungsi sum menambahkan dua angka dengan benar', () => {
  const result = sum(20, 35);
  assert.strictEqual(result, 55);
});

test('fungsi sum bekerja untuk angka negatif', () => {
  const result = sum(-8, 12);
  assert.strictEqual(result, 4);
});

test('fungsi sum bekerja untuk nol', () => {
  const result = sum(0, 17);
  assert.strictEqual(result, 17);
});