#!/usr/bin/env node
const {run} = require('@cli-engine/engine')
const config = {
  channel: 'stable',
  version: '6.16.12-04b3626'
}
run(process.argv, config)
