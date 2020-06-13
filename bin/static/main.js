$('document').ready( () => {
    $('#date_form').on('submit', (e) => {
        e.preventDefault()
        //todo
        //get date, country, time span
    })

    chart = (cases, time) => {
        //todo
        //graph of deaths over time
        //graph of infections over time
        //graph of recoveries over time
        let context = document.getElementById('graph').getContext('2d')
        let chart = new Chart(context, {
            type: 'line',
            labels:[...time],
            data: {
                dataset:[{
                    label:'random',
                    data:[...cases]
                }],
            }
        })
    }

    get_request = (request, status) => {
        let content = {'time':[], 'numbers':[]}
        fetch(request)
        .then( response => {
            response.json()
            .then( data => {
                data.forEach(element => {
                    content['time'].push(element['Date'])
                    content['numbers'].push(element['Cases'])
                });
            })
        })
        return content
    }

    get_live_country = (country_name, days, status) => {
        let days_as_milliseconds = days * 24 * 60 * 60 * 1000 
        let x = new Date()
        let y = new Date(x.getTime() - days_as_milliseconds)
        stringify = dateobj => { return `${dateobj.toISOString().split('T')[0]}T00:00:00Z`}
        let addr = `https://api.covid19api.com`
        let request = `${addr}/total/country/${country_name}/status/${status}?from=${stringify(y)}&to=${stringify(x)}`
        content = get_request(request)
        return content
    }
    
})

