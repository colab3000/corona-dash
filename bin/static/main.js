$('document').ready( () => {
    var get_live_country = () => {
        fetch(`https://api.covid19api.com/stats`)
        .then( response => {
            response.json()
            .then( data => {
                return data
            })
        })
        .catch( err => {
            console.log(`error ndio hii\n\n\n***${err}`)
        })
    }
    var chart = () => {
        context = document.getElementById('graph').getContext('2d')
        var chart = new Chart(context, {
            type: 'line',
            data: {
                dataset:[{
                    label:'random',
                    data:[1,2,3,4,5,6]
                }],
            }
        })
    }

    chart();
})

