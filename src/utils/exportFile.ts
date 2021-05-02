import * as fs from 'fs';

export function exportFile (fileName: string, json: any) {
    fs.writeFileSync(fileName, json)
}
