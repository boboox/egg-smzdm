module.exports = app => {
    app.beforeStart(async () => {
        console.log('run schedule')
        app.runSchedule('auto_fetch');
    })
}
