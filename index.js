#!/usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {printError, printHelp, printSuccess} from './services/log.service.js';
import {saveKeyValue} from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue('token', token);
		printSuccess('TOKEN SAVED');
	} catch(error) {
		printError(error.message);
	}

}

const initCLI = (() => {
	const {s, h, t} = yargs(hideBin(process.argv)).argv;

	if(s) {
		// Return weather for searched country

	}

	if(h) {
		// Print help
		printHelp();
	}

	if(t) {
		// Set token for openWeather API
		saveToken(t);
	}


	// Return weather for Cotonou

})()