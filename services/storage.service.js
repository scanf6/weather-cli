import {homedir} from 'os';
import {join} from 'path';
import {stat, writeFile, readFile} from 'fs/promises';

const filepath = join(homedir(), 'weather-data.json');

export const saveKeyValue = async (key, value) => {
	let data = {};

	if(await fileExist(filepath)) {
		const fileData = await readFile(filepath);
		data = JSON.parse(fileData);
	}

	data[key] = value;
	await writeFile(filepath, JSON.stringify(data));
}

const fileExist = async (path) => {
	try {
		await stat(path);
		return true;
	} catch(_error) {
		return false;
	}
}