$('document').ready( () => {
    let today = new Date().toISOString().split('T')[0]
    let origin_date = "2019-12-31"
    $('input[name="date_from"]').attr('max', today)   
    $('input[name="date_from"]').attr('min', origin_date)
    $('input[name="date_to"]').attr('max', today)
    $('input[name="date_to"]').attr('min', origin_date)


    charter = (content) => {
        let {numbers, time} = content
        let context = document.getElementById('graph')
        chart = new Chart(context, {
            type:'line',
            data:{
                labels:time,
                datasets:[{
                    data:numbers,
                    label:'Cases'
            }]
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

    get_live_country = async (country_name, date_from, date_to, status) => {
        let addr = `https://api.covid19api.com`
        let request = `${addr}/total/country/${country_name}/status/${status}?from=${date_from}&to=${date_to}`
        content = get_request(request)
        return content
    }

    //date_from
    //date_to
    //country_name
    //status
    $('#date_form').on('submit' , (e) =>{
        e.preventDefault()
        let data = {
            'date_from':$('input[name="date_from"]').val(),
            'date_to':$('input[name="date_to"]').val(),
            'country_name':$('input[name="country_name"]').val(),
            'status':$('input[name="status"]').val()
        }
        let x = get_live_country(data['country_name'],data['date_from'] ,data['date_to'], data['status'])
        charter(x)
    })

})

