import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
	console.log(`${chalk.bgRed('ERROR ')}
	${error}`)
}

export const printSuccess = (msg) => {
	console.log(`${chalk.bgGreen('SUCCESS ')}
	${msg}`)
}

export const printHelp = () => {
	console.log(dedent`${chalk.bgCyan('HELP ')}
	No parameters - Print the weather
	-h	Print Help
	-s [CITY_NAME]	Print weather for the choosed city
	-t [API_key]	Set the Open Weather API KEY`
	);
}