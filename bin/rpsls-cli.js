#!/usr/bin/env node

import {rpsls, hLS, rulesLS} from "../lib/rpsls.js"
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

if(args.help || args.h) {
	hLS();
    process.exit(0);
}
if(args.r || args.rules) {
    rulesLS();
    process.exit(0);
}

var alength = args._length;

switch(alength) {
    case alength == 0:
        console.log(JSON.stringify(rps("null")));
        process.exit(0);
    case alength == 1:
        var player = args._[0].toString().toLowerCase();
        if(player == 'rock' || player == 'paper' || player == 'scissors' || player == 'lizard' || player == 'splock'){
            console.log(JSON.stringify(rpsls(player)));
            process.exit(0);
        } 
        else {
            console.log("Unknown input");
            hLS();
            rulesLS();
            process.exit(0);
        }
    default:
        console.log("$alength is out of range");
        hLS();
        rulesLS();
        process.exit(0);
}