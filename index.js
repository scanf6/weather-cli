#!/usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const initCLI = (() => {
	const {country, help, token} = yargs(hideBin(process.argv)).argv;

	if(country) {
		// Return weather for searched country

	}

	if(help) {
		// Print help
	}

	if(token) {
		// Set token for openWeather API
	}


	// Return weather for Cotonou

})()