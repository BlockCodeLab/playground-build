#!/usr/bin/env bun --smol

import { argv } from 'node:process';
import { build } from '../lib/builder';

for (const dir of argv.slice(2)) {
  try {
    await build(dir);
  } catch (err) {
    console.error(err);
  }
}
