import Papa from 'papaparse';

const classToNum = (t) => {
    const r = '0';
    switch (t) {
        case 'бетон':
            r = '1';
          break;
        case 'грунт':
            r = '3';
          break;
        case 'дерево':
            r = '2';
          break;
        case 'кирпич':
            r = '4';
          break;
      }

      return r;
}



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

    response.forEach((item, index) => {
        const r = '3';
            switch (item.class_name) {
                case 'бетон':
                    r = '1';
                break;
                case 'грунт':
                    r = '3';
                break;
                case 'дерево':
                    r = '2';
                break;
                case 'кирпич':
                    r = '4';
                break;
            }

        data.push([
            item.filename ? item.filename : 'no_name', 
            r
        ])
    })
    
    // response.forEach((item) => {
    //     data.push([
    //         item.filename ? item.filename : 'no_name', 
    //         item.class_name !== 'не определен' ? item.class_name : 'undetected'
    //     ])
    // })

    csvDownloader(data);
}