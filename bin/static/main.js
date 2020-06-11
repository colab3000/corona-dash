var callback = () => {
    var context = document.getElementById('graph').getContext('2d')
    data = {
        labels:['one', 'two', 'three'],
        data:[1, 24, 70]
    }
    var graph = new Chart(context, {
        type: 'line',
        data: data,
    })
}

if (document.readyState === 'complete' ){
    callback()
}
else{
    document.addEventListener('DOMContentLoaded', callback)
}