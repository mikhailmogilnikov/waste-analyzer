import Papa from 'papaparse';

export const csvDownloader = (data) => {
    console.log({csvDownloader: data});
    const csvData = Papa.unparse(data);
    console.log({csvData});
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'result.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

export const csvClassesDownloader = (response) => {
    const data = [[
        'file_name', 
        'class_name'
    ]];
    
    response.forEach((item) => {
        data.push([
            item.filename ? item.filename : 'no_name', 
            item.class_name !== 'не определен' ? item.class_name : 'undetected'
        ])
    })

    csvDownloader(data);
}