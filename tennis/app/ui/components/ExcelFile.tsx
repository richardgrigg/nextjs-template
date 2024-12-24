'use client';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Player } from '@/app/lib/definitions';
import { setDefaultHighWaterMark } from 'stream';

const unknownPlayer = new Player(0, "Unknown", 0, 'M');

function FileInput() {

    const [data, setData] = React.useState<Player[]>([unknownPlayer]);

    const handleFileUpload = (e : React.ChangeEvent<HTMLInputElement>) => {
        if( e.target.files != null) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            if(event.target != null) {
                const workbook = XLSX.read(event.target.result, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const sheetData: Player[] = XLSX.utils.sheet_to_json(sheet);

                setData(sheetData);
                sheetData.map(e => {
                    console.log(e);
                })
                
            };
            reader.readAsBinaryString(file);
        }
    }
    };


    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            {data && (
                <div>
                    <h2>Imported Data:</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default FileInput;
