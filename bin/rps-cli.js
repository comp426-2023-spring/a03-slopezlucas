#!/usr/bin/env node

import {rps, h, rules} from "../lib/rpsls.js"
import minimist from "minimist"

const args = minimist(process.argv.slice(2));

if(args.help || args.h) {
	h();
    process.exit(0);
}
if(args.r || args.rules) {
    rules();
    process.exit(0);
}

var alength = args._length;

switch(alength) {
    case alength == 0:
        console.log(JSON.stringify(rps("null")));
        process.exit(0);
    case alength == 1:
        var player = args._[0].toString().toLowerCase();
        if(player == "rock" || player == "paper" || player == "scissors"){
            console.log(JSON.stringify(rps(player)));
            process.exit(0);
        } 
        else {
            console.log("Unknown input");
            h();
            rules();
            process.exit(0);
        }
    default:
        console.log("$alength is out of range");
        h();
        rules();
        process.exit(0);
}