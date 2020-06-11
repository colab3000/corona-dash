import requests 
from pprint import pprint
from datetime import date, timedelta

ADDR = "https://api.covid19api.com/"

def grab_country_total(country_name):
    '''
    returns total cases for a country from day one to today
    format -> json
    '''
    req_format = f"{ADDR}/total/country/{country_name}"
    response = requests.get(req_format)
    return response.json()

def grab_country_going_back(country_name, days):
    '''
    Returns confirmed cases ranging from current date to {days} before current date
    format -> json 
    '''
    midnight = "T00:00:00Z"
    today = date.today().strftime("%Y-%m-%d")+f"{midnight}"
    then = date.today() - timedelta(days=days)
    then = then.strftime("%Y-%m-%d")+f"{midnight}"
    req_format = f"{ADDR}/country/{country_name}/status/confirmed/live?from={then}&to={today}"
    response = requests.get(req_format)
    return response.json()

def parse_content(content):
    '''
    Create tuple of data that can be graphed by chartjs
    '''
    pass