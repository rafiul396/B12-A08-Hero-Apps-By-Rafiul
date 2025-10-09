export const loadInstalledApps = () => {
    try{
        const appData = localStorage.getItem('installed')
        return appData ? JSON.parse(appData) : []
    } catch(err) {
        console.log(err);
        return [];        
    }
}

export const updatedList = (app) => {
    const installed = loadInstalledApps();

    try{
        const isDuplicate = installed.some(dupli => dupli.id === app.id);
        if(isDuplicate){
            return alert('Existed')
        }
        const updateInstallation = [...installed, app];
        localStorage.setItem('installed', JSON.stringify(updateInstallation))
    } catch(err) {
        console.log(err);     
    }
}